import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, filter, finalize, takeUntil, tap } from 'rxjs/operators';
import { AppUtilityService } from '../../services/app-utility-service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/destroy-rxjs.service";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/select";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/pagination";
import * as i6 from "ng-zorro-antd/spin";
import * as i7 from "../../pipes/of-select-render-option.pipe";
import * as i8 from "../../pipes/of-option-selected.pipe";
function OfSelectSearchServerComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-option", 5);
    i0.ɵɵelement(1, "span", 6);
    i0.ɵɵpipe(2, "ofSelectRenderOption");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzCustomContent", true)("nzLabel", option_r5.displayText)("nzValue", option_r5.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind3(2, 4, option_r5.displayText, ctx_r0.field, option_r5), i0.ɵɵsanitizeHtml);
} }
function OfSelectSearchServerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
    i0.ɵɵpipe(1, "ofOptionSelected");
} if (rf & 2) {
    const selected_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind3(1, 1, selected_r6.nzValue, selected_r6.nzLabel, ctx_r2.field), i0.ɵɵsanitizeHtml);
} }
function OfSelectSearchServerComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "nz-pagination", 10);
    i0.ɵɵlistener("nzPageIndexChange", function OfSelectSearchServerComponent_ng_template_6_div_0_Template_nz_pagination_nzPageIndexChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.nzPageIndex = $event; })("nzPageIndexChange", function OfSelectSearchServerComponent_ng_template_6_div_0_Template_nz_pagination_nzPageIndexChange_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.nzPageIndexChange(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzPageSize", ctx_r7.maxResultCount)("nzPageIndex", ctx_r7.nzPageIndex)("nzTotal", ctx_r7.totalItems);
} }
function OfSelectSearchServerComponent_ng_template_6_nz_spin_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-spin");
} }
function OfSelectSearchServerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OfSelectSearchServerComponent_ng_template_6_div_0_Template, 2, 3, "div", 7);
    i0.ɵɵtemplate(1, OfSelectSearchServerComponent_ng_template_6_nz_spin_1_Template, 1, 0, "nz-spin", 8);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.field.showPagination);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isLoading);
} }
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
OfSelectSearchServerComponent.ɵfac = function OfSelectSearchServerComponent_Factory(t) { return new (t || OfSelectSearchServerComponent)(i0.ɵɵdirectiveInject(i1.DestroyRxjsService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
OfSelectSearchServerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfSelectSearchServerComponent, selectors: [["of-select-search-server"]], features: [i0.ɵɵProvidersFeature([DestroyRxjsService])], decls: 8, vars: 14, consts: [[3, "formGroup"], ["nzShowSearch", "", "nzServerSearch", "", 2, "width", "100%", 3, "formControlName", "nzCustomTemplate", "nzOptionHeightPx", "nzPlaceHolder", "nzMode", "nzAllowClear", "nzMaxMultipleCount", "nzMaxTagCount", "nzDropdownRender", "nzOpenChange", "nzScrollToBottom", "nzOnSearch"], [3, "nzCustomContent", "nzLabel", "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tplSelectedView", ""], ["renderTemplate", ""], [3, "nzCustomContent", "nzLabel", "nzValue"], [3, "innerHTML"], ["class", "select-pagination", 4, "ngIf"], [4, "ngIf"], [1, "select-pagination"], ["nzSize", "small", 3, "nzPageSize", "nzPageIndex", "nzTotal", "nzPageIndexChange"]], template: function OfSelectSearchServerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "nz-select", 1);
        i0.ɵɵlistener("nzOpenChange", function OfSelectSearchServerComponent_Template_nz_select_nzOpenChange_1_listener($event) { return ctx.nzOpenChange($event); })("nzScrollToBottom", function OfSelectSearchServerComponent_Template_nz_select_nzScrollToBottom_1_listener() { return ctx.loadMore(); })("nzOnSearch", function OfSelectSearchServerComponent_Template_nz_select_nzOnSearch_1_listener($event) { return ctx.search($event); });
        i0.ɵɵtemplate(2, OfSelectSearchServerComponent_nz_option_2_Template, 3, 8, "nz-option", 2);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, OfSelectSearchServerComponent_ng_template_4_Template, 2, 5, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, OfSelectSearchServerComponent_ng_template_6_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(5);
        const _r3 = i0.ɵɵreference(7);
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControlName", ctx.field.dataField)("nzCustomTemplate", _r1)("nzOptionHeightPx", 26)("nzPlaceHolder", ctx.field.placeholder)("nzMode", ctx.field.nzMode)("nzAllowClear", ctx.field.nzAllowClear)("nzMaxMultipleCount", ctx.field == null ? null : ctx.field.nzMaxMultipleCount)("nzMaxTagCount", ctx.field == null ? null : ctx.field.nzMaxTagCount)("nzDropdownRender", _r3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 12, ctx.optionDebound$))("ngForTrackBy", ctx.trackBySelect);
    } }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i3.NzSelectComponent, i2.NgControlStatus, i2.FormControlName, i4.NgForOf, i3.NzOptionComponent, i4.NgIf, i5.NzPaginationComponent, i6.NzSpinComponent], pipes: [i4.AsyncPipe, i7.OfSelectRenderOptionPipe, i8.OfOptionSelectedPipe], styles: [":host ::ng-deep .cdk-virtual-scroll-viewport{min-height:120px!important}.select-pagination{margin-top:8px;margin-bottom:3px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfSelectSearchServerComponent, [{
        type: Component,
        args: [{
                selector: 'of-select-search-server',
                templateUrl: './of-select-search-server.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [DestroyRxjsService],
                encapsulation: ViewEncapsulation.None,
                styleUrls: ['./of-select-search-server.component.scss']
            }]
    }], function () { return [{ type: i1.DestroyRxjsService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1zZWxlY3Qtc2VhcmNoLXNlcnZlci9vZi1zZWxlY3Qtc2VhcmNoLXNlcnZlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7SUNMbkUsb0NBSUU7SUFBQSwwQkFDTzs7SUFDVCxpQkFBWTs7OztJQU5ELHNDQUF3QixrQ0FBQSw0QkFBQTtJQUkzQixlQUFzRTtJQUF0RSxtSEFBc0U7OztJQU1oRiwwQkFBc0Y7Ozs7O0lBQWhGLDJIQUF3RTs7OztJQUk5RSw4QkFDRTtJQUFBLHlDQUVzQztJQUZzQiw4UEFBNkIsNE9BQUE7SUFFbkQsaUJBQWdCO0lBQ3hELGlCQUFNOzs7SUFIMEIsZUFBNkI7SUFBN0Isa0RBQTZCLG1DQUFBLDhCQUFB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VUFBVSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OzBHQXhMVSw2QkFBNkI7a0VBQTdCLDZCQUE2Qiw2RUFKN0IsQ0FBQyxrQkFBa0IsQ0FBQztRQ3RCakMsK0JBQ0U7UUFBQSxvQ0FVRTtRQVRTLGlJQUFnQix3QkFBb0IsSUFBQyxzSEFDakIsY0FBVSxJQURPLGdIQU1LLGtCQUFjLElBTm5CO1FBUzlDLDBGQU1ZOztRQUNkLGlCQUFZO1FBQ2QsaUJBQU87UUFDUCwrSEFFYztRQUNkLCtIQVFjOzs7O1FBL0JSLHFDQUFtQjtRQUNaLGVBQW1DO1FBQW5DLHFEQUFtQyx5QkFBQSx3QkFBQSx3Q0FBQSw0QkFBQSx3Q0FBQSwrRUFBQSxxRUFBQSx5QkFBQTtRQVVXLGVBQTBCO1FBQTFCLG1FQUEwQixtQ0FBQTs7a0REZXhFLDZCQUE2QjtjQVJ6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDBDQUEwQztnQkFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUMvQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERlc3Ryb3lSeGpzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Rlc3Ryb3ktcnhqcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSU9mU2VsZWN0T3B0aW9uRHRvLCBPZlNjaGVtYU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgSVNlbGVjdFNlYXJjaFNlcnZlckR0bywgT2ZTZWxlY3RTZWFyY2hTZXJ2ZXJNb2RlbCB9IGZyb20gJy4vb2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIGZpbmFsaXplLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXBwVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcHAtdXRpbGl0eS1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vZi1zZWxlY3Qtc2VhcmNoLXNlcnZlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbRGVzdHJveVJ4anNTZXJ2aWNlXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlVXJsczogWycuL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9mU2VsZWN0U2VhcmNoU2VydmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBzY2hlbWFNb2RlbDogT2ZTY2hlbWFNb2RlbDtcclxuICBmaWVsZDogT2ZTZWxlY3RTZWFyY2hTZXJ2ZXJNb2RlbDtcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG4gIG9wdGlvbnM6IElPZlNlbGVjdE9wdGlvbkR0b1tdID0gW107XHJcbiAgb3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SU9mU2VsZWN0T3B0aW9uRHRvW10+KFtdKTtcclxuICBiYWNrVXBJdGVtczogSU9mU2VsZWN0T3B0aW9uRHRvW10gPSBbXTtcclxuICBvcHRpb25EZWJvdW5kJCA9IHRoaXMub3B0aW9uJC5waXBlKGRlYm91bmNlVGltZSgyMjIpKS5waXBlKHRhcCgoKSA9PiB7XHJcbiAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfSkpO1xyXG4gIHR4dFNlYXJjaCA9ICcnO1xyXG4gIHR4dFNlYXJjaCQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgc2tpcENvdW50ID0gMDtcclxuICB0b3RhbEl0ZW1zID0gMDtcclxuICBuelBhZ2VJbmRleCA9IDE7XHJcbiAgZmlyc3RPcHRpb25zOiBJT2ZTZWxlY3RPcHRpb25EdG9bXSA9IFtdO1xyXG4gIGZpcnN0VG90YWwgPSAwO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIG1heFJlc3VsdENvdW50ID0gMTI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVzdHJveSQ6IERlc3Ryb3lSeGpzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZXJTZWFyY2goKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZXJTZWFyY2goKSB7XHJcbiAgICB0aGlzLnR4dFNlYXJjaCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDAwKSlcclxuICAgICAgLnN1YnNjcmliZSh0eHQgPT4ge1xyXG4gICAgICAgIHRoaXMudHh0U2VhcmNoID0gdHh0O1xyXG4gICAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHR4dCkpIHtcclxuICAgICAgICAgIHRoaXMubG9hZEZpcnN0T3B0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2tpcENvdW50ID0gMDtcclxuICAgICAgICAgIHRoaXMubnpQYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKHR4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaCh0eHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50eHRTZWFyY2gkLm5leHQodHh0KTtcclxuICB9XHJcblxyXG4gIG56T3BlbkNoYW5nZShvcGVuOiBib29sZWFuKSB7XHJcbiAgICBpZiAob3Blbikge1xyXG4gICAgICB0aGlzLmxvYWRGaXJzdE9wdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tCeVNlbGVjdChpbmRleDogbnVtYmVyLCBpdGVtOiBJT2ZTZWxlY3RPcHRpb25EdG8pIHtcclxuICAgIHJldHVybiBpdGVtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbG9hZEZpcnN0T3B0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuZmlyc3RUb3RhbCA+IDApIHtcclxuICAgICAgdGhpcy50b3RhbEl0ZW1zID0gdGhpcy5maXJzdFRvdGFsO1xyXG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gMTtcclxuICAgICAgbGV0IG9wdCA9IHRoaXMuZmlyc3RPcHRpb25zO1xyXG4gICAgICBpZiAodGhpcy5maWVsZD8uaXRlbVNlbGVjdGVkKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgICBjb25zdCBmID0gb3B0LmZpbmQocyA9PiBzLnZhbHVlID09IHRoaXMuZmllbGQuaXRlbVNlbGVjdGVkLnZhbHVlKTtcclxuICAgICAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eShmKSkge1xyXG4gICAgICAgICAgb3B0ID0gW3RoaXMuZmllbGQuaXRlbVNlbGVjdGVkLCAuLi50aGlzLmZpcnN0T3B0aW9uc107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKCcnLCBudWxsLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gIGdldE9wdGlvbnNGcm9tQkUoZmlsdGVyPzogc3RyaW5nLCB2YWx1ZT86IHN0cmluZyB8IG51bGwsIGlzRmlyc3QgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZ2V0T25lSWQgPSBBcHBVdGlsaXR5U2VydmljZS5pc05vdE51bGwodmFsdWUpO1xyXG4gICAgaWYgKGdldE9uZUlkKSB7XHJcbiAgICAgIGZpbHRlciA9ICcnO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICBjb25zdCBmID0gXy5maW5kKHRoaXMuYmFja1VwSXRlbXMsIHMgPT4gcy52YWx1ZSA9PSB2YWx1ZSk7XHJcbiAgICAgIGlmIChmKSB7XHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKFtmXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBsZXQgc2tpcENvdW50ID0gdGhpcy5za2lwQ291bnQ7XHJcbiAgICBjb25zdCBtYXhSZXN1bHRDb3VudCA9ICghdGhpcy5maWVsZC5zaG93UGFnaW5hdGlvbiAmJiBpc0ZpcnN0KSA/IDUwIDogdGhpcy5tYXhSZXN1bHRDb3VudDtcclxuICAgIGlmICh0aGlzLmZpZWxkLnNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgIHNraXBDb3VudCA9ICh0aGlzLm56UGFnZUluZGV4IC0gMSkgKiB0aGlzLm1heFJlc3VsdENvdW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVxQm9keTogSVNlbGVjdFNlYXJjaFNlcnZlckR0byA9IHtcclxuICAgICAgZmlsdGVyLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgbWF4UmVzdWx0Q291bnQsXHJcbiAgICAgIHNraXBDb3VudFxyXG4gICAgfTtcclxuICAgIHRoaXMuZmllbGQuZnVuY3Rpb25TZXJ2aWNlKHJlcUJvZHkpXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KSlcclxuICAgICAgLnN1YnNjcmliZShkID0+IHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGQ/Lml0ZW1zIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuYmFja1VwSXRlbXMgPSBbLi4udGhpcy5iYWNrVXBJdGVtcywgLi4ub3B0aW9uc107XHJcbiAgICAgICAgaWYgKGlzRmlyc3QpIHtcclxuICAgICAgICAgIHRoaXMuZmlyc3RPcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICAgIHRoaXMuZmlyc3RUb3RhbCA9IGQudG90YWxDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdldE9uZUlkKSB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLml0ZW1TZWxlY3RlZCA9IGQ/Lml0ZW1zWzBdIHx8IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gZD8udG90YWxDb3VudCB8fCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2tpcENvdW50ID4gMCAmJiAhdGhpcy5maWVsZC5zaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgb3B0aW9ucyA9IFsuLi50aGlzLm9wdGlvbnMsIC4uLm9wdGlvbnNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5za2lwQ291bnQgPSByZXFCb2R5LnNraXBDb3VudCArIHJlcUJvZHkubWF4UmVzdWx0Q291bnQ7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5vcHRpb24kLm5leHQob3B0aW9ucyk7XHJcbiAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtU2VsZWN0ZWQoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSQgPSB0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkLmRhdGFGaWVsZCkudmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAucGlwZSh0YXAoKHYpID0+IHtcclxuICAgICAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eSh2KSkge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC5pdGVtU2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pKS5waXBlKGZpbHRlcihzID0+ICFBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHMpKSk7XHJcbiAgICB2YWx1ZSQuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgY29uc3QgZiA9IHRoaXMuYmFja1VwSXRlbXM/LmZpbmQocyA9PiBzLnZhbHVlID09IHZhbHVlKTtcclxuICAgICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90TnVsbChmKSkge1xyXG4gICAgICAgIHRoaXMuZmllbGQuaXRlbVNlbGVjdGVkID0gZjtcclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoW2ZdKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKG51bGwsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBmKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0SXRlbVNlbGVjdGVkKCk7XHJcbiAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLnN1YlJlbmRlcih0aGlzLmNkciwgdGhpcy5kZXN0cm95JCk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyRGV0ZWN0Q2hhbmdlcygpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCAyMDApO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5zaG93UGFnaW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5za2lwQ291bnQgPiB0aGlzLnRvdGFsSXRlbXMpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKHRoaXMudHh0U2VhcmNoLCBudWxsKTtcclxuICB9XHJcblxyXG4gIG56UGFnZUluZGV4Q2hhbmdlKCkge1xyXG4gICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKHRoaXMudHh0U2VhcmNoKTtcclxuICB9XHJcbn1cclxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gIDxuei1zZWxlY3QgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5kYXRhRmllbGRcIiBzdHlsZT1cIiB3aWR0aDogMTAwJTtcIlxyXG4gICAgICAgICAgICAgKG56T3BlbkNoYW5nZSk9XCJuek9wZW5DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAobnpTY3JvbGxUb0JvdHRvbSk9XCJsb2FkTW9yZSgpXCJcclxuICAgICAgICAgICAgIFtuekN1c3RvbVRlbXBsYXRlXT1cInRwbFNlbGVjdGVkVmlld1wiXHJcbiAgICAgICAgICAgICBbbnpPcHRpb25IZWlnaHRQeF09XCIyNlwiXHJcbiAgICAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICBbbnpNb2RlXT1cImZpZWxkLm56TW9kZVwiIFtuekFsbG93Q2xlYXJdPVwiZmllbGQubnpBbGxvd0NsZWFyXCJcclxuICAgICAgICAgICAgIG56U2hvd1NlYXJjaCBuelNlcnZlclNlYXJjaCAobnpPblNlYXJjaCk9XCJzZWFyY2goJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICBbbnpNYXhNdWx0aXBsZUNvdW50XT1cImZpZWxkPy5uek1heE11bHRpcGxlQ291bnRcIiBbbnpNYXhUYWdDb3VudF09XCJmaWVsZD8ubnpNYXhUYWdDb3VudFwiXHJcbiAgICAgICAgICAgICBbbnpEcm9wZG93blJlbmRlcl09XCJyZW5kZXJUZW1wbGF0ZVwiPlxyXG4gICAgPG56LW9wdGlvbiBbbnpDdXN0b21Db250ZW50XT1cInRydWVcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkRlYm91bmQkIHwgYXN5bmM7dHJhY2tCeTp0cmFja0J5U2VsZWN0XCJcclxuICAgICAgICAgICAgICAgW256TGFiZWxdPVwib3B0aW9uLmRpc3BsYXlUZXh0XCJcclxuICAgICAgICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJvcHRpb24uZGlzcGxheVRleHQgfCBvZlNlbGVjdFJlbmRlck9wdGlvbjogZmllbGQ6IG9wdGlvblwiPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L256LW9wdGlvbj5cclxuICA8L256LXNlbGVjdD5cclxuPC9mb3JtPlxyXG48bmctdGVtcGxhdGUgI3RwbFNlbGVjdGVkVmlldyBsZXQtc2VsZWN0ZWQ+XHJcbiAgPHNwYW4gW2lubmVySFRNTF09XCJzZWxlY3RlZC5uelZhbHVlIHwgb2ZPcHRpb25TZWxlY3RlZDpzZWxlY3RlZC5uekxhYmVsOmZpZWxkXCI+PC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI3JlbmRlclRlbXBsYXRlPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwic2VsZWN0LXBhZ2luYXRpb25cIiAqbmdJZj1cImZpZWxkLnNob3dQYWdpbmF0aW9uXCI+XHJcbiAgICA8bnotcGFnaW5hdGlvbiBuelNpemU9XCJzbWFsbFwiIFtuelBhZ2VTaXplXT1cIm1heFJlc3VsdENvdW50XCIgWyhuelBhZ2VJbmRleCldPVwibnpQYWdlSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgKG56UGFnZUluZGV4Q2hhbmdlKT1cIm56UGFnZUluZGV4Q2hhbmdlKClcIlxyXG4gICAgICAgICAgICAgICAgICAgW256VG90YWxdPVwidG90YWxJdGVtc1wiPjwvbnotcGFnaW5hdGlvbj5cclxuICA8L2Rpdj5cclxuICA8bnotc3BpbiAqbmdJZj1cImlzTG9hZGluZ1wiPjwvbnotc3Bpbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19