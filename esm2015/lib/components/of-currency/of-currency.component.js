import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/input";
import * as i3 from "ng2-currency-mask";
export class OfCurrencyComponent {
    constructor() {
        this.options = {};
    }
    ngOnInit() {
        this.options = {
            prefix: this.field.prefix,
            suffix: this.field.suffix,
            thousands: '.',
            decimal: ',',
            precision: this.field.precision
        };
    }
}
OfCurrencyComponent.ɵfac = function OfCurrencyComponent_Factory(t) { return new (t || OfCurrencyComponent)(); };
OfCurrencyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfCurrencyComponent, selectors: [["of-currency"]], decls: 2, vars: 5, consts: [[3, "formGroup"], ["currencyMask", "", "nz-input", "", 1, "ord-dynamic-input", 3, "formControlName", "disabled", "placeholder", "options"]], template: function OfCurrencyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControlName", ctx.field.dataField)("disabled", ctx.field.disabled)("placeholder", ctx.field.placeholder)("options", ctx.field);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NzInputDirective, i1.DefaultValueAccessor, i3.CurrencyMaskDirective, i1.NgControlStatus, i1.FormControlName], styles: ["input[_ngcontent-%COMP%]::placeholder {\n          text-align: left;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfCurrencyComponent, [{
        type: Component,
        args: [{
                selector: 'of-currency',
                template: `
      <form [formGroup]="group">
          <input
                  currencyMask
                  nz-input
                  [formControlName]="field.dataField"
                  class="ord-dynamic-input"
                  [disabled]="field.disabled"
                  [placeholder]="field.placeholder"
                  [options]="field"
          />
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      input::placeholder {
          text-align: left;
      }
  `]
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLWN1cnJlbmN5L29mLWN1cnJlbmN5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7OztBQTBCM0UsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QjtRQUZBLFlBQU8sR0FBUSxFQUFFLENBQUM7SUFHbEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ3pCLFNBQVMsRUFBRSxHQUFHO1lBQ2QsT0FBTyxFQUFFLEdBQUc7WUFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1NBQ2hDLENBQUM7SUFDSixDQUFDOztzRkFoQlUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUFuQjFCLCtCQUNJO1FBQUEsMkJBU0o7UUFBQSxpQkFBTzs7UUFWRCxxQ0FBbUI7UUFJYixlQUFtQztRQUFuQyxxREFBbUMsZ0NBQUEsc0NBQUEsc0JBQUE7O2tEQWV4QyxtQkFBbUI7Y0F0Qi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsTUFBTSxFQUFFLENBQUM7Ozs7R0FJUixDQUFDO2FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPZkN1cnJlbmN5TW9kZWwgfSBmcm9tICcuL29mLWN1cnJlbmN5Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2YtY3VycmVuY3knLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeU1hc2tcclxuICAgICAgICAgICAgICAgICAgbnotaW5wdXRcclxuICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5kYXRhRmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm9yZC1keW5hbWljLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZkN1cnJlbmN5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmaWVsZDogT2ZDdXJyZW5jeU1vZGVsO1xyXG4gIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgb3B0aW9uczogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIHByZWZpeDogdGhpcy5maWVsZC5wcmVmaXgsXHJcbiAgICAgIHN1ZmZpeDogdGhpcy5maWVsZC5zdWZmaXgsXHJcbiAgICAgIHRob3VzYW5kczogJy4nLFxyXG4gICAgICBkZWNpbWFsOiAnLCcsXHJcbiAgICAgIHByZWNpc2lvbjogdGhpcy5maWVsZC5wcmVjaXNpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=