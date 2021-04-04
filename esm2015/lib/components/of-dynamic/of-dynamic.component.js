import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/of-create-control-form-service";
import * as i3 from "../../services/of-validator.service";
import * as i4 from "../../services/destroy-rxjs.service";
function OfDynamicComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "nz-form-label", 6);
    i0.ɵɵelement(2, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵlistener("searchEvent", function OfDynamicComponent_ng_container_3_div_1_Template_div_searchEvent_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.searchEvent.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 9);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "showValidationError");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzSpan", field_r2.width)("ngClass", field_r2.css);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzRequired", field_r2.required)("hidden", field_r2.hiddenLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", field_r2.label, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("schemaModel", ctx_r3.schemaModel)("field", field_r2)("group", ctx_r3.form)("ofFieldTempates", ctx_r3.ofFieldTempates);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(6, 11, ctx_r3.form.controls[field_r2.dataField] == null ? null : ctx_r3.form.controls[field_r2.dataField].errors, field_r2 == null ? null : field_r2.validations, ctx_r3.schemaModel.submitted), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", field_r2.bottomHtml, i0.ɵɵsanitizeHtml);
} }
function OfDynamicComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OfDynamicComponent_ng_container_3_div_1_Template, 8, 15, "div", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r2.hidden);
} }
function OfDynamicComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "button", 11);
    i0.ɵɵlistener("click", function OfDynamicComponent_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onClickSearchBtn(); });
    i0.ɵɵtext(2, "T\u00ECm ki\u1EBFm ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzSpan", 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzLoading", ctx_r1.schemaModel.searchBtnBusy);
} }
const _c0 = [[["", "topContent", ""]], [["", "bottomContent", ""]]];
const _c1 = function () { return [18, 6]; };
const _c2 = ["[topContent]", "[bottomContent]"];
export class OfDynamicComponent {
    constructor(fb, createCtrlService, validatorService, destroy$) {
        this.fb = fb;
        this.createCtrlService = createCtrlService;
        this.validatorService = validatorService;
        this.destroy$ = destroy$;
        this.submitValueEvent = new EventEmitter();
        this.searchEvent = new EventEmitter();
        this.fields = [];
        this.ofFieldTempates = [];
    }
    get value() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.getRawValue();
    }
    ngOnInit() {
        this.fields = this.schemaModel.fields || [];
        this.form = this.createCtrlService.createControl(this.fields);
        this.schemaModel.form = this.form;
        this.init$();
    }
    reBuilderForm() {
        this.fields = this.schemaModel.fields || [];
        this.createCtrlService.updateControl(this.fields, this.form);
        this.schemaModel.form = this.form;
    }
    init$() {
        this.schemaModel.rebuilder$.pipe(takeUntil(this.destroy$), distinctUntilChanged(), filter(x => x > 0))
            .subscribe(() => {
            this.reBuilderForm();
        });
    }
    trackByField(index, field) {
        return field.dataField;
    }
    onSubmit(isCheckValid = true) {
        this.schemaModel.submitted = true;
        if (!isCheckValid) {
            this.submitValueEvent.emit(this.value);
            return this.value;
        }
        _.forEach(this.fields, (field) => {
            const f = this.form.controls[field.dataField];
            if (f) {
                if (field.hidden) {
                    f.setValidators(null);
                }
                else {
                    f.setValidators(this.createCtrlService.bindValidations(field));
                }
            }
        });
        if (this.form.valid) {
            this.submitValueEvent.emit(this.value);
            return this.value;
        }
        else {
            setTimeout(() => {
                this.validatorService.focusControlItem(this.schemaModel.id);
            }, 500);
            return null;
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.validatorService.focusFirst(this.schemaModel.id);
        }, 500);
    }
    onClickSearchBtn() {
        this.schemaModel.searchBtnBusy = true;
        this.searchEvent.emit(this.value);
        this.schemaModel.searchEvent$.next(this.value);
    }
    disableAll(f = true) {
        this.schemaModel.disableAll(f);
    }
    disableField(name, f = true) {
        this.schemaModel.disableField(name, f);
    }
    addOfFieldTempates(d) {
        this.ofFieldTempates.push(d);
    }
}
OfDynamicComponent.ɵfac = function OfDynamicComponent_Factory(t) { return new (t || OfDynamicComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OfCreateControlFormService), i0.ɵɵdirectiveInject(i3.OfValidatorService), i0.ɵɵdirectiveInject(i4.DestroyRxjsService)); };
OfDynamicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfDynamicComponent, selectors: [["of"]], inputs: { schemaModel: "schemaModel" }, outputs: { submitValueEvent: "submitValueEvent", searchEvent: "searchEvent" }, features: [i0.ɵɵProvidersFeature([DestroyRxjsService])], ngContentSelectors: _c2, decls: 6, vars: 7, consts: [[1, "dynamic-form", 3, "formGroup"], ["nz-row", "", 3, "nzGutter", "id"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-col", "", "class", "gutter-row of-btn-search ord-form-control", 3, "nzSpan", 4, "ngIf"], ["nz-col", "", 3, "nzSpan", "ngClass", 4, "ngIf"], ["nz-col", "", 3, "nzSpan", "ngClass"], [3, "nzRequired", "hidden"], [3, "innerHTML"], ["ofDynamicField", "", 3, "schemaModel", "field", "group", "ofFieldTempates", "searchEvent"], [1, "form-control-err", "text-danger"], ["nz-col", "", 1, "gutter-row", "of-btn-search", "ord-form-control", 3, "nzSpan"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"]], template: function OfDynamicComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵtemplate(3, OfDynamicComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(4, OfDynamicComponent_div_4_Template, 3, 2, "div", 3);
        i0.ɵɵprojection(5, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzGutter", i0.ɵɵpureFunction0(6, _c1))("id", ctx.schemaModel.id);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.fields)("ngForTrackBy", ctx.trackByField);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.schemaModel.isSearchBox);
    } }, styles: [".of-btn-search{max-width:109px}.of-btn-search button{margin-top:25px!important}.ant-form-item-label{padding:0!important;height:25px!important}.ant-form-item-label>label:after{content:\"\"!important}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfDynamicComponent, [{
        type: Component,
        args: [{
                selector: 'of',
                templateUrl: './of-dynamic.component.html',
                styleUrls: ['./of-dynamic.component.scss'],
                encapsulation: ViewEncapsulation.None,
                providers: [DestroyRxjsService]
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OfCreateControlFormService }, { type: i3.OfValidatorService }, { type: i4.DestroyRxjsService }]; }, { schemaModel: [{
            type: Input
        }], submitValueEvent: [{
            type: Output
        }], searchEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2YtZHluYW1pYy9vZi1keW5hbWljLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1keW5hbWljL29mLWR5bmFtaWMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakgsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNMbkUsOEJBQ0U7SUFBQSx3Q0FDRTtJQUFBLDBCQUF1QztJQUN6QyxpQkFBZ0I7SUFDaEIsOEJBRUE7SUFEeUMsOExBQWUsK0JBQXdCLElBQUM7SUFDakYsaUJBQU07SUFDTiwrQkFDTTtJQUFBLFlBQ047O0lBQUEsaUJBQU87SUFDUCx5QkFBMEM7SUFDNUMsaUJBQU07Ozs7SUFYNEIsdUNBQXNCLHlCQUFBO0lBQ3ZDLGVBQTZCO0lBQTdCLDhDQUE2QixnQ0FBQTtJQUNwQyxlQUF5QjtJQUF6Qiw2REFBeUI7SUFFYixlQUEyQjtJQUEzQixnREFBMkIsbUJBQUEsc0JBQUEsMkNBQUE7SUFJekMsZUFDTjtJQURNLCtPQUNOO0lBQ0ssZUFBOEI7SUFBOUIsa0VBQThCOzs7SUFYdkMsNkJBQ0U7SUFBQSxtRkFXTTtJQUNSLDBCQUFlOzs7SUFaQSxlQUFtQjtJQUFuQix1Q0FBbUI7Ozs7SUFhbEMsK0JB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QUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsQ0FBbUI7UUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7b0ZBL0ZVLGtCQUFrQjt1REFBbEIsa0JBQWtCLCtLQUZsQixDQUFDLGtCQUFrQixDQUFDOztRQ2hCakMsK0JBQ0U7UUFBQSw4QkFDRTtRQUFBLGtCQUErQztRQUMvQyxxRkFhZTtRQUNmLG1FQUtNO1FBQ04scUJBQWtEO1FBQ3BELGlCQUFNO1FBQ1IsaUJBQU87O1FBekJvQixvQ0FBa0I7UUFDL0IsZUFBb0I7UUFBcEIscURBQW9CLDBCQUFBO1FBRUUsZUFBVTtRQUFWLG9DQUFVLGtDQUFBO1FBY3BDLGVBQTZCO1FBQTdCLGtEQUE2Qjs7a0REQzFCLGtCQUFrQjtjQVA5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNoQzt5S0FFVSxXQUFXO2tCQUFuQixLQUFLO1lBQ0ksZ0JBQWdCO2tCQUF6QixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERlc3Ryb3lSeGpzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Rlc3Ryb3ktcnhqcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2ZDb250cm9sTW9kZWwsIE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBPZkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vb2YtdGVtcGxhdGUtcmVmL29mLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mQ3JlYXRlQ29udHJvbEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2YtY3JlYXRlLWNvbnRyb2wtZm9ybS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2ZWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2YtdmFsaWRhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29mJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb2YtZHluYW1pYy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb2YtZHluYW1pYy5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbRGVzdHJveVJ4anNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZEeW5hbWljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBzY2hlbWFNb2RlbDogT2ZTY2hlbWFNb2RlbDtcclxuICBAT3V0cHV0KCkgc3VibWl0VmFsdWVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWFyY2hFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuICBmaWVsZHM6IE9mQ29udHJvbE1vZGVsW10gPSBbXTtcclxuICBvZkZpZWxkVGVtcGF0ZXM6IE9mRmllbGRDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtPy5nZXRSYXdWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjcmVhdGVDdHJsU2VydmljZTogT2ZDcmVhdGVDb250cm9sRm9ybVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBPZlZhbGlkYXRvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZXN0cm95JDogRGVzdHJveVJ4anNTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZmllbGRzID0gdGhpcy5zY2hlbWFNb2RlbC5maWVsZHMgfHwgW107XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmNyZWF0ZUN0cmxTZXJ2aWNlLmNyZWF0ZUNvbnRyb2wodGhpcy5maWVsZHMpO1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5mb3JtID0gdGhpcy5mb3JtO1xyXG4gICAgdGhpcy5pbml0JCgpO1xyXG4gIH1cclxuXHJcbiAgcmVCdWlsZGVyRm9ybSgpIHtcclxuICAgIHRoaXMuZmllbGRzID0gdGhpcy5zY2hlbWFNb2RlbC5maWVsZHMgfHwgW107XHJcbiAgICB0aGlzLmNyZWF0ZUN0cmxTZXJ2aWNlLnVwZGF0ZUNvbnRyb2wodGhpcy5maWVsZHMsIHRoaXMuZm9ybSk7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLmZvcm0gPSB0aGlzLmZvcm07XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5pdCQoKSB7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLnJlYnVpbGRlciQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgIGZpbHRlcih4ID0+IHggPiAwKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZUJ1aWxkZXJGb3JtKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZpZWxkKGluZGV4OiBudW1iZXIsIGZpZWxkOiBPZkNvbnRyb2xNb2RlbCkge1xyXG4gICAgcmV0dXJuIGZpZWxkLmRhdGFGaWVsZDtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KGlzQ2hlY2tWYWxpZCA9IHRydWUpOiBhbnkge1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgaWYgKCFpc0NoZWNrVmFsaWQpIHtcclxuICAgICAgdGhpcy5zdWJtaXRWYWx1ZUV2ZW50LmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgXy5mb3JFYWNoKHRoaXMuZmllbGRzLCAoZmllbGQpID0+IHtcclxuICAgICAgY29uc3QgZiA9IHRoaXMuZm9ybS5jb250cm9sc1tmaWVsZC5kYXRhRmllbGRdO1xyXG4gICAgICBpZiAoZikge1xyXG4gICAgICAgIGlmIChmaWVsZC5oaWRkZW4pIHtcclxuICAgICAgICAgIGYuc2V0VmFsaWRhdG9ycyhudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZi5zZXRWYWxpZGF0b3JzKHRoaXMuY3JlYXRlQ3RybFNlcnZpY2UuYmluZFZhbGlkYXRpb25zKGZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgICAgdGhpcy5zdWJtaXRWYWx1ZUV2ZW50LmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlLmZvY3VzQ29udHJvbEl0ZW0odGhpcy5zY2hlbWFNb2RlbC5pZCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZS5mb2N1c0ZpcnN0KHRoaXMuc2NoZW1hTW9kZWwuaWQpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tTZWFyY2hCdG4oKSB7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLnNlYXJjaEJ0bkJ1c3kgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWFyY2hFdmVudC5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5zZWFyY2hFdmVudCQubmV4dCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuICBkaXNhYmxlQWxsKGYgPSB0cnVlKSB7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLmRpc2FibGVBbGwoZik7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlRmllbGQobmFtZTogc3RyaW5nLCBmID0gdHJ1ZSkge1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5kaXNhYmxlRmllbGQobmFtZSwgZik7XHJcbiAgfVxyXG5cclxuICBhZGRPZkZpZWxkVGVtcGF0ZXMoZDogT2ZGaWVsZENvbXBvbmVudCkge1xyXG4gICAgdGhpcy5vZkZpZWxkVGVtcGF0ZXMucHVzaChkKTtcclxuICB9XHJcbn1cclxuIiwiPGZvcm0gY2xhc3M9XCJkeW5hbWljLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICA8ZGl2IG56LXJvdyBbbnpHdXR0ZXJdPVwiWzE4LCA2XVwiIFtpZF09XCJzY2hlbWFNb2RlbC5pZFwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RvcENvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzO3RyYWNrQnk6dHJhY2tCeUZpZWxkXCI+XHJcbiAgICAgIDxkaXYgbnotY29sICpuZ0lmPVwiIWZpZWxkLmhpZGRlblwiIFtuelNwYW5dPVwiZmllbGQud2lkdGhcIiBbbmdDbGFzc109XCJmaWVsZC5jc3NcIj5cclxuICAgICAgICA8bnotZm9ybS1sYWJlbCBbbnpSZXF1aXJlZF09XCJmaWVsZC5yZXF1aXJlZFwiIFtoaWRkZW5dPVwiZmllbGQuaGlkZGVuTGFiZWxcIj5cclxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiZmllbGQubGFiZWxcIj48L3NwYW4+XHJcbiAgICAgICAgPC9uei1mb3JtLWxhYmVsPlxyXG4gICAgICAgIDxkaXYgb2ZEeW5hbWljRmllbGQgW3NjaGVtYU1vZGVsXT1cInNjaGVtYU1vZGVsXCIgW2ZpZWxkXT1cImZpZWxkXCIgW2dyb3VwXT1cImZvcm1cIlxyXG4gICAgICAgICAgICAgW29mRmllbGRUZW1wYXRlc109XCJvZkZpZWxkVGVtcGF0ZXNcIiAoc2VhcmNoRXZlbnQpPVwic2VhcmNoRXZlbnQuZW1pdCgkZXZlbnQpXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWNvbnRyb2wtZXJyIHRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAge3t0aGlzLmZvcm0uY29udHJvbHNbZmllbGQuZGF0YUZpZWxkXT8uZXJyb3JzIHwgc2hvd1ZhbGlkYXRpb25FcnJvciA6IGZpZWxkPy52YWxpZGF0aW9ucyA6IHNjaGVtYU1vZGVsLnN1Ym1pdHRlZH19XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJmaWVsZC5ib3R0b21IdG1sXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwic2NoZW1hTW9kZWwuaXNTZWFyY2hCb3hcIiBuei1jb2wgY2xhc3M9XCJndXR0ZXItcm93IG9mLWJ0bi1zZWFyY2ggb3JkLWZvcm0tY29udHJvbFwiIFtuelNwYW5dPVwiMlwiPlxyXG4gICAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBbbnpMb2FkaW5nXT1cInNjaGVtYU1vZGVsLnNlYXJjaEJ0bkJ1c3lcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrU2VhcmNoQnRuKClcIj5Uw6xtIGtp4bq/bVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JvdHRvbUNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+XHJcbiJdfQ==