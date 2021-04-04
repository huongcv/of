import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/input";
export class OfTextAreaComponent {
}
OfTextAreaComponent.ɵfac = function OfTextAreaComponent_Factory(t) { return new (t || OfTextAreaComponent)(); };
OfTextAreaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfTextAreaComponent, selectors: [["of-text-area"]], decls: 2, vars: 5, consts: [[3, "formGroup"], ["nz-input", "", 3, "formControlName", "placeholder", "rows", "maxlength"]], template: function OfTextAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelement(1, "textarea", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("maxlength", ctx.field.maxLength);
        i0.ɵɵproperty("formControlName", ctx.field.dataField)("placeholder", ctx.field.placeholder)("rows", ctx.field.rows);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.MaxLengthValidator], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfTextAreaComponent, [{
        type: Component,
        args: [{
                selector: 'of-text-area',
                template: `
      <form [formGroup]="group">
          <textarea nz-input
                    [formControlName]="field.dataField"
                    [placeholder]="field.placeholder"
                    [rows]="field.rows"
                    maxlength="{{field.maxLength}}"></textarea>
      </form>
  `
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtdGV4dC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi10ZXh0LWFyZWEvb2YtdGV4dC1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBaUIxQyxNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUFUMUIsK0JBQ0k7UUFBQSw4QkFJcUQ7UUFDekQsaUJBQU87O1FBTkQscUNBQW1CO1FBS1gsZUFBK0I7UUFBL0IsMERBQStCO1FBSC9CLHFEQUFtQyxzQ0FBQSx3QkFBQTs7a0RBTzFDLG1CQUFtQjtjQVovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2ZTY2hlbWFNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE9mVGV4dEFyZWFNb2RlbCB9IGZyb20gJy4vb2YtdGV4dC1hcmVhLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2YtdGV4dC1hcmVhJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgbnotaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmRhdGFGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBbcm93c109XCJmaWVsZC5yb3dzXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkLm1heExlbmd0aH19XCI+PC90ZXh0YXJlYT5cclxuICAgICAgPC9mb3JtPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE9mVGV4dEFyZWFDb21wb25lbnQge1xyXG4gIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xyXG4gIGZpZWxkOiBPZlRleHRBcmVhTW9kZWw7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxufVxyXG4iXX0=