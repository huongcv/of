import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/destroy-rxjs.service";
import * as i2 from "../of-select/of-select.component";
const _c0 = ["vcSelect"];
export class OfSelectAsyncComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.field.optionsAsync.pipe(takeUntil(this.destroy$)).subscribe(opt => {
                this.field.options = opt;
                if (this.vcSelect) {
                    this.vcSelect.setOptionsView(opt);
                }
            });
        });
    }
}
OfSelectAsyncComponent.ɵfac = function OfSelectAsyncComponent_Factory(t) { return new (t || OfSelectAsyncComponent)(i0.ɵɵdirectiveInject(i1.DestroyRxjsService)); };
OfSelectAsyncComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfSelectAsyncComponent, selectors: [["select-async"]], viewQuery: function OfSelectAsyncComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.vcSelect = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([DestroyRxjsService])], decls: 2, vars: 3, consts: [[3, "schemaModel", "group", "field"], ["vcSelect", ""]], template: function OfSelectAsyncComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "of-select", 0, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("schemaModel", ctx.schemaModel)("group", ctx.group)("field", ctx.field);
    } }, directives: [i2.OfSelectComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfSelectAsyncComponent, [{
        type: Component,
        args: [{
                selector: 'select-async',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DestroyRxjsService }]; }, { vcSelect: [{
            type: ViewChild,
            args: ['vcSelect']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWFzeW5jLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1zZWxlY3QtYXN5bmMvb2Ytc2VsZWN0LWFzeW5jLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVUzQyxNQUFNLE9BQU8sc0JBQXNCO0lBTWpDLFlBQW9CLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO0lBQ2hELENBQUM7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ25DO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzRGQWxCVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjs7Ozs7MENBSHRCLENBQUMsa0JBQWtCLENBQUM7UUFEM0Isa0NBQTZGOztRQUF4RSw2Q0FBMkIsb0JBQUEsb0JBQUE7O2tEQUl6QyxzQkFBc0I7Y0FQbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7b0dBQ3dGO2dCQUNsRyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7cUVBRXdCLFFBQVE7a0JBQTlCLFNBQVM7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2ZTY2hlbWFNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPZlNlbGVjdEFzeW5jTW9kZWwgfSBmcm9tICcuL29mLXNlbGVjdC1hc3luYy1tb2RlbCc7XG5pbXBvcnQgeyBEZXN0cm95Unhqc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZXN0cm95LXJ4anMuc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPZlNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL29mLXNlbGVjdC9vZi1zZWxlY3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWFzeW5jJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxvZi1zZWxlY3QgI3ZjU2VsZWN0IFtzY2hlbWFNb2RlbF09XCJzY2hlbWFNb2RlbFwiIFtncm91cF09XCJncm91cFwiIFtmaWVsZF09XCJmaWVsZFwiPjwvb2Ytc2VsZWN0PmAsXG4gIHByb3ZpZGVyczogW0Rlc3Ryb3lSeGpzU2VydmljZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE9mU2VsZWN0QXN5bmNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndmNTZWxlY3QnKSB2Y1NlbGVjdDogT2ZTZWxlY3RDb21wb25lbnQ7XG4gIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xuICBmaWVsZDogT2ZTZWxlY3RBc3luY01vZGVsO1xuICBncm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVzdHJveSQ6IERlc3Ryb3lSeGpzU2VydmljZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5maWVsZC5vcHRpb25zQXN5bmMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcHQgPT4ge1xuICAgICAgICB0aGlzLmZpZWxkLm9wdGlvbnMgPSBvcHQ7XG4gICAgICAgIGlmICh0aGlzLnZjU2VsZWN0KSB7XG4gICAgICAgICAgdGhpcy52Y1NlbGVjdC5zZXRPcHRpb25zVmlldyhvcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=