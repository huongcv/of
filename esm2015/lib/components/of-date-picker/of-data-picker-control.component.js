import { Component, forwardRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { AppUtilityService } from '../../services/app-utility-service';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/date-picker";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "angular2-text-mask";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "@angular/common";
const _c0 = ["refDate"];
const _c1 = ["refInput"];
const _c2 = function (a0) { return { mask: a0 }; };
const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OfDataPickerControlComponent),
    multi: true
};
export class OfDataPickerControlComponent {
    constructor() {
        this.placeHolder = 'Ngày/Tháng/Năm';
        this.mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.$destroy = new Subject();
        this.isWriteValue = false;
        this.mouseEvent$ = new Subject();
        this.nzIcon = 'calendar';
        this.nzIcon$ = new BehaviorSubject('calendar');
        // tslint:disable-next-line:variable-name
        this.isShowIconCalendar = true;
        this.isDisabled = false;
        this.control = new FormControl({ value: null, disabled: true });
        this.inputValue = new FormControl({ value: '', disabled: false });
    }
    get value() {
        return this.control.value;
    }
    set value(v) {
        this.control.setValue(v);
    }
    get disabled() {
        return this.isDisabled;
    }
    set disabled(v) {
        this.isDisabled = v;
        if (v === true) {
            this.inputValue.disable();
        }
        else {
            this.inputValue.enable();
        }
    }
    onChange(v) {
    }
    onTouched() {
    }
    onChangeValue(event) {
        this.onChange(event);
    }
    onFocus(event) {
        this.onTouched();
    }
    mouseLeaveMain() {
        this.mouseEvent$.next('mouseLeave');
    }
    mouseEnterMain() {
        this.mouseEvent$.next('mouseEnter');
    }
    ngAfterViewInit() {
        fromEvent(this.refInput.nativeElement, 'click')
            .pipe(debounceTime(222), takeUntil(this.$destroy)).subscribe(() => {
            this.refDate.picker.showOverlay();
            setTimeout(() => {
                this.refInput.nativeElement.focus();
            });
        });
        this.refDate.nzOnOpenChange
            .pipe(takeUntil(this.$destroy))
            .subscribe(o => {
            if (!o) {
                setTimeout(() => {
                    this.refInput.nativeElement.focus();
                });
            }
        });
        this.mouseEvent$.pipe(takeUntil(this.$destroy))
            .pipe(debounceTime(222))
            .pipe(map(d => {
            if (d === 'mouseLeave') {
                return 'calendar';
            }
            if (this.disabled) {
                return 'calendar';
            }
            if (AppUtilityService.isNullOrEmpty(this.control.value)) {
                return 'calendar';
            }
            return 'close-circle';
        })).pipe(tap((icon) => {
            this.nzIcon$.next(icon);
            this.nzIcon = icon;
        })).subscribe();
        this.nzIcon$.next('calendar');
    }
    ngOnDestroy() {
        this.$destroy.next(true);
        this.$destroy.unsubscribe();
    }
    ngOnInit() {
        this.control.valueChanges.pipe(takeUntil(this.$destroy), distinctUntilChanged()).subscribe((result) => {
            if (this.isWriteValue) {
                if (result) {
                    const valueText = moment(result).format('DD/MM/YYYY');
                    this.inputValue.setValue(valueText);
                }
                this.onChangeValue(result);
            }
        });
        this.inputValue.valueChanges.pipe(takeUntil(this.$destroy), distinctUntilChanged(), debounceTime(100)).subscribe(result => {
            try {
                const arrStr = result.split('/');
                if (!isNaN(arrStr[0]) && !isNaN(arrStr[1]) && !isNaN(arrStr[2])) {
                    const date = moment(result, 'DD/MM/YYYY');
                    if (date.isValid()) {
                        if (typeof this.disabledDate === 'function') {
                            if (this.disabledDate(date.toDate())) {
                                this.inputValue.setValue(null);
                            }
                            else {
                                this.control.setValue(date.toDate());
                                this.refDate.picker.hideOverlay();
                            }
                        }
                        else {
                            this.control.setValue(date.toDate());
                            this.refDate.picker.hideOverlay();
                        }
                    }
                    else {
                        this.control.setValue(null);
                    }
                }
                else {
                    this.control.setValue(null);
                }
            }
            catch (e) {
                this.control.setValue(null);
            }
        });
    }
    //#region base ControlValueAccessor
    writeValue(obj) {
        if (obj) {
            const valueText = moment(obj).format('DD/MM/YYYY');
            this.inputValue.setValue(valueText);
            this.value = moment(obj).toDate();
        }
        else {
            this.inputValue.setValue('');
            this.value = null;
        }
        this.isWriteValue = true;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    //#endregion
    onFocusOutInputMask() {
        if (AppUtilityService.isNullOrEmpty(this.control.value)) {
            this.inputValue.setValue(null);
        }
    }
    onClickIcon() {
        if (this.disabled) {
            return;
        }
        if (this.nzIcon === 'calendar') {
            this.refDate.picker.showOverlay();
            return;
        }
        this.nzIcon$.next('calendar');
        this.inputValue.setValue(null);
        this.control.setValue(null);
    }
}
OfDataPickerControlComponent.ɵfac = function OfDataPickerControlComponent_Factory(t) { return new (t || OfDataPickerControlComponent)(); };
OfDataPickerControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfDataPickerControlComponent, selectors: [["of-date-picker-ctrl"]], viewQuery: function OfDataPickerControlComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.refDate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.refInput = _t.first);
    } }, inputs: { disabledDate: "disabledDate", placeHolder: "placeHolder", disabled: "disabled", control: "control" }, features: [i0.ɵɵProvidersFeature([VALUE_ACCESSOR])], decls: 7, vars: 12, consts: [[1, "main-ora-date", 3, "mouseenter", "mouseleave"], ["tabindex", "-1", "nzFormat", "dd/MM/yyyy", 1, "ora-date", 2, "width", "100%", 3, "nzPlaceHolder", "nzDisabled", "nzDisabledDate", "formControl"], ["refDate", ""], ["nz-input", "", 1, "ora-input-date", 3, "placeholder", "formControl", "textMask", "focusout"], ["refInput", ""], ["nz-icon", "", "nzTheme", "outline", 1, "ora-calendar", 3, "nzType", "click"]], template: function OfDataPickerControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("mouseenter", function OfDataPickerControlComponent_Template_div_mouseenter_0_listener() { return ctx.mouseEnterMain(); })("mouseleave", function OfDataPickerControlComponent_Template_div_mouseleave_0_listener() { return ctx.mouseLeaveMain(); });
        i0.ɵɵelement(1, "nz-date-picker", 1, 2);
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("focusout", function OfDataPickerControlComponent_Template_input_focusout_3_listener() { return ctx.onFocusOutInputMask(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "i", 5);
        i0.ɵɵlistener("click", function OfDataPickerControlComponent_Template_i_click_5_listener() { return ctx.onClickIcon(); });
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzPlaceHolder", ctx.placeHolder)("nzDisabled", ctx.disabled)("nzDisabledDate", ctx.disabledDate)("formControl", ctx.control);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.placeHolder)("formControl", ctx.inputValue)("textMask", i0.ɵɵpureFunction1(10, _c2, ctx.mask));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzType", i0.ɵɵpipeBind1(6, 8, ctx.nzIcon$));
    } }, directives: [i1.NzDatePickerComponent, i2.NgControlStatus, i2.FormControlDirective, i3.NzInputDirective, i2.DefaultValueAccessor, i4.MaskedInputDirective, i5.ɵNzTransitionPatchDirective, i6.NzIconDirective], pipes: [i7.AsyncPipe], styles: [".main-ora-date {\n      position: relative;\n  }\n\n  .ora-date {\n      border: 0;\n  }\n\n  .ora-input-date {\n      position: absolute;\n      top: 0;\n      left: 0\n  }\n\n  .ora-close {\n      position: absolute;\n      top: 7px;\n      right: 5px;\n  }\n\n  .ora-calendar {\n      position: absolute;\n      top: 7px;\n      right: 5px;\n  }"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfDataPickerControlComponent, [{
        type: Component,
        args: [{
                selector: 'of-date-picker-ctrl',
                template: `
      <div class="main-ora-date" (mouseenter)="mouseEnterMain()" (mouseleave)="mouseLeaveMain()">
          <nz-date-picker class="ora-date" #refDate style="width:100%" [nzPlaceHolder]="placeHolder"
                          [nzDisabled]="disabled"
                          [nzDisabledDate]="disabledDate"
                          tabindex="-1"
                          [formControl]="control"
                          nzFormat="dd/MM/yyyy"></nz-date-picker>
          <input #refInput class="ora-input-date" nz-input (focusout)="onFocusOutInputMask()"
                 [placeholder]="placeHolder"
                 [formControl]="inputValue"
                 [textMask]="{mask: mask}"/>
          <i class="ora-calendar" (click)="onClickIcon()" nz-icon
             [nzType]="nzIcon$ | async"
             nzTheme="outline"></i>
      </div>
  `,
                styles: [`.main-ora-date {
      position: relative;
  }

  .ora-date {
      border: 0;
  }

  .ora-input-date {
      position: absolute;
      top: 0;
      left: 0
  }

  .ora-close {
      position: absolute;
      top: 7px;
      right: 5px;
  }

  .ora-calendar {
      position: absolute;
      top: 7px;
      right: 5px;
  }`],
                encapsulation: ViewEncapsulation.None,
                providers: [VALUE_ACCESSOR]
            }]
    }], function () { return []; }, { refDate: [{
            type: ViewChild,
            args: ['refDate']
        }], refInput: [{
            type: ViewChild,
            args: ['refInput']
        }], disabledDate: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], control: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtZGF0YS1waWNrZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2YtZGF0ZS1waWNrZXIvb2YtZGF0YS1waWNrZXItY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFFdkUsTUFBTSxjQUFjLEdBQWE7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0lBQzNELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQWlERixNQUFNLE9BQU8sNEJBQTRCO0lBaUV2QztRQTdEUyxnQkFBVyxHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLFNBQUksR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFD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QUEsNEJBQUE7UUFPbkYsZUFBMkI7UUFBM0IsNkNBQTJCLCtCQUFBLG1EQUFBO1FBSS9CLGVBQTBCO1FBQTFCLDBEQUEwQjs7a0RBZ0MxQiw0QkFBNEI7Y0EvQ3hDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7Z0JBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCUCxDQUFDO2dCQUNILGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDNUI7c0NBRXVCLE9BQU87a0JBQTVCLFNBQVM7bUJBQUMsU0FBUztZQUNHLFFBQVE7a0JBQTlCLFNBQVM7bUJBQUMsVUFBVTtZQUNaLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBc0JGLFFBQVE7a0JBRFgsS0FBSztZQWNHLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUHJvdmlkZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBOekRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcclxuaW1wb3J0IHsgQXBwVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcHAtdXRpbGl0eS1zZXJ2aWNlJztcclxuXHJcbmNvbnN0IFZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBPZkRhdGFQaWNrZXJDb250cm9sQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvZi1kYXRlLXBpY2tlci1jdHJsJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi1vcmEtZGF0ZVwiIChtb3VzZWVudGVyKT1cIm1vdXNlRW50ZXJNYWluKClcIiAobW91c2VsZWF2ZSk9XCJtb3VzZUxlYXZlTWFpbigpXCI+XHJcbiAgICAgICAgICA8bnotZGF0ZS1waWNrZXIgY2xhc3M9XCJvcmEtZGF0ZVwiICNyZWZEYXRlIHN0eWxlPVwid2lkdGg6MTAwJVwiIFtuelBsYWNlSG9sZGVyXT1cInBsYWNlSG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG56Rm9ybWF0PVwiZGQvTU0veXl5eVwiPjwvbnotZGF0ZS1waWNrZXI+XHJcbiAgICAgICAgICA8aW5wdXQgI3JlZklucHV0IGNsYXNzPVwib3JhLWlucHV0LWRhdGVcIiBuei1pbnB1dCAoZm9jdXNvdXQpPVwib25Gb2N1c091dElucHV0TWFzaygpXCJcclxuICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJpbnB1dFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICBbdGV4dE1hc2tdPVwie21hc2s6IG1hc2t9XCIvPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJvcmEtY2FsZW5kYXJcIiAoY2xpY2spPVwib25DbGlja0ljb24oKVwiIG56LWljb25cclxuICAgICAgICAgICAgIFtuelR5cGVdPVwibnpJY29uJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2AubWFpbi1vcmEtZGF0ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5vcmEtZGF0ZSB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICB9XHJcblxyXG4gIC5vcmEtaW5wdXQtZGF0ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwXHJcbiAgfVxyXG5cclxuICAub3JhLWNsb3NlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDdweDtcclxuICAgICAgcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5vcmEtY2FsZW5kYXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogN3B4O1xyXG4gICAgICByaWdodDogNXB4O1xyXG4gIH1gXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZEYXRhUGlja2VyQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgncmVmRGF0ZScpIHJlZkRhdGU6IE56RGF0ZVBpY2tlckNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdyZWZJbnB1dCcpIHJlZklucHV0OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZT86IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyID0gJ05nw6B5L1Row6FuZy9OxINtJztcclxuICBtYXNrID0gWy9cXGQvLCAvXFxkLywgJy8nLCAvXFxkLywgL1xcZC8sICcvJywgL1xcZC8sIC9cXGQvLCAvXFxkLywgL1xcZC9dO1xyXG4gICRkZXN0cm95OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBpc1dyaXRlVmFsdWUgPSBmYWxzZTtcclxuICBtb3VzZUV2ZW50JCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBuekljb24gPSAnY2FsZW5kYXInO1xyXG4gIG56SWNvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJ2NhbGVuZGFyJyk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgaXNTaG93SWNvbkNhbGVuZGFyID0gdHJ1ZTtcclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcclxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2KTtcclxuICB9XHJcblxyXG4gIGlzRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRpc2FibGVkKHY6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHY7XHJcbiAgICBpZiAodiA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiBudWxsLCBkaXNhYmxlZDogdHJ1ZSB9KTtcclxuICBpbnB1dFZhbHVlOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiAnJywgZGlzYWJsZWQ6IGZhbHNlIH0pO1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSh2OiBhbnkpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Ub3VjaGVkKCkge1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VWYWx1ZShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIG1vdXNlTGVhdmVNYWluKCkge1xyXG4gICAgdGhpcy5tb3VzZUV2ZW50JC5uZXh0KCdtb3VzZUxlYXZlJyk7XHJcbiAgfVxyXG5cclxuICBtb3VzZUVudGVyTWFpbigpIHtcclxuICAgIHRoaXMubW91c2VFdmVudCQubmV4dCgnbW91c2VFbnRlcicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgZnJvbUV2ZW50PGFueT4odGhpcy5yZWZJbnB1dC5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMjIyKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy4kZGVzdHJveSlcclxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZkRhdGUucGlja2VyLnNob3dPdmVybGF5KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyB0aGlzIHdpbGwgbWFrZSB0aGUgZXhlY3V0aW9uIGFmdGVyIHRoZSBhYm92ZSBib29sZWFuIGhhcyBjaGFuZ2VkXHJcbiAgICAgICAgdGhpcy5yZWZJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlZkRhdGUubnpPbk9wZW5DaGFuZ2VcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShvID0+IHtcclxuICAgICAgICBpZiAoIW8pIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyB0aGlzIHdpbGwgbWFrZSB0aGUgZXhlY3V0aW9uIGFmdGVyIHRoZSBhYm92ZSBib29sZWFuIGhhcyBjaGFuZ2VkXHJcbiAgICAgICAgICAgIHRoaXMucmVmSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIHRoaXMubW91c2VFdmVudCQucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMjIpKVxyXG4gICAgICAucGlwZShtYXAoZCA9PiB7XHJcbiAgICAgICAgaWYgKGQgPT09ICdtb3VzZUxlYXZlJykge1xyXG4gICAgICAgICAgcmV0dXJuICdjYWxlbmRhcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2NhbGVuZGFyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkodGhpcy5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgICAgcmV0dXJuICdjYWxlbmRhcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnY2xvc2UtY2lyY2xlJztcclxuICAgICAgfSkpLnBpcGUodGFwKChpY29uKSA9PiB7XHJcbiAgICAgIHRoaXMubnpJY29uJC5uZXh0KGljb24pO1xyXG4gICAgICB0aGlzLm56SWNvbiA9IGljb247XHJcbiAgICB9KSkuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLm56SWNvbiQubmV4dCgnY2FsZW5kYXInKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy4kZGVzdHJveS51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoKHJlc3VsdDogRGF0ZSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pc1dyaXRlVmFsdWUpIHtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZVRleHQgPSBtb21lbnQocmVzdWx0KS5mb3JtYXQoJ0REL01NL1lZWVknKTtcclxuICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZS5zZXRWYWx1ZSh2YWx1ZVRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVZhbHVlKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZS52YWx1ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy4kZGVzdHJveSksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksIGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhcnJTdHIgPSByZXN1bHQuc3BsaXQoJy8nKTtcclxuICAgICAgICBpZiAoIWlzTmFOKGFyclN0clswXSkgJiYgIWlzTmFOKGFyclN0clsxXSkgJiYgIWlzTmFOKGFyclN0clsyXSkpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGUgPSBtb21lbnQocmVzdWx0LCAnREQvTU0vWVlZWScpO1xyXG4gICAgICAgICAgaWYgKGRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5kaXNhYmxlZERhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGUoZGF0ZS50b0RhdGUoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZS5zZXRWYWx1ZShudWxsKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKGRhdGUudG9EYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZEYXRlLnBpY2tlci5oaWRlT3ZlcmxheSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUoZGF0ZS50b0RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZWZEYXRlLnBpY2tlci5oaWRlT3ZlcmxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8jcmVnaW9uIGJhc2UgQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgICBpZiAob2JqKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlVGV4dCA9IG1vbWVudChvYmopLmZvcm1hdCgnREQvTU0vWVlZWScpO1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUuc2V0VmFsdWUodmFsdWVUZXh0KTtcclxuICAgICAgdGhpcy52YWx1ZSA9IG1vbWVudChvYmopLnRvRGF0ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlLnNldFZhbHVlKCcnKTtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzV3JpdGVWYWx1ZSA9IHRydWU7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIG9uRm9jdXNPdXRJbnB1dE1hc2soKSB7XHJcbiAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eSh0aGlzLmNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZS5zZXRWYWx1ZShudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tJY29uKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpJY29uID09PSAnY2FsZW5kYXInKSB7XHJcbiAgICAgIHRoaXMucmVmRGF0ZS5waWNrZXIuc2hvd092ZXJsYXkoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uekljb24kLm5leHQoJ2NhbGVuZGFyJyk7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUuc2V0VmFsdWUobnVsbCk7XHJcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==