import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/input";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
function OfPasswordComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 4);
    i0.ɵɵlistener("click", function OfPasswordComponent_ng_template_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.passwordVisible = !ctx_r2.passwordVisible; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r1.passwordVisible ? "eye-invisible" : "eye");
} }
export class OfPasswordComponent {
    constructor() {
        this.passwordVisible = false;
    }
    ngOnInit() {
        this.field.placeholder = this.field.placeholder || 'Nhập mật khẩu';
    }
}
OfPasswordComponent.ɵfac = function OfPasswordComponent_Factory(t) { return new (t || OfPasswordComponent)(); };
OfPasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfPasswordComponent, selectors: [["of-password"]], decls: 5, vars: 5, consts: [[3, "formGroup"], ["nzPrefixIcon", "lock", 3, "nzSuffix"], ["nz-input", "", 3, "type", "placeholder", "formControlName"], ["suffixTemplate", ""], ["nz-icon", "", 3, "nzType", "click"]], template: function OfPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "nz-input-group", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, OfPasswordComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzSuffix", _r0);
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.field.placeholder);
        i0.ɵɵproperty("type", ctx.passwordVisible ? "text" : "password")("formControlName", ctx.field.dataField);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NzInputGroupComponent, i2.NzInputGroupWhitSuffixOrPrefixDirective, i2.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'of-password',
                template: `
      <form [formGroup]="group">
          <nz-input-group nzPrefixIcon="lock" [nzSuffix]="suffixTemplate">
              <input [type]="passwordVisible ? 'text' : 'password'" nz-input placeholder="{{field.placeholder}}"
                     [formControlName]="field.dataField"/>
          </nz-input-group>
          <ng-template #suffixTemplate>
              <i nz-icon [nzType]="passwordVisible ? 'eye-invisible' : 'eye'"
                 (click)="passwordVisible = !passwordVisible"></i>
          </ng-template>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXBhc3N3b3JkL29mLXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQWM3RCw0QkFDZ0Q7SUFBN0MsdU5BQTRDO0lBQUMsaUJBQUk7OztJQUR6Qyx5RUFBb0Q7O0FBTzdFLE1BQU0sT0FBTyxtQkFBbUI7SUFPOUI7UUFGQSxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUd4QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLGVBQWUsQ0FBQztJQUNyRSxDQUFDOztzRkFaVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQWIxQiwrQkFDSTtRQUFBLHlDQUNJO1FBQUEsMkJBRUo7UUFBQSxpQkFBaUI7UUFDakIscUhBR2M7UUFDbEIsaUJBQU87OztRQVRELHFDQUFtQjtRQUNlLGVBQTJCO1FBQTNCLDhCQUEyQjtRQUNJLGVBQW1DO1FBQW5DLDhEQUFtQztRQUEzRixnRUFBOEMsd0NBQUE7O2tEQVd0RCxtQkFBbUI7Y0FoQi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2ZTY2hlbWFNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE9mUHdkTW9kZWwgfSBmcm9tICcuL29mLXB3ZC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29mLXBhc3N3b3JkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICAgICAgICA8bnotaW5wdXQtZ3JvdXAgbnpQcmVmaXhJY29uPVwibG9ja1wiIFtuelN1ZmZpeF09XCJzdWZmaXhUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJwYXNzd29yZFZpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnXCIgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJ7e2ZpZWxkLnBsYWNlaG9sZGVyfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmRhdGFGaWVsZFwiLz5cclxuICAgICAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3N1ZmZpeFRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJwYXNzd29yZFZpc2libGUgPyAnZXllLWludmlzaWJsZScgOiAnZXllJ1wiXHJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInBhc3N3b3JkVmlzaWJsZSA9ICFwYXNzd29yZFZpc2libGVcIj48L2k+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2NoZW1hTW9kZWw6IE9mU2NoZW1hTW9kZWw7XHJcbiAgZmllbGQ6IE9mUHdkTW9kZWw7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgcGFzc3dvcmRWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpZWxkLnBsYWNlaG9sZGVyID0gdGhpcy5maWVsZC5wbGFjZWhvbGRlciB8fCAnTmjhuq1wIG3huq10IGto4bqpdSc7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=