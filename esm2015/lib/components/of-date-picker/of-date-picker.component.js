import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import * as moment from 'moment';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { takeUntil } from 'rxjs/operators';
import { AppUtilityService } from '../../services/app-utility-service';
export class OfDatePickerComponent {
    constructor(destroy$, cdr) {
        this.destroy$ = destroy$;
        this.cdr = cdr;
        this.disabledDate = (current) => {
            var _a;
            if (((_a = this.field) === null || _a === void 0 ? void 0 : _a.dateNotGreaterThanCurrent) && !this.maxDate) {
                this.maxDate = new Date();
            }
            let check = false;
            if (this.minDate) {
                check = check || differenceInCalendarDays(current, this.minDate) < 0;
            }
            if (this.maxDate) {
                check = check || differenceInCalendarDays(current, this.maxDate) > 0;
            }
            return check;
        };
    }
    ngOnInit() {
        this.minDate = this.field.minDate;
        this.maxDate = this.field.maxDate;
        if (this.field.minDateAsync) {
            this.field.minDateAsync.pipe(takeUntil(this.destroy$))
                .subscribe(min => {
                this.setMinDate(min);
            });
        }
        if (this.field.maxDateAsync) {
            this.field.maxDateAsync.pipe(takeUntil(this.destroy$)).subscribe(max => {
                this.setMaxDate(max);
            });
        }
        this.schemaModel.subRender(this.cdr, this.destroy$);
    }
    setMinDate(min) {
        const d = this.convertDate(min);
        if (AppUtilityService.isNullOrEmpty(this.field.minDate)) {
            this.minDate = d;
        }
        else if (AppUtilityService.isNotNull(d) && differenceInCalendarDays(d, this.field.minDate) > 0) {
            this.minDate = d;
        }
        else {
            this.minDate = this.field.minDate;
        }
        this.cdr.detectChanges();
    }
    setMaxDate(max) {
        const d = this.convertDate(max);
        if (AppUtilityService.isNullOrEmpty(this.field.maxDate)) {
            this.maxDate = d;
        }
        else if (AppUtilityService.isNotNull(d) && differenceInCalendarDays(d, this.field.maxDate) < 0) {
            this.maxDate = d;
        }
        else {
            this.maxDate = this.field.maxDate;
        }
        this.cdr.detectChanges();
    }
    convertDate(date) {
        if (moment.isMoment(date)) {
            return date.toDate();
        }
        else {
            return date;
        }
    }
    get f() {
        return this.group.get(this.field.dataField);
    }
    handlerTuNgayChange() {
        if (AppUtilityService.isNotNull(this.field.tuNgayDataField) && this.group.get(this.field.tuNgayDataField)) {
            this.group.get(this.field.tuNgayDataField).valueChanges
                .pipe(takeUntil(this.destroy$)).subscribe(min => {
                this.setMinDate(min);
            });
        }
    }
    handlerDenNgayChange() {
        if (AppUtilityService.isNotNull(this.field.denNgayDataField) && this.group.get(this.field.denNgayDataField)) {
            this.group.get(this.field.denNgayDataField).valueChanges
                .pipe(takeUntil(this.destroy$)).subscribe(max => {
                this.setMaxDate(max);
            });
        }
    }
    ngAfterContentChecked() {
        this.handlerDenNgayChange();
        this.handlerTuNgayChange();
    }
}
OfDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-date-picker',
                template: `
      <form [formGroup]="group">
          <of-date-picker-ctrl #vcDatePicker [formControlName]="field.dataField"
                               [disabled]="field.disabled"
                               [disabledDate]="disabledDate"></of-date-picker-ctrl>
      </form>
  `,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfDatePickerComponent.ctorParameters = () => [
    { type: DestroyRxjsService },
    { type: ChangeDetectorRef }
];
OfDatePickerComponent.propDecorators = {
    vcDatePicker: [{ type: ViewChild, args: ['vcDatePicker',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLWRhdGUtcGlja2VyL29mLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sd0JBQXdCLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBY3ZFLE1BQU0sT0FBTyxxQkFBcUI7SUFRaEMsWUFBb0IsUUFBNEIsRUFDN0IsR0FBc0I7UUFEckIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF5RHpDLGlCQUFZLEdBQUcsQ0FBQyxPQUFhLEVBQVcsRUFBRTs7WUFDeEMsSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLDBDQUFFLHlCQUF5QixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsS0FBSyxHQUFHLEtBQUssSUFBSSx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0RTtZ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Q0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFsSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFsQlEsa0JBQWtCO1lBVHpCLGlCQUFpQjs7OzJCQWtDaEIsU0FBUyxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgRGVzdHJveVJ4anNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzdHJveS1yeGpzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPZlNjaGVtYU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgT2ZEYXRlTW9kZWwgfSBmcm9tICcuL29mLWRhdGUubW9kZWwnO1xyXG5pbXBvcnQgeyBPZkRhdGFQaWNrZXJDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9vZi1kYXRhLXBpY2tlci1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXBwVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcHAtdXRpbGl0eS1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2YtZGF0ZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgICAgIDxvZi1kYXRlLXBpY2tlci1jdHJsICN2Y0RhdGVQaWNrZXIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5kYXRhRmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCI+PC9vZi1kYXRlLXBpY2tlci1jdHJsPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFtEZXN0cm95Unhqc1NlcnZpY2VdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZkRhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xyXG4gIGZpZWxkOiBPZkRhdGVNb2RlbDtcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG4gIG1pbkRhdGU6IERhdGU7XHJcbiAgbWF4RGF0ZTogRGF0ZTtcclxuICBAVmlld0NoaWxkKCd2Y0RhdGVQaWNrZXInKSB2Y0RhdGVQaWNrZXI6IE9mRGF0YVBpY2tlckNvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVzdHJveSQ6IERlc3Ryb3lSeGpzU2VydmljZSxcclxuICAgICAgICAgICAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5taW5EYXRlID0gdGhpcy5maWVsZC5taW5EYXRlO1xyXG4gICAgdGhpcy5tYXhEYXRlID0gdGhpcy5maWVsZC5tYXhEYXRlO1xyXG4gICAgaWYgKHRoaXMuZmllbGQubWluRGF0ZUFzeW5jKSB7XHJcbiAgICAgIHRoaXMuZmllbGQubWluRGF0ZUFzeW5jLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUobWluID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0TWluRGF0ZShtaW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmllbGQubWF4RGF0ZUFzeW5jKSB7XHJcbiAgICAgIHRoaXMuZmllbGQubWF4RGF0ZUFzeW5jLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobWF4ID0+IHtcclxuICAgICAgICB0aGlzLnNldE1heERhdGUobWF4KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLnN1YlJlbmRlcih0aGlzLmNkciwgdGhpcy5kZXN0cm95JCk7XHJcbiAgfVxyXG5cclxuICBzZXRNaW5EYXRlKG1pbjogRGF0ZSB8IG1vbWVudC5Nb21lbnQpIHtcclxuICAgIGNvbnN0IGQgPSB0aGlzLmNvbnZlcnREYXRlKG1pbik7XHJcbiAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eSh0aGlzLmZpZWxkLm1pbkRhdGUpKSB7XHJcbiAgICAgIHRoaXMubWluRGF0ZSA9IGQ7XHJcbiAgICB9IGVsc2UgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90TnVsbChkKSAmJiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZCwgdGhpcy5maWVsZC5taW5EYXRlKSA+IDApIHtcclxuICAgICAgdGhpcy5taW5EYXRlID0gZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWluRGF0ZSA9IHRoaXMuZmllbGQubWluRGF0ZTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHNldE1heERhdGUobWF4OiBEYXRlIHwgbW9tZW50Lk1vbWVudCkge1xyXG4gICAgY29uc3QgZCA9IHRoaXMuY29udmVydERhdGUobWF4KTtcclxuICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHRoaXMuZmllbGQubWF4RGF0ZSkpIHtcclxuICAgICAgdGhpcy5tYXhEYXRlID0gZDtcclxuICAgIH0gZWxzZSBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOb3ROdWxsKGQpICYmIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkLCB0aGlzLmZpZWxkLm1heERhdGUpIDwgMCkge1xyXG4gICAgICB0aGlzLm1heERhdGUgPSBkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tYXhEYXRlID0gdGhpcy5maWVsZC5tYXhEYXRlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgY29udmVydERhdGUoZGF0ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQpIHtcclxuICAgIGlmIChtb21lbnQuaXNNb21lbnQoZGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIGRhdGUudG9EYXRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVkRGF0ZSA9IChjdXJyZW50OiBEYXRlKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodGhpcy5maWVsZD8uZGF0ZU5vdEdyZWF0ZXJUaGFuQ3VycmVudCAmJiAhdGhpcy5tYXhEYXRlKSB7XHJcbiAgICAgIHRoaXMubWF4RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm1pbkRhdGUpIHtcclxuICAgICAgY2hlY2sgPSBjaGVjayB8fCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoY3VycmVudCwgdGhpcy5taW5EYXRlKSA8IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tYXhEYXRlKSB7XHJcbiAgICAgIGNoZWNrID0gY2hlY2sgfHwgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGN1cnJlbnQsIHRoaXMubWF4RGF0ZSkgPiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrO1xyXG4gIH07XHJcblxyXG5cclxuICBoYW5kbGVyVHVOZ2F5Q2hhbmdlKCkge1xyXG4gICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90TnVsbCh0aGlzLmZpZWxkLnR1TmdheURhdGFGaWVsZCkgJiYgdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC50dU5nYXlEYXRhRmllbGQpKSB7XHJcbiAgICAgIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQudHVOZ2F5RGF0YUZpZWxkKS52YWx1ZUNoYW5nZXNcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtaW4gPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0TWluRGF0ZShtaW4pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZXJEZW5OZ2F5Q2hhbmdlKCkge1xyXG4gICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90TnVsbCh0aGlzLmZpZWxkLmRlbk5nYXlEYXRhRmllbGQpICYmIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGVuTmdheURhdGFGaWVsZCkpIHtcclxuICAgICAgdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC5kZW5OZ2F5RGF0YUZpZWxkKS52YWx1ZUNoYW5nZXNcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtYXggPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0TWF4RGF0ZShtYXgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlckRlbk5nYXlDaGFuZ2UoKTtcclxuICAgIHRoaXMuaGFuZGxlclR1TmdheUNoYW5nZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=