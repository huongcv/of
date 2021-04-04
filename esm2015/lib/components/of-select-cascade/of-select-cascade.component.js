import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { of } from 'rxjs';
import { AppUtilityService } from '../../services/app-utility-service';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/destroy-rxjs.service";
import * as i2 from "../of-select/of-select.component";
const _c0 = ["vcSelect"];
export class OfSelectCascadeComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
    }
    getOptionsFromApi(cascade) {
        if (this.hasCacheOption) {
            const cache = sessionStorage.getItem(this.key(cascade));
            if (cache) {
                return of(JSON.parse(cache));
            }
        }
        return this.field.functionService(cascade);
    }
    get ctrl() {
        return this.group.get(this.field.dataField);
    }
    get hasCacheOption() {
        return !AppUtilityService.isNullOrEmpty(this.field.keyCache);
    }
    key(cascade) {
        return 'selectOpt_' + this.field.keyCache + cascade;
    }
    disableIfCascadeEmpty(cascade) {
        const ctrl = this.group.get(this.field.dataField);
        if (AppUtilityService.isNullOrEmpty(cascade)) {
            ctrl.disable({ onlySelf: true });
        }
        else {
            if (!this.field.disabled) {
                ctrl.enable({ onlySelf: true });
            }
        }
    }
    setOptionsForView(options) {
        if (this.vcSelect) {
            this.vcSelect.setOptionsView(options);
        }
        this.field.options = options;
    }
    checkCurrentValue(options) {
        if (AppUtilityService.isNotNull(this.ctrl.value)) {
            // tslint:disable-next-line:triple-equals
            const f = options.find(x => x.value == this.ctrl.value);
            if (AppUtilityService.isNullOrEmpty(f)) {
                this.ctrl.patchValue(null);
            }
        }
    }
    handlerCascadeChange() {
        var _a;
        const cascadeField = this.group.get((_a = this.field) === null || _a === void 0 ? void 0 : _a.cascadeField);
        if (cascadeField) {
            cascadeField.valueChanges
                .pipe(debounceTime(111), takeUntil(this.destroy$), distinctUntilChanged())
                .subscribe(cascade => {
                this.disableIfCascadeEmpty(cascade);
                const ctrl = this.group.get(this.field.dataField);
                if (AppUtilityService.isNullOrEmpty(cascade)) {
                    ctrl.patchValue(null);
                    this.setOptionsForView([]);
                }
                else {
                    this.getOptionsFromApi(cascade).pipe(takeUntil(this.destroy$))
                        .subscribe(opt => {
                        if (AppUtilityService.isNotAnyItem(opt)) {
                            ctrl.patchValue(null);
                            this.setOptionsForView([]);
                        }
                        else {
                            if (this.hasCacheOption) {
                                sessionStorage.setItem(this.key(cascade), JSON.stringify(opt));
                            }
                            this.setOptionsForView(opt);
                            this.checkCurrentValue(opt);
                        }
                    });
                }
            });
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.ctrl.disable({ onlySelf: true });
            this.handlerCascadeChange();
        }, 300);
    }
}
OfSelectCascadeComponent.ɵfac = function OfSelectCascadeComponent_Factory(t) { return new (t || OfSelectCascadeComponent)(i0.ɵɵdirectiveInject(i1.DestroyRxjsService)); };
OfSelectCascadeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfSelectCascadeComponent, selectors: [["of-select-cascade"]], viewQuery: function OfSelectCascadeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.vcSelect = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([DestroyRxjsService])], decls: 2, vars: 3, consts: [[3, "schemaModel", "group", "field"], ["vcSelect", ""]], template: function OfSelectCascadeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "of-select", 0, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("schemaModel", ctx.schemaModel)("group", ctx.group)("field", ctx.field);
    } }, directives: [i2.OfSelectComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfSelectCascadeComponent, [{
        type: Component,
        args: [{
                selector: 'of-select-cascade',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DestroyRxjsService }]; }, { vcSelect: [{
            type: ViewChild,
            args: ['vcSelect']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWNhc2NhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXNlbGVjdC1jYXNjYWRlL29mLXNlbGVjdC1jYXNjYWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLekUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVMvRSxNQUFNLE9BQU8sd0JBQXdCO0lBTW5DLFlBQW9CLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO0lBQ2hELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUFlO1FBQy9CLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDOUI7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxD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Vmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVzdHJveVJ4anNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzdHJveS1yeGpzLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2ZTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9vZi1zZWxlY3Qvb2Ytc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJT2ZTZWxlY3RPcHRpb25EdG8sIE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2ZTZWxlY3RDYXNjYWRlTW9kZWwgfSBmcm9tICcuL29mLXNlbGVjdC1jYXNjYWRlLW1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcHBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwcC11dGlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvZi1zZWxlY3QtY2FzY2FkZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8b2Ytc2VsZWN0ICN2Y1NlbGVjdCBbc2NoZW1hTW9kZWxdPVwic2NoZW1hTW9kZWxcIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbZmllbGRdPVwiZmllbGRcIj48L29mLXNlbGVjdD5gLFxuICBwcm92aWRlcnM6IFtEZXN0cm95Unhqc1NlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPZlNlbGVjdENhc2NhZGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndmNTZWxlY3QnKSB2Y1NlbGVjdDogT2ZTZWxlY3RDb21wb25lbnQ7XG4gIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xuICBmaWVsZDogT2ZTZWxlY3RDYXNjYWRlTW9kZWw7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXN0cm95JDogRGVzdHJveVJ4anNTZXJ2aWNlKSB7XG4gIH1cblxuICBnZXRPcHRpb25zRnJvbUFwaShjYXNjYWRlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElPZlNlbGVjdE9wdGlvbkR0b1tdPiB7XG4gICAgaWYgKHRoaXMuaGFzQ2FjaGVPcHRpb24pIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleShjYXNjYWRlKSk7XG4gICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgcmV0dXJuIG9mKEpTT04ucGFyc2UoY2FjaGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmllbGQuZnVuY3Rpb25TZXJ2aWNlKGNhc2NhZGUpO1xuICB9XG5cbiAgZ2V0IGN0cmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKTtcbiAgfVxuXG4gIGdldCBoYXNDYWNoZU9wdGlvbigpIHtcbiAgICByZXR1cm4gIUFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkodGhpcy5maWVsZC5rZXlDYWNoZSk7XG4gIH1cblxuICBrZXkoY2FzY2FkZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuICdzZWxlY3RPcHRfJyArIHRoaXMuZmllbGQua2V5Q2FjaGUgKyBjYXNjYWRlO1xuICB9XG5cbiAgZGlzYWJsZUlmQ2FzY2FkZUVtcHR5KGNhc2NhZGU6IHN0cmluZykge1xuICAgIGNvbnN0IGN0cmwgPSB0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkLmRhdGFGaWVsZCk7XG4gICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkoY2FzY2FkZSkpIHtcbiAgICAgIGN0cmwuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuZmllbGQuZGlzYWJsZWQpIHtcbiAgICAgICAgY3RybC5lbmFibGUoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRPcHRpb25zRm9yVmlldyhvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMudmNTZWxlY3QpIHtcbiAgICAgIHRoaXMudmNTZWxlY3Quc2V0T3B0aW9uc1ZpZXcob3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMuZmllbGQub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBjaGVja0N1cnJlbnRWYWx1ZShvcHRpb25zOiBJT2ZTZWxlY3RPcHRpb25EdG9bXSkge1xuICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc05vdE51bGwodGhpcy5jdHJsLnZhbHVlKSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgIGNvbnN0IGYgPSBvcHRpb25zLmZpbmQoeCA9PiB4LnZhbHVlID09IHRoaXMuY3RybC52YWx1ZSk7XG4gICAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eShmKSkge1xuICAgICAgICB0aGlzLmN0cmwucGF0Y2hWYWx1ZShudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyQ2FzY2FkZUNoYW5nZSgpIHtcbiAgICBjb25zdCBjYXNjYWRlRmllbGQgPSB0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkPy5jYXNjYWRlRmllbGQpO1xuICAgIGlmIChjYXNjYWRlRmllbGQpIHtcbiAgICAgIGNhc2NhZGVGaWVsZC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDExMSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgICAgLnN1YnNjcmliZShjYXNjYWRlID0+IHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVJZkNhc2NhZGVFbXB0eShjYXNjYWRlKTtcbiAgICAgICAgICBjb25zdCBjdHJsID0gdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC5kYXRhRmllbGQpO1xuICAgICAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KGNhc2NhZGUpKSB7XG4gICAgICAgICAgICBjdHJsLnBhdGNoVmFsdWUobnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbnNGb3JWaWV3KFtdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRPcHRpb25zRnJvbUFwaShjYXNjYWRlKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShvcHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc05vdEFueUl0ZW0ob3B0KSkge1xuICAgICAgICAgICAgICAgICAgY3RybC5wYXRjaFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zRm9yVmlldyhbXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NhY2hlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy5rZXkoY2FzY2FkZSksIEpTT04uc3RyaW5naWZ5KG9wdCkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zRm9yVmlldyhvcHQpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0N1cnJlbnRWYWx1ZShvcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmN0cmwuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgICAgdGhpcy5oYW5kbGVyQ2FzY2FkZUNoYW5nZSgpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxufVxuIl19