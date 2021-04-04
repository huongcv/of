import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, filter, finalize, takeUntil, tap } from 'rxjs/operators';
import { AppUtilityService } from '../../services/app-utility-service';
export class OfSelectSearchServerComponent {
    constructor(destroy$, cdr) {
        this.destroy$ = destroy$;
        this.cdr = cdr;
        this.options = [];
        this.option$ = new BehaviorSubject([]);
        this.backUpItems = [];
        this.optionDebound$ = this.option$.pipe(debounceTime(222)).pipe(tap(() => {
            this.triggerDetectChanges();
        }));
        this.txtSearch = '';
        this.txtSearch$ = new Subject();
        this.skipCount = 0;
        this.totalItems = 0;
        this.nzPageIndex = 1;
        this.firstOptions = [];
        this.firstTotal = 0;
        this.isLoading = false;
        this.maxResultCount = 12;
    }
    ngOnInit() {
        this.handlerSearch();
    }
    handlerSearch() {
        this.txtSearch$.pipe(takeUntil(this.destroy$))
            .pipe(debounceTime(1000))
            .subscribe(txt => {
            this.txtSearch = txt;
            if (AppUtilityService.isNullOrEmpty(txt)) {
                this.loadFirstOption();
            }
            else {
                this.skipCount = 0;
                this.nzPageIndex = 1;
                this.getOptionsFromBE(txt);
            }
        });
    }
    search(txt) {
        this.txtSearch$.next(txt);
    }
    nzOpenChange(open) {
        if (open) {
            this.loadFirstOption();
        }
    }
    trackBySelect(index, item) {
        return item.value;
    }
    loadFirstOption() {
        var _a;
        if (this.firstTotal > 0) {
            this.totalItems = this.firstTotal;
            this.nzPageIndex = 1;
            let opt = this.firstOptions;
            if ((_a = this.field) === null || _a === void 0 ? void 0 : _a.itemSelected) {
                // tslint:disable-next-line:triple-equals
                const f = opt.find(s => s.value == this.field.itemSelected.value);
                if (AppUtilityService.isNullOrEmpty(f)) {
                    opt = [this.field.itemSelected, ...this.firstOptions];
                }
            }
            this.setOptions(opt);
        }
        else {
            this.getOptionsFromBE('', null, true);
        }
    }
    // tslint:disable-next-line:no-shadowed-variable
    getOptionsFromBE(filter, value, isFirst = false) {
        const getOneId = AppUtilityService.isNotNull(value);
        if (getOneId) {
            filter = '';
            // tslint:disable-next-line:triple-equals
            const f = _.find(this.backUpItems, s => s.value == value);
            if (f) {
                this.setOptions([f]);
                return;
            }
        }
        this.isLoading = true;
        let skipCount = this.skipCount;
        const maxResultCount = (!this.field.showPagination && isFirst) ? 50 : this.maxResultCount;
        if (this.field.showPagination) {
            skipCount = (this.nzPageIndex - 1) * this.maxResultCount;
        }
        const reqBody = {
            filter,
            value,
            maxResultCount,
            skipCount
        };
        this.field.functionService(reqBody)
            .pipe(finalize(() => {
            this.isLoading = false;
        }))
            .subscribe(d => {
            let options = (d === null || d === void 0 ? void 0 : d.items) || [];
            this.backUpItems = [...this.backUpItems, ...options];
            if (isFirst) {
                this.firstOptions = options;
                this.firstTotal = d.totalCount;
            }
            if (getOneId) {
                this.field.itemSelected = (d === null || d === void 0 ? void 0 : d.items[0]) || null;
            }
            if (AppUtilityService.isNullOrEmpty(value)) {
                this.totalItems = (d === null || d === void 0 ? void 0 : d.totalCount) || 0;
            }
            if (skipCount > 0 && !this.field.showPagination) {
                options = [...this.options, ...options];
            }
            this.setOptions(options);
            this.skipCount = reqBody.skipCount + reqBody.maxResultCount;
        });
    }
    setOptions(options) {
        this.options = options;
        this.option$.next(options);
        this.triggerDetectChanges();
    }
    getItemSelected() {
        const value$ = this.group.get(this.field.dataField).valueChanges.pipe(takeUntil(this.destroy$))
            .pipe(tap((v) => {
            if (AppUtilityService.isNullOrEmpty(v)) {
                this.field.itemSelected = null;
            }
            this.triggerDetectChanges();
        })).pipe(filter(s => !AppUtilityService.isNullOrEmpty(s)));
        value$.subscribe(value => {
            var _a;
            // tslint:disable-next-line:triple-equals
            const f = (_a = this.backUpItems) === null || _a === void 0 ? void 0 : _a.find(s => s.value == value);
            if (AppUtilityService.isNotNull(f)) {
                this.field.itemSelected = f;
                this.setOptions([f]);
                return;
            }
            else {
                this.getOptionsFromBE(null, value);
            }
            this.triggerDetectChanges();
        });
    }
    get f() {
        return this.group.get(this.field.dataField);
    }
    ngAfterViewInit() {
        this.getItemSelected();
        this.triggerDetectChanges();
        this.schemaModel.subRender(this.cdr, this.destroy$);
    }
    triggerDetectChanges() {
        setTimeout(() => {
            this.cdr.detectChanges();
        }, 200);
    }
    loadMore() {
        if (this.field.showPagination) {
            return;
        }
        this.isLoading = true;
        if (this.skipCount > this.totalItems) {
            this.isLoading = false;
            return;
        }
        this.getOptionsFromBE(this.txtSearch, null);
    }
    nzPageIndexChange() {
        this.getOptionsFromBE(this.txtSearch);
    }
}
OfSelectSearchServerComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-select-search-server',
                template: "<form [formGroup]=\"group\">\r\n  <nz-select [formControlName]=\"field.dataField\" style=\" width: 100%;\"\r\n             (nzOpenChange)=\"nzOpenChange($event)\"\r\n             (nzScrollToBottom)=\"loadMore()\"\r\n             [nzCustomTemplate]=\"tplSelectedView\"\r\n             [nzOptionHeightPx]=\"26\"\r\n             [nzPlaceHolder]=\"field.placeholder\"\r\n             [nzMode]=\"field.nzMode\" [nzAllowClear]=\"field.nzAllowClear\"\r\n             nzShowSearch nzServerSearch (nzOnSearch)=\"search($event)\"\r\n             [nzMaxMultipleCount]=\"field?.nzMaxMultipleCount\" [nzMaxTagCount]=\"field?.nzMaxTagCount\"\r\n             [nzDropdownRender]=\"renderTemplate\">\r\n    <nz-option [nzCustomContent]=\"true\" *ngFor=\"let option of optionDebound$ | async;trackBy:trackBySelect\"\r\n               [nzLabel]=\"option.displayText\"\r\n               [nzValue]=\"option.value\"\r\n    >\r\n      <span [innerHTML]=\"option.displayText | ofSelectRenderOption: field: option\">\r\n      </span>\r\n    </nz-option>\r\n  </nz-select>\r\n</form>\r\n<ng-template #tplSelectedView let-selected>\r\n  <span [innerHTML]=\"selected.nzValue | ofOptionSelected:selected.nzLabel:field\"></span>\r\n</ng-template>\r\n<ng-template #renderTemplate>\r\n\r\n  <div class=\"select-pagination\" *ngIf=\"field.showPagination\">\r\n    <nz-pagination nzSize=\"small\" [nzPageSize]=\"maxResultCount\" [(nzPageIndex)]=\"nzPageIndex\"\r\n                   (nzPageIndexChange)=\"nzPageIndexChange()\"\r\n                   [nzTotal]=\"totalItems\"></nz-pagination>\r\n  </div>\r\n  <nz-spin *ngIf=\"isLoading\"></nz-spin>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [DestroyRxjsService],
                encapsulation: ViewEncapsulation.None,
                styles: [":host ::ng-deep .cdk-virtual-scroll-viewport{min-height:120px!important}.select-pagination{margin-top:8px;margin-bottom:3px}"]
            },] }
];
OfSelectSearchServerComponent.ctorParameters = () => [
    { type: DestroyRxjsService },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFVdkUsTUFBTSxPQUFPLDZCQUE2QjtJQW9CeEMsWUFBb0IsUUFBNEIsRUFDNUIsR0FBc0I7UUFEdEIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQjFDLFlBQU8sR0FBeUIsRUFBRSxDQUFDO1FBQ25DLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBdUIsRUFBRSxDQUFDLENBQUM7UUFDeEQsZ0JBQVcsR0FBeUIsRUFBRSxDQUFDO1FBQ3ZDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDbEUsSUFBSSxDQUFDLG9CQUFv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IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRGVzdHJveVJ4anNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzdHJveS1yeGpzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJT2ZTZWxlY3RPcHRpb25EdG8sIE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBJU2VsZWN0U2VhcmNoU2VydmVyRHRvLCBPZlNlbGVjdFNlYXJjaFNlcnZlck1vZGVsIH0gZnJvbSAnLi9vZi1zZWxlY3Qtc2VhcmNoLXNlcnZlci5tb2RlbCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgZmluYWxpemUsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBcHBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwcC11dGlsaXR5LXNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvZi1zZWxlY3Qtc2VhcmNoLXNlcnZlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtEZXN0cm95Unhqc1NlcnZpY2VdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZTZWxlY3RTZWFyY2hTZXJ2ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xyXG4gIGZpZWxkOiBPZlNlbGVjdFNlYXJjaFNlcnZlck1vZGVsO1xyXG4gIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgb3B0aW9uczogSU9mU2VsZWN0T3B0aW9uRHRvW10gPSBbXTtcclxuICBvcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJT2ZTZWxlY3RPcHRpb25EdG9bXT4oW10pO1xyXG4gIGJhY2tVcEl0ZW1zOiBJT2ZTZWxlY3RPcHRpb25EdG9bXSA9IFtdO1xyXG4gIG9wdGlvbkRlYm91bmQkID0gdGhpcy5vcHRpb24kLnBpcGUoZGVib3VuY2VUaW1lKDIyMikpLnBpcGUodGFwKCgpID0+IHtcclxuICAgIHRoaXMudHJpZ2dlckRldGVjdENoYW5nZXMoKTtcclxuICB9KSk7XHJcbiAgdHh0U2VhcmNoID0gJyc7XHJcbiAgdHh0U2VhcmNoJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBza2lwQ291bnQgPSAwO1xyXG4gIHRvdGFsSXRlbXMgPSAwO1xyXG4gIG56UGFnZUluZGV4ID0gMTtcclxuICBmaXJzdE9wdGlvbnM6IElPZlNlbGVjdE9wdGlvbkR0b1tdID0gW107XHJcbiAgZmlyc3RUb3RhbCA9IDA7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgbWF4UmVzdWx0Q291bnQgPSAxMjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXN0cm95JDogRGVzdHJveVJ4anNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlclNlYXJjaCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlclNlYXJjaCgpIHtcclxuICAgIHRoaXMudHh0U2VhcmNoJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKVxyXG4gICAgICAuc3Vic2NyaWJlKHR4dCA9PiB7XHJcbiAgICAgICAgdGhpcy50eHRTZWFyY2ggPSB0eHQ7XHJcbiAgICAgICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkodHh0KSkge1xyXG4gICAgICAgICAgdGhpcy5sb2FkRmlyc3RPcHRpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5za2lwQ291bnQgPSAwO1xyXG4gICAgICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgICB0aGlzLmdldE9wdGlvbnNGcm9tQkUodHh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKHR4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR4dFNlYXJjaCQubmV4dCh0eHQpO1xyXG4gIH1cclxuXHJcbiAgbnpPcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pIHtcclxuICAgIGlmIChvcGVuKSB7XHJcbiAgICAgIHRoaXMubG9hZEZpcnN0T3B0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja0J5U2VsZWN0KGluZGV4OiBudW1iZXIsIGl0ZW06IElPZlNlbGVjdE9wdGlvbkR0bykge1xyXG4gICAgcmV0dXJuIGl0ZW0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBsb2FkRmlyc3RPcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5maXJzdFRvdGFsID4gMCkge1xyXG4gICAgICB0aGlzLnRvdGFsSXRlbXMgPSB0aGlzLmZpcnN0VG90YWw7XHJcbiAgICAgIHRoaXMubnpQYWdlSW5kZXggPSAxO1xyXG4gICAgICBsZXQgb3B0ID0gdGhpcy5maXJzdE9wdGlvbnM7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkPy5pdGVtU2VsZWN0ZWQpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIGNvbnN0IGYgPSBvcHQuZmluZChzID0+IHMudmFsdWUgPT0gdGhpcy5maWVsZC5pdGVtU2VsZWN0ZWQudmFsdWUpO1xyXG4gICAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KGYpKSB7XHJcbiAgICAgICAgICBvcHQgPSBbdGhpcy5maWVsZC5pdGVtU2VsZWN0ZWQsIC4uLnRoaXMuZmlyc3RPcHRpb25zXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE9wdGlvbnNGcm9tQkUoJycsIG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgZ2V0T3B0aW9uc0Zyb21CRShmaWx0ZXI/OiBzdHJpbmcsIHZhbHVlPzogc3RyaW5nIHwgbnVsbCwgaXNGaXJzdCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBnZXRPbmVJZCA9IEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90TnVsbCh2YWx1ZSk7XHJcbiAgICBpZiAoZ2V0T25lSWQpIHtcclxuICAgICAgZmlsdGVyID0gJyc7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXHJcbiAgICAgIGNvbnN0IGYgPSBfLmZpbmQodGhpcy5iYWNrVXBJdGVtcywgcyA9PiBzLnZhbHVlID09IHZhbHVlKTtcclxuICAgICAgaWYgKGYpIHtcclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoW2ZdKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIGxldCBza2lwQ291bnQgPSB0aGlzLnNraXBDb3VudDtcclxuICAgIGNvbnN0IG1heFJlc3VsdENvdW50ID0gKCF0aGlzLmZpZWxkLnNob3dQYWdpbmF0aW9uICYmIGlzRmlyc3QpID8gNTAgOiB0aGlzLm1heFJlc3VsdENvdW50O1xyXG4gICAgaWYgKHRoaXMuZmllbGQuc2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgc2tpcENvdW50ID0gKHRoaXMubnpQYWdlSW5kZXggLSAxKSAqIHRoaXMubWF4UmVzdWx0Q291bnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXFCb2R5OiBJU2VsZWN0U2VhcmNoU2VydmVyRHRvID0ge1xyXG4gICAgICBmaWx0ZXIsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBtYXhSZXN1bHRDb3VudCxcclxuICAgICAgc2tpcENvdW50XHJcbiAgICB9O1xyXG4gICAgdGhpcy5maWVsZC5mdW5jdGlvblNlcnZpY2UocmVxQm9keSlcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pKVxyXG4gICAgICAuc3Vic2NyaWJlKGQgPT4ge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gZD8uaXRlbXMgfHwgW107XHJcbiAgICAgICAgdGhpcy5iYWNrVXBJdGVtcyA9IFsuLi50aGlzLmJhY2tVcEl0ZW1zLCAuLi5vcHRpb25zXTtcclxuICAgICAgICBpZiAoaXNGaXJzdCkge1xyXG4gICAgICAgICAgdGhpcy5maXJzdE9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgICAgdGhpcy5maXJzdFRvdGFsID0gZC50b3RhbENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0T25lSWQpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQuaXRlbVNlbGVjdGVkID0gZD8uaXRlbXNbMF0gfHwgbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkodmFsdWUpKSB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBkPy50b3RhbENvdW50IHx8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChza2lwQ291bnQgPiAwICYmICF0aGlzLmZpZWxkLnNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICBvcHRpb25zID0gWy4uLnRoaXMub3B0aW9ucywgLi4ub3B0aW9uc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnNraXBDb3VudCA9IHJlcUJvZHkuc2tpcENvdW50ICsgcmVxQm9keS5tYXhSZXN1bHRDb3VudDtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLm9wdGlvbiQubmV4dChvcHRpb25zKTtcclxuICAgIHRoaXMudHJpZ2dlckRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW1TZWxlY3RlZCgpIHtcclxuICAgIGNvbnN0IHZhbHVlJCA9IHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKS52YWx1ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5waXBlKHRhcCgodikgPT4ge1xyXG4gICAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHYpKSB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLml0ZW1TZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJpZ2dlckRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSkpLnBpcGUoZmlsdGVyKHMgPT4gIUFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkocykpKTtcclxuICAgIHZhbHVlJC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICBjb25zdCBmID0gdGhpcy5iYWNrVXBJdGVtcz8uZmluZChzID0+IHMudmFsdWUgPT0gdmFsdWUpO1xyXG4gICAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOb3ROdWxsKGYpKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5pdGVtU2VsZWN0ZWQgPSBmO1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhbZl0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdldE9wdGlvbnNGcm9tQkUobnVsbCwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJpZ2dlckRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGYoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC5kYXRhRmllbGQpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nZXRJdGVtU2VsZWN0ZWQoKTtcclxuICAgIHRoaXMudHJpZ2dlckRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuc2NoZW1hTW9kZWwuc3ViUmVuZGVyKHRoaXMuY2RyLCB0aGlzLmRlc3Ryb3kkKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJEZXRlY3RDaGFuZ2VzKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDIwMCk7XHJcbiAgfVxyXG5cclxuICBsb2FkTW9yZSgpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLnNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnNraXBDb3VudCA+IHRoaXMudG90YWxJdGVtcykge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldE9wdGlvbnNGcm9tQkUodGhpcy50eHRTZWFyY2gsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgbnpQYWdlSW5kZXhDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLmdldE9wdGlvbnNGcm9tQkUodGhpcy50eHRTZWFyY2gpO1xyXG4gIH1cclxufVxyXG4iXX0=