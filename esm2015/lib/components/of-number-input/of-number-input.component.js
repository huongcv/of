import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "../../directives/numbers-only.directive";
import * as i5 from "ng-zorro-antd/input-number";
function OfNumberInputComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r0.field.maxlength);
    i0.ɵɵproperty("formControlName", ctx_r0.field.dataField)("placeholder", ctx_r0.field.placeholder);
} }
function OfNumberInputComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-input-number", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formControlName", ctx_r2.field.dataField)("nzPlaceHolder", ctx_r2.field.placeholder)("nzMin", ctx_r2.field.min)("nzMax", ctx_r2.field.max)("nzStep", ctx_r2.field.step);
} }
export class OfNumberInputComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfNumberInputComponent.ɵfac = function OfNumberInputComponent_Factory(t) { return new (t || OfNumberInputComponent)(); };
OfNumberInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfNumberInputComponent, selectors: [["of-number-input"]], decls: 4, vars: 3, consts: [[3, "formGroup"], ["nz-input", "", "numbersOnlyInput", "", 3, "formControlName", "placeholder", "maxlength", 4, "ngIf", "ngIfElse"], ["tplNumberInput", ""], ["nz-input", "", "numbersOnlyInput", "", 3, "formControlName", "placeholder", "maxlength"], [2, "width", "100%", 3, "formControlName", "nzPlaceHolder", "nzMin", "nzMax", "nzStep"]], template: function OfNumberInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵtemplate(1, OfNumberInputComponent_input_1_Template, 1, 3, "input", 1);
        i0.ɵɵtemplate(2, OfNumberInputComponent_ng_template_2_Template, 1, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.field.onlyKeyNumber)("ngIfElse", _r1);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i3.NzInputDirective, i4.NumbersOnlyDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.MaxLengthValidator, i5.NzInputNumberComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfNumberInputComponent, [{
        type: Component,
        args: [{
                selector: 'of-number-input',
                template: `
      <form [formGroup]="group">
          <input nz-input *ngIf="field.onlyKeyNumber;else tplNumberInput"
                 numbersOnlyInput [formControlName]="field.dataField"
                 [placeholder]="field.placeholder"
                 maxlength="{{ field.maxlength }}"
          />
          <ng-template #tplNumberInput>
              <nz-input-number [formControlName]="field.dataField"
                               [nzPlaceHolder]="field.placeholder"
                               style="width: 100%"
                               [nzMin]="field.min"
                               [nzMax]="field.max"
                               [nzStep]="field.step">
              </nz-input-number>
          </ng-template>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtbnVtYmVyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1udW1iZXItaW5wdXQvb2YtbnVtYmVyLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQVFqRSwyQkFLQTs7O0lBRk8sNkRBQWlDO0lBRmhCLHdEQUFtQyx5Q0FBQTs7O0lBS3ZELHFDQU1rQjs7O0lBTkQsd0RBQW1DLDJDQUFBLDJCQUFBLDJCQUFBLDZCQUFBOztBQVlsRSxNQUFNLE9BQU8sc0JBQXNCO0lBSWpDO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs0RkFSVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQW5CN0IsK0JBQ0k7UUFBQSwyRUFLQTtRQUFBLHdIQVFjO1FBQ2xCLGlCQUFPOzs7UUFmRCxxQ0FBbUI7UUFDSixlQUEwQjtRQUExQiw4Q0FBMEIsaUJBQUE7O2tEQWtCeEMsc0JBQXNCO2NBdEJsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9mTnVtYmVyTW9kZWwgfSBmcm9tICcuL29mLW51bWJlci5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29mLW51bWJlci1pbnB1dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgICAgICAgPGlucHV0IG56LWlucHV0ICpuZ0lmPVwiZmllbGQub25seUtleU51bWJlcjtlbHNlIHRwbE51bWJlcklucHV0XCJcclxuICAgICAgICAgICAgICAgICBudW1iZXJzT25seUlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZGF0YUZpZWxkXCJcclxuICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cInt7IGZpZWxkLm1heGxlbmd0aCB9fVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICN0cGxOdW1iZXJJbnB1dD5cclxuICAgICAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZGF0YUZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256TWluXT1cImZpZWxkLm1pblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpNYXhdPVwiZmllbGQubWF4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuelN0ZXBdPVwiZmllbGQuc3RlcFwiPlxyXG4gICAgICAgICAgICAgIDwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9mb3JtPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE9mTnVtYmVySW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZpZWxkOiBPZk51bWJlck1vZGVsO1xyXG4gIGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=