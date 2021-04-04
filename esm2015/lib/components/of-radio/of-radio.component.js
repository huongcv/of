import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/radio";
import * as i3 from "@angular/common";
function OfRadioComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const op_r1 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", op_r1.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(op_r1.label);
} }
export class OfRadioComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfRadioComponent.ɵfac = function OfRadioComponent_Factory(t) { return new (t || OfRadioComponent)(); };
OfRadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfRadioComponent, selectors: [["of-radio"]], decls: 3, vars: 4, consts: [[3, "formGroup"], [2, "width", "100%", 3, "formControlName", "nzDisabled"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-radio", "", 3, "nzValue"]], template: function OfRadioComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "nz-radio-group", 1);
        i0.ɵɵtemplate(2, OfRadioComponent_label_2_Template, 2, 2, "label", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControlName", ctx.field.dataField)("nzDisabled", ctx.field.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.field.items);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NzRadioGroupComponent, i1.NgControlStatus, i1.FormControlName, i3.NgForOf, i2.NzRadioComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfRadioComponent, [{
        type: Component,
        args: [{
                selector: 'of-radio',
                template: `
      <form [formGroup]="group">
          <nz-radio-group [formControlName]="field.dataField"
                          [nzDisabled]="field.disabled"
                          style="width: 100%">
              <label *ngFor="let op of field.items" nz-radio [nzValue]="op.value">{{ op.label }}</label>
          </nz-radio-group>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXJhZGlvL29mLXJhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFZN0QsZ0NBQW9FO0lBQUEsWUFBYztJQUFBLGlCQUFROzs7SUFBM0MscUNBQW9CO0lBQUMsZUFBYztJQUFkLGlDQUFjOztBQU1oRyxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOztnRkFUVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjtRQVZ2QiwrQkFDSTtRQUFBLHlDQUdJO1FBQUEscUVBQTBGO1FBQzlGLGlCQUFpQjtRQUNyQixpQkFBTzs7UUFORCxxQ0FBbUI7UUFDTCxlQUFtQztRQUFuQyxxREFBbUMsa0NBQUE7UUFHekIsZUFBYztRQUFkLHlDQUFjOztrREFNckMsZ0JBQWdCO2NBYjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2ZTY2hlbWFNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE9mUmFkaW9Nb2RlbCB9IGZyb20gJy4vb2YtcmFkaW8ubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvZi1yYWRpbycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgICAgICAgPG56LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZGF0YUZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3Agb2YgZmllbGQuaXRlbXNcIiBuei1yYWRpbyBbbnpWYWx1ZV09XCJvcC52YWx1ZVwiPnt7IG9wLmxhYmVsIH19PC9sYWJlbD5cclxuICAgICAgICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDwvZm9ybT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZlJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBzY2hlbWFNb2RlbDogT2ZTY2hlbWFNb2RlbDtcclxuICBmaWVsZDogT2ZSYWRpb01vZGVsO1xyXG4gIGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=