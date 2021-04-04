import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { of } from 'rxjs';
import { AppUtilityService } from '../../services/app-utility-service';
import { takeUntil } from 'rxjs/operators';
export class OfSelectApiComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
    }
    get hasCacheOption() {
        return !AppUtilityService.isNullOrEmpty(this.field.keyCache);
    }
    get key() {
        return 'selectOpt_' + this.field.keyCache;
    }
    getOptionsFromApi() {
        if (this.hasCacheOption) {
            const cache = sessionStorage.getItem(this.key);
            if (cache) {
                return of(JSON.parse(cache));
            }
        }
        return this.field.functionService;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.getOptionsFromApi().pipe(takeUntil(this.destroy$))
                .subscribe(opt => {
                if (this.hasCacheOption && !AppUtilityService.isNotAnyItem(opt)) {
                    sessionStorage.setItem(this.key, JSON.stringify(opt));
                }
                this.field.options = opt;
                if (this.vcSelect) {
                    this.vcSelect.setOptionsView(opt);
                }
            });
        });
    }
}
OfSelectApiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-of-select-api',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSelectApiComponent.ctorParameters = () => [
    { type: DestroyRxjsService }
];
OfSelectApiComponent.propDecorators = {
    vcSelect: [{ type: ViewChild, args: ['vcSelect',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWFwaS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2Ytc2VsZWN0LWFwaS9vZi1zZWxlY3QtYXBpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFekUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTM0MsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixZQUFvQixRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtJQUNoRCxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDOUI7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDcEMsQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3BELFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQy9ELGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZEO2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbkM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7b0dBQ3dGO2dCQUNsRyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQVpRLGtCQUFrQjs7O3VCQWN4QixTQUFTLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2ZTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9vZi1zZWxlY3Qvb2Ytc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJT2ZTZWxlY3RPcHRpb25EdG8sIE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGVzdHJveVJ4anNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzdHJveS1yeGpzLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2ZTZWxlY3RBcGlNb2RlbCB9IGZyb20gJy4vb2Ytc2VsZWN0LWFwaS1tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBwVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcHAtdXRpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9mLXNlbGVjdC1hcGknLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG9mLXNlbGVjdCAjdmNTZWxlY3QgW3NjaGVtYU1vZGVsXT1cInNjaGVtYU1vZGVsXCIgW2dyb3VwXT1cImdyb3VwXCIgW2ZpZWxkXT1cImZpZWxkXCI+PC9vZi1zZWxlY3Q+YCxcbiAgcHJvdmlkZXJzOiBbRGVzdHJveVJ4anNTZXJ2aWNlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgT2ZTZWxlY3RBcGlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndmNTZWxlY3QnKSB2Y1NlbGVjdDogT2ZTZWxlY3RDb21wb25lbnQ7XG4gIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xuICBmaWVsZDogT2ZTZWxlY3RBcGlNb2RlbDtcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlc3Ryb3kkOiBEZXN0cm95Unhqc1NlcnZpY2UpIHtcbiAgfVxuXG4gIGdldCBoYXNDYWNoZU9wdGlvbigpIHtcbiAgICByZXR1cm4gIUFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkodGhpcy5maWVsZC5rZXlDYWNoZSk7XG4gIH1cblxuICBnZXQga2V5KCkge1xuICAgIHJldHVybiAnc2VsZWN0T3B0XycgKyB0aGlzLmZpZWxkLmtleUNhY2hlO1xuICB9XG5cbiAgZ2V0T3B0aW9uc0Zyb21BcGkoKTogT2JzZXJ2YWJsZTxJT2ZTZWxlY3RPcHRpb25EdG9bXT4ge1xuICAgIGlmICh0aGlzLmhhc0NhY2hlT3B0aW9uKSB7XG4gICAgICBjb25zdCBjYWNoZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpO1xuICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIHJldHVybiBvZihKU09OLnBhcnNlKGNhY2hlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpZWxkLmZ1bmN0aW9uU2VydmljZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0T3B0aW9uc0Zyb21BcGkoKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZShvcHQgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmhhc0NhY2hlT3B0aW9uICYmICFBcHBVdGlsaXR5U2VydmljZS5pc05vdEFueUl0ZW0ob3B0KSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgSlNPTi5zdHJpbmdpZnkob3B0KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZmllbGQub3B0aW9ucyA9IG9wdDtcbiAgICAgICAgICBpZiAodGhpcy52Y1NlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy52Y1NlbGVjdC5zZXRPcHRpb25zVmlldyhvcHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG59XG4iXX0=