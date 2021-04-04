import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppUtilityService } from '../../services/app-utility-service';
import * as _ from 'lodash';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { debounceTime, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/destroy-rxjs.service";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/select";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/divider";
import * as i6 from "ng-zorro-antd/button";
import * as i7 from "ng-zorro-antd/core/wave";
import * as i8 from "ng-zorro-antd/core/transition-patch";
import * as i9 from "ng-zorro-antd/icon";
import * as i10 from "../../pipes/of-select-render-option.pipe";
import * as i11 from "../../pipes/of-option-selected.pipe";
function OfSelectComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
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
function OfSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
    i0.ɵɵpipe(1, "ofOptionSelected");
} if (rf & 2) {
    const selected_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind3(1, 1, selected_r6.nzValue, selected_r6.nzLabel, ctx_r2.field), i0.ɵɵsanitizeHtml);
} }
function OfSelectComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "nz-divider");
    i0.ɵɵelementStart(2, "div", 8);
    i0.ɵɵelementStart(3, "button", 9);
    i0.ɵɵlistener("click", function OfSelectComponent_ng_template_5_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.selectAll(); });
    i0.ɵɵelement(4, "i", 10);
    i0.ɵɵtext(5, " Ch\u1ECDn t\u1EA5t c\u1EA3 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 11);
    i0.ɵɵlistener("click", function OfSelectComponent_ng_template_5_div_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.unSelectAll(); });
    i0.ɵɵelement(7, "i", 12);
    i0.ɵɵtext(8, " B\u1ECF ch\u1ECDn ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function OfSelectComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OfSelectComponent_ng_template_5_div_0_Template, 9, 0, "div", 7);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.field.nzMode === "multiple" && (ctx_r4.field.options == null ? null : ctx_r4.field.options.length) > 3);
} }
export class OfSelectComponent {
    constructor(cdr, destroy$) {
        this.cdr = cdr;
        this.destroy$ = destroy$;
        this.options = [];
    }
    ngOnInit() {
        this.setOptionsView(this.field.options);
    }
    trackBySelect(index, item) {
        return item.value;
    }
    search(value) {
        if (AppUtilityService.isWhitespace(value)) {
            this.setOptionsView(this.field.options);
            return;
        }
        const searchTxt = AppUtilityService.getFullTextSearch(value);
        const options = _.filter(this.field.options, (s) => {
            const ftsVietTat = AppUtilityService.searchVietTat(s.displayText);
            const checkVietTat = ftsVietTat.indexOf(searchTxt) > -1;
            if (AppUtilityService.isNullOrEmpty(s.fts)) {
                s.fts = AppUtilityService.getFullTextSearch(s.displayText);
            }
            return s.fts.indexOf(searchTxt) > -1 || checkVietTat;
        });
        this.setOptionsView(options);
    }
    setOptionsView(options) {
        _.forEach(options, opt => {
            opt.fts = AppUtilityService.getFullTextSearch(opt.displayText);
        });
        this.options = options;
        this.getItemSelected();
        this.cdr.detectChanges();
    }
    selectAll() {
        const values = _.map(this.field.options, opt => {
            return opt.value;
        });
        this.group.get(this.field.dataField).patchValue(values);
        this.cdr.detectChanges();
    }
    unSelectAll() {
        this.group.get(this.field.dataField).patchValue(null);
        this.cdr.detectChanges();
    }
    handlerValueDataFieldChange() {
        var _a;
        const f = this.group.get(this.field.dataField);
        if (f) {
            (_a = this.group.get(this.field.dataField)) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(debounceTime(111)).pipe(takeUntil(this.destroy$)).subscribe(v => {
                if (typeof v === 'number') {
                    f.patchValue('' + v);
                }
                this.getItemSelected();
            });
        }
    }
    getItemSelected() {
        const v = this.group.get(this.field.dataField).value;
        if (AppUtilityService.isNullOrEmpty(v)) {
            this.field.itemSelected = null;
            this.cdr.detectChanges();
            return;
        }
        // tslint:disable-next-line:triple-equals
        this.field.itemSelected = _.find(this.options, x => x.value == v);
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.schemaModel.subRender(this.cdr, this.destroy$);
        this.handlerValueDataFieldChange();
    }
}
OfSelectComponent.ɵfac = function OfSelectComponent_Factory(t) { return new (t || OfSelectComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DestroyRxjsService)); };
OfSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfSelectComponent, selectors: [["of-select"]], inputs: { schemaModel: "schemaModel", field: "field", group: "group" }, features: [i0.ɵɵProvidersFeature([DestroyRxjsService])], decls: 7, vars: 11, consts: [[3, "formGroup"], ["nzShowSearch", "", "nzServerSearch", "", 2, "width", "100%", 3, "formControlName", "nzCustomTemplate", "nzPlaceHolder", "nzMode", "nzAllowClear", "nzMaxMultipleCount", "nzMaxTagCount", "nzDropdownRender", "nzOnSearch"], [3, "nzCustomContent", "nzLabel", "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tplSelectedView", ""], ["nzDropdownRenderTpl", ""], [3, "nzCustomContent", "nzLabel", "nzValue"], [3, "innerHTML"], [4, "ngIf"], [1, "margin-top-10", "margin-left-10", "margin-bottom-5"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-icon", "", "nzType", "plus"], ["nz-button", "", "nzType", "default", "nzSize", "small", 3, "click"], ["nz-icon", "", "nzType", "minus"]], template: function OfSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "nz-select", 1);
        i0.ɵɵlistener("nzOnSearch", function OfSelectComponent_Template_nz_select_nzOnSearch_1_listener($event) { return ctx.search($event); });
        i0.ɵɵtemplate(2, OfSelectComponent_nz_option_2_Template, 3, 8, "nz-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, OfSelectComponent_ng_template_3_Template, 2, 5, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, OfSelectComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        const _r3 = i0.ɵɵreference(6);
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControlName", ctx.field.dataField)("nzCustomTemplate", _r1)("nzPlaceHolder", ctx.field.placeholder)("nzMode", ctx.field.nzMode)("nzAllowClear", ctx.field.nzAllowClear)("nzMaxMultipleCount", ctx.field == null ? null : ctx.field.nzMaxMultipleCount)("nzMaxTagCount", ctx.field == null ? null : ctx.field.nzMaxTagCount)("nzDropdownRender", _r3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackBySelect);
    } }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i3.NzSelectComponent, i2.NgControlStatus, i2.FormControlName, i4.NgForOf, i3.NzOptionComponent, i4.NgIf, i5.NzDividerComponent, i6.NzButtonComponent, i7.NzWaveDirective, i8.ɵNzTransitionPatchDirective, i9.NzIconDirective], pipes: [i10.OfSelectRenderOptionPipe, i11.OfOptionSelectedPipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfSelectComponent, [{
        type: Component,
        args: [{
                selector: 'of-select',
                templateUrl: './of-select.component.html',
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DestroyRxjsService }]; }, { schemaModel: [{
            type: Input
        }], field: [{
            type: Input
        }], group: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1zZWxlY3Qvb2Ytc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1zZWxlY3Qvb2Ytc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJcEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNDckQsb0NBSUU7SUFBQSwwQkFDTzs7SUFDVCxpQkFBWTs7OztJQU5ELHNDQUF3QixrQ0FBQSw0QkFBQTtJQUkzQixlQUFzRTtJQUF0RSxtSEFBc0U7OztJQU1oRiwwQkFBc0Y7Ozs7O0lBQWhGLDJIQUF3RTs7OztJQUk5RSwyQkFDRTtJQUFBLDZCQUF5QjtJQUN6Qiw4QkFDRTtJQUFBLGlDQUF3RTtJQUFyQyxtTUFBcUI7SUFBZ0Isd0JBQTZCO0lBQUMsNENBQ3RHO0lBQUEsaUJBQVM7SUFDVCxrQ0FBMEU7SUFBdkMsdU1BQXVCO0lBQWdCLHdCQUE4QjtJQUFDLG1DQUN6RztJQUFBLGlCQUFTO0lBQ1gsaUJBQU07SUFDUixpQkFBTTs7O0lBUk4sZ0ZBUU07OztJQVJBLG9JQUE4RDs7QURQdEUsTUFBTSxPQUFPLGlCQUFpQjtJQU01QixZQUFvQixHQUFzQixFQUN0QixR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LElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztrRkF4RlUsaUJBQWlCO3NEQUFqQixpQkFBaUIsdUlBSGpCLENBQUMsa0JBQWtCLENBQUM7UUNaakMsK0JBQ0U7UUFBQSxvQ0FPRTtRQUhxQyxpSEFBYyxrQkFBYyxJQUFDO1FBR2xFLDhFQU1ZO1FBQ2QsaUJBQVk7UUFDZCxpQkFBTztRQUNQLG1IQUVjO1FBRWQsbUhBVWM7Ozs7UUEvQlIscUNBQW1CO1FBQ1osZUFBbUM7UUFBbkMscURBQW1DLHlCQUFBLHdDQUFBLDRCQUFBLHdDQUFBLCtFQUFBLHFFQUFBLHlCQUFBO1FBT1csZUFBVztRQUFYLHFDQUFXLG1DQUFBOztrRERPekQsaUJBQWlCO2NBTjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3FHQUVVLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSU9mU2VsZWN0T3B0aW9uRHRvLCBPZlNjaGVtYU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IE9mU2VsZWN0TW9kZWwgfSBmcm9tICcuL29mLXNlbGVjdC1tb2RlbCc7XG5pbXBvcnQgeyBBcHBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwcC11dGlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRGVzdHJveVJ4anNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzdHJveS1yeGpzLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29mLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vZi1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtEZXN0cm95Unhqc1NlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPZlNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xuICBASW5wdXQoKSBmaWVsZDogT2ZTZWxlY3RNb2RlbDtcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgb3B0aW9uczogSU9mU2VsZWN0T3B0aW9uRHRvW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGVzdHJveSQ6IERlc3Ryb3lSeGpzU2VydmljZSkge1xuICB9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldE9wdGlvbnNWaWV3KHRoaXMuZmllbGQub3B0aW9ucyk7XG4gIH1cblxuICB0cmFja0J5U2VsZWN0KGluZGV4OiBudW1iZXIsIGl0ZW06IElPZlNlbGVjdE9wdGlvbkR0bykge1xuICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICB9XG5cbiAgc2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNXaGl0ZXNwYWNlKHZhbHVlKSkge1xuICAgICAgdGhpcy5zZXRPcHRpb25zVmlldyh0aGlzLmZpZWxkLm9wdGlvbnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWFyY2hUeHQgPSBBcHBVdGlsaXR5U2VydmljZS5nZXRGdWxsVGV4dFNlYXJjaCh2YWx1ZSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IF8uZmlsdGVyKHRoaXMuZmllbGQub3B0aW9ucywgKHMpID0+IHtcbiAgICAgIGNvbnN0IGZ0c1ZpZXRUYXQgPSBBcHBVdGlsaXR5U2VydmljZS5zZWFyY2hWaWV0VGF0KHMuZGlzcGxheVRleHQpO1xuICAgICAgY29uc3QgY2hlY2tWaWV0VGF0ID0gZnRzVmlldFRhdC5pbmRleE9mKHNlYXJjaFR4dCkgPiAtMTtcbiAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHMuZnRzKSkge1xuICAgICAgICBzLmZ0cyA9IEFwcFV0aWxpdHlTZXJ2aWNlLmdldEZ1bGxUZXh0U2VhcmNoKHMuZGlzcGxheVRleHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHMuZnRzLmluZGV4T2Yoc2VhcmNoVHh0KSA+IC0xIHx8IGNoZWNrVmlldFRhdDtcbiAgICB9KTtcbiAgICB0aGlzLnNldE9wdGlvbnNWaWV3KG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0T3B0aW9uc1ZpZXcob3B0aW9ucykge1xuICAgIF8uZm9yRWFjaChvcHRpb25zLCBvcHQgPT4ge1xuICAgICAgb3B0LmZ0cyA9IEFwcFV0aWxpdHlTZXJ2aWNlLmdldEZ1bGxUZXh0U2VhcmNoKG9wdC5kaXNwbGF5VGV4dCk7XG4gICAgfSk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmdldEl0ZW1TZWxlY3RlZCgpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNlbGVjdEFsbCgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBfLm1hcCh0aGlzLmZpZWxkLm9wdGlvbnMsIG9wdCA9PiB7XG4gICAgICByZXR1cm4gb3B0LnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKS5wYXRjaFZhbHVlKHZhbHVlcyk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdW5TZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC5kYXRhRmllbGQpLnBhdGNoVmFsdWUobnVsbCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVyVmFsdWVEYXRhRmllbGRDaGFuZ2UoKSB7XG4gICAgY29uc3QgZiA9IHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKTtcbiAgICBpZiAoZikge1xuICAgICAgdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC5kYXRhRmllbGQpPy52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDExMSkpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSh2ID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBmLnBhdGNoVmFsdWUoJycgKyB2KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nZXRJdGVtU2VsZWN0ZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRJdGVtU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgdiA9IHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKS52YWx1ZTtcbiAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eSh2KSkge1xuICAgICAgdGhpcy5maWVsZC5pdGVtU2VsZWN0ZWQgPSBudWxsO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgIHRoaXMuZmllbGQuaXRlbVNlbGVjdGVkID0gXy5maW5kKHRoaXMub3B0aW9ucywgeCA9PiB4LnZhbHVlID09IHYpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNjaGVtYU1vZGVsLnN1YlJlbmRlcih0aGlzLmNkciwgdGhpcy5kZXN0cm95JCk7XG4gICAgdGhpcy5oYW5kbGVyVmFsdWVEYXRhRmllbGRDaGFuZ2UoKTtcbiAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJncm91cFwiPlxuICA8bnotc2VsZWN0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZGF0YUZpZWxkXCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXG4gICAgICAgICAgICAgW256Q3VzdG9tVGVtcGxhdGVdPVwidHBsU2VsZWN0ZWRWaWV3XCJcbiAgICAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgW256TW9kZV09XCJmaWVsZC5uek1vZGVcIiBbbnpBbGxvd0NsZWFyXT1cImZpZWxkLm56QWxsb3dDbGVhclwiXG4gICAgICAgICAgICAgbnpTaG93U2VhcmNoIG56U2VydmVyU2VhcmNoIChuek9uU2VhcmNoKT1cInNlYXJjaCgkZXZlbnQpXCJcbiAgICAgICAgICAgICBbbnpNYXhNdWx0aXBsZUNvdW50XT1cImZpZWxkPy5uek1heE11bHRpcGxlQ291bnRcIiBbbnpNYXhUYWdDb3VudF09XCJmaWVsZD8ubnpNYXhUYWdDb3VudFwiXG4gICAgICAgICAgICAgW256RHJvcGRvd25SZW5kZXJdPVwibnpEcm9wZG93blJlbmRlclRwbFwiPlxuICAgIDxuei1vcHRpb24gW256Q3VzdG9tQ29udGVudF09XCJ0cnVlXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zO3RyYWNrQnk6dHJhY2tCeVNlbGVjdFwiXG4gICAgICAgICAgICAgICBbbnpMYWJlbF09XCJvcHRpb24uZGlzcGxheVRleHRcIlxuICAgICAgICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICA+XG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5kaXNwbGF5VGV4dCB8IG9mU2VsZWN0UmVuZGVyT3B0aW9uOiBmaWVsZDogb3B0aW9uXCI+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uei1vcHRpb24+XG4gIDwvbnotc2VsZWN0PlxuPC9mb3JtPlxuPG5nLXRlbXBsYXRlICN0cGxTZWxlY3RlZFZpZXcgbGV0LXNlbGVjdGVkPlxuICA8c3BhbiBbaW5uZXJIVE1MXT1cInNlbGVjdGVkLm56VmFsdWUgfCBvZk9wdGlvblNlbGVjdGVkOnNlbGVjdGVkLm56TGFiZWw6ZmllbGRcIj48L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI256RHJvcGRvd25SZW5kZXJUcGw+XG4gIDxkaXYgKm5nSWY9XCJmaWVsZC5uek1vZGUgPT09ICdtdWx0aXBsZScgJiYgZmllbGQub3B0aW9ucz8ubGVuZ3RoID4gM1wiPlxuICAgIDxuei1kaXZpZGVyPjwvbnotZGl2aWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwibWFyZ2luLXRvcC0xMCBtYXJnaW4tbGVmdC0xMCBtYXJnaW4tYm90dG9tLTVcIj5cbiAgICAgIDxidXR0b24gbnotYnV0dG9uIG56VHlwZT1cInByaW1hcnlcIiAoY2xpY2spPVwic2VsZWN0QWxsKClcIiBuelNpemU9XCJzbWFsbFwiPjxpIG56LWljb24gbnpUeXBlPVwicGx1c1wiPjwvaT4gQ2jhu41uIHThuqV0IGPhuqNcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwiZGVmYXVsdFwiIChjbGljayk9XCJ1blNlbGVjdEFsbCgpXCIgbnpTaXplPVwic21hbGxcIj48aSBuei1pY29uIG56VHlwZT1cIm1pbnVzXCI+PC9pPiBC4buPIGNo4buNblxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==