import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/checkbox";
export class OfCheckBoxComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfCheckBoxComponent.ɵfac = function OfCheckBoxComponent_Factory(t) { return new (t || OfCheckBoxComponent)(); };
OfCheckBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfCheckBoxComponent, selectors: [["of-check-box"]], decls: 3, vars: 3, consts: [[3, "formGroup"], ["nz-checkbox", "", 3, "formControlName"]], template: function OfCheckBoxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControlName", ctx.field.dataField);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.field.checkBoxLabel);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NzCheckboxComponent, i1.NgControlStatus, i1.FormControlName], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfCheckBoxComponent, [{
        type: Component,
        args: [{
                selector: 'of-check-box',
                template: `
      <form [formGroup]="group">
          <label nz-checkbox [formControlName]="field.dataField">{{ field.checkBoxLabel }}</label>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY2hlY2stYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1jaGVjay1ib3gvb2YtY2hlY2stYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBYTNFLE1BQU0sT0FBTyxtQkFBbUI7SUFJOUI7SUFDQSxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7O3NGQVJVLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FBTjFCLCtCQUNJO1FBQUEsZ0NBQXVEO1FBQUEsWUFBeUI7UUFBQSxpQkFBUTtRQUM1RixpQkFBTzs7UUFGRCxxQ0FBbUI7UUFDRixlQUFtQztRQUFuQyxxREFBbUM7UUFBQyxlQUF5QjtRQUF6Qiw2Q0FBeUI7O2tEQUs3RSxtQkFBbUI7Y0FUL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9mQ2hlY2tCb3hNb2RlbCB9IGZyb20gJy4vb2YtY2hlY2stYm94Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2YtY2hlY2stYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5kYXRhRmllbGRcIj57eyBmaWVsZC5jaGVja0JveExhYmVsIH19PC9sYWJlbD5cclxuICAgICAgPC9mb3JtPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE9mQ2hlY2tCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZpZWxkOiBPZkNoZWNrQm94TW9kZWw7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==