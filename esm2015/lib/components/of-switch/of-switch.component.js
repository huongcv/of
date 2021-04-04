import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/switch";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
function OfSwitchComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 4);
} }
function OfSwitchComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} }
export class OfSwitchComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfSwitchComponent.ɵfac = function OfSwitchComponent_Factory(t) { return new (t || OfSwitchComponent)(); };
OfSwitchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfSwitchComponent, selectors: [["of-switch"]], decls: 6, vars: 5, consts: [[3, "formGroup"], [3, "formControlName", "nzCheckedChildren", "nzUnCheckedChildren", "nzDisabled"], ["checkedTemplate", ""], ["unCheckedTemplate", ""], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"]], template: function OfSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "nz-switch", 1);
        i0.ɵɵtemplate(2, OfSwitchComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, OfSwitchComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        const _r2 = i0.ɵɵreference(5);
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControlName", ctx.field.dataField)("nzCheckedChildren", ctx.field.yesText ? ctx.field.yesText : _r0)("nzUnCheckedChildren", ctx.field.noText ? ctx.field.noText : _r2)("nzDisabled", ctx.field.disabled);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NzSwitchComponent, i1.NgControlStatus, i1.FormControlName, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfSwitchComponent, [{
        type: Component,
        args: [{
                selector: 'of-switch',
                template: `
      <form [formGroup]="group">
          <nz-switch [formControlName]="field.dataField"
                     [nzCheckedChildren]="field.yesText ? field.yesText : checkedTemplate"
                     [nzUnCheckedChildren]="field.noText ? field.noText : unCheckedTemplate"
                     [nzDisabled]="field.disabled"
          >
              <ng-template #checkedTemplate><i nz-icon nzType="check"></i></ng-template>
              <ng-template #unCheckedTemplate><i nz-icon nzType="close"></i></ng-template>
          </nz-switch>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1zd2l0Y2gvb2Ytc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBYS9CLHVCQUE4Qjs7O0lBQzVCLHVCQUE4Qjs7QUFNNUUsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QjtJQUNBLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7a0ZBUlUsaUJBQWlCO3NEQUFqQixpQkFBaUI7UUFieEIsK0JBQ0k7UUFBQSxvQ0FLSTtRQUFBLG1IQUEwRTtRQUMxRSxtSEFBNEU7UUFDaEYsaUJBQVk7UUFDaEIsaUJBQU87Ozs7UUFURCxxQ0FBbUI7UUFDVixlQUFtQztRQUFuQyxxREFBbUMsa0VBQUEsa0VBQUEsa0NBQUE7O2tEQVkzQyxpQkFBaUI7Y0FoQjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2ZTd2l0Y2hNb2RlbCB9IGZyb20gJy4vb2Ytc3dpdGNoLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2Ytc3dpdGNoJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICAgICAgICA8bnotc3dpdGNoIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZGF0YUZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgW256Q2hlY2tlZENoaWxkcmVuXT1cImZpZWxkLnllc1RleHQgPyBmaWVsZC55ZXNUZXh0IDogY2hlY2tlZFRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgW256VW5DaGVja2VkQ2hpbGRyZW5dPVwiZmllbGQubm9UZXh0ID8gZmllbGQubm9UZXh0IDogdW5DaGVja2VkVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjaGVja2VkVGVtcGxhdGU+PGkgbnotaWNvbiBuelR5cGU9XCJjaGVja1wiPjwvaT48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjdW5DaGVja2VkVGVtcGxhdGU+PGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiPjwvaT48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9uei1zd2l0Y2g+XHJcbiAgICAgIDwvZm9ybT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZlN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZmllbGQ6IE9mU3dpdGNoTW9kZWw7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==