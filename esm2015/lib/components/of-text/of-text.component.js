import { Component, EventEmitter, Output } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/destroy-rxjs.service";
import * as i2 from "ng-zorro-antd/spin";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/input";
export class OfTextComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
        this.searchEvent = new EventEmitter();
        this.keyEnter$ = new Subject();
        this.nzSpinning = false;
    }
    ngOnInit() {
        this.keyEnter$.pipe(takeUntil(this.destroy$), debounceTime(500), distinctUntilChanged())
            .subscribe(d => {
            if (this.schemaModel.isSearchBox) {
                this.schemaModel.searchBtnBusy = true;
                this.schemaModel.searchEvent$.next(d);
                this.searchEvent.emit(d);
                this.nzSpinning = false;
            }
        });
    }
    onKeyEnterControl() {
        if (this.schemaModel.isSearchBox) {
            this.nzSpinning = true;
            this.keyEnter$.next(this.group.getRawValue());
        }
    }
}
OfTextComponent.ɵfac = function OfTextComponent_Factory(t) { return new (t || OfTextComponent)(i0.ɵɵdirectiveInject(i1.DestroyRxjsService)); };
OfTextComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfTextComponent, selectors: [["of-text"]], outputs: { searchEvent: "searchEvent" }, features: [i0.ɵɵProvidersFeature([DestroyRxjsService])], decls: 3, vars: 6, consts: [[3, "nzSpinning"], [3, "formGroup", "keyup.enter"], ["nz-input", "", 3, "formControlName", "disabled", "placeholder", "maxlength"]], template: function OfTextComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-spin", 0);
        i0.ɵɵelementStart(1, "form", 1);
        i0.ɵɵlistener("keyup.enter", function OfTextComponent_Template_form_keyup_enter_1_listener() { return ctx.onKeyEnterControl(); });
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nzSpinning", ctx.nzSpinning);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.group);
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("maxlength", ctx.field == null ? null : ctx.field.maxLength);
        i0.ɵɵproperty("formControlName", ctx.field.dataField)("disabled", true)("placeholder", ctx.field.placeholder);
    } }, directives: [i2.NzSpinComponent, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.FormGroupDirective, i4.NzInputDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i3.MaxLengthValidator], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfTextComponent, [{
        type: Component,
        args: [{
                selector: 'of-text',
                template: `
      <nz-spin [nzSpinning]="nzSpinning">
          <form [formGroup]="group" (keyup.enter)="onKeyEnterControl()">
              <input [formControlName]="field.dataField" nz-input [disabled]="true" [placeholder]="field.placeholder"
                     maxlength="{{ field?.maxLength }}"/>
          </form>
      </nz-spin>

  `,
                providers: [DestroyRxjsService]
            }]
    }], function () { return [{ type: i1.DestroyRxjsService }]; }, { searchEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2YtdGV4dC9vZi10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFlL0UsTUFBTSxPQUFPLGVBQWU7SUFRMUIsWUFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFQdEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSWhELGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFJbkIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO2FBQ3JGLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7OzhFQTdCVSxlQUFlO29EQUFmLGVBQWUsc0dBRmYsQ0FBQyxrQkFBa0IsQ0FBQztRQVIzQixrQ0FDSTtRQUFBLCtCQUNJO1FBRHNCLHNHQUFlLHVCQUFtQixJQUFDO1FBQ3pELDJCQUVKO1FBQUEsaUJBQU87UUFDWCxpQkFBVTs7UUFMRCwyQ0FBeUI7UUFDeEIsZUFBbUI7UUFBbkIscUNBQW1CO1FBRWQsZUFBa0M7UUFBbEMscUZBQWtDO1FBRGxDLHFEQUFtQyxrQkFBQSxzQ0FBQTs7a0RBUTNDLGVBQWU7Y0FiM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDaEM7cUVBRVcsV0FBVztrQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEZXN0cm95Unhqc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZXN0cm95LXJ4anMuc2VydmljZSc7XHJcbmltcG9ydCB7IE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBPZlRleHRNb2RlbCB9IGZyb20gJy4vb2YtdGV4dC5tb2RlbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvZi10ZXh0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bnotc3BpbiBbbnpTcGlubmluZ109XCJuelNwaW5uaW5nXCI+XHJcbiAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImdyb3VwXCIgKGtleXVwLmVudGVyKT1cIm9uS2V5RW50ZXJDb250cm9sKClcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5kYXRhRmllbGRcIiBuei1pbnB1dCBbZGlzYWJsZWRdPVwidHJ1ZVwiIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cInt7IGZpZWxkPy5tYXhMZW5ndGggfX1cIi8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvbnotc3Bpbj5cclxuXHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFtEZXN0cm95Unhqc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZlRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBPdXRwdXQoKSBzZWFyY2hFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xyXG4gIGZpZWxkOiBPZlRleHRNb2RlbDtcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG4gIGtleUVudGVyJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgbnpTcGlubmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlc3Ryb3kkOiBEZXN0cm95Unhqc1NlcnZpY2UpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMua2V5RW50ZXIkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLCBkZWJvdW5jZVRpbWUoNTAwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcclxuICAgICAgLnN1YnNjcmliZShkID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zY2hlbWFNb2RlbC5pc1NlYXJjaEJveCkge1xyXG4gICAgICAgICAgdGhpcy5zY2hlbWFNb2RlbC5zZWFyY2hCdG5CdXN5ID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2NoZW1hTW9kZWwuc2VhcmNoRXZlbnQkLm5leHQoZCk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaEV2ZW50LmVtaXQoZCk7XHJcbiAgICAgICAgICB0aGlzLm56U3Bpbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25LZXlFbnRlckNvbnRyb2woKSB7XHJcbiAgICBpZiAodGhpcy5zY2hlbWFNb2RlbC5pc1NlYXJjaEJveCkge1xyXG4gICAgICB0aGlzLm56U3Bpbm5pbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmtleUVudGVyJC5uZXh0KHRoaXMuZ3JvdXAuZ2V0UmF3VmFsdWUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=