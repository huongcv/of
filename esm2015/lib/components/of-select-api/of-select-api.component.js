import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { of } from 'rxjs';
import { AppUtilityService } from '../../services/app-utility-service';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/destroy-rxjs.service";
import * as i2 from "../of-select/of-select.component";
const _c0 = ["vcSelect"];
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
OfSelectApiComponent.ɵfac = function OfSelectApiComponent_Factory(t) { return new (t || OfSelectApiComponent)(i0.ɵɵdirectiveInject(i1.DestroyRxjsService)); };
OfSelectApiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfSelectApiComponent, selectors: [["lib-of-select-api"]], viewQuery: function OfSelectApiComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.vcSelect = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([DestroyRxjsService])], decls: 2, vars: 3, consts: [[3, "schemaModel", "group", "field"], ["vcSelect", ""]], template: function OfSelectApiComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "of-select", 0, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("schemaModel", ctx.schemaModel)("group", ctx.group)("field", ctx.field);
    } }, directives: [i2.OfSelectComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfSelectApiComponent, [{
        type: Component,
        args: [{
                selector: 'lib-of-select-api',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DestroyRxjsService }]; }, { vcSelect: [{
            type: ViewChild,
            args: ['vcSelect']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWFwaS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2Ytc2VsZWN0LWFwaS9vZi1zZWxlY3QtYXBpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFekUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBUzNDLE1BQU0sT0FBTyxvQkFBb0I7SUFNL0IsWUFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFDaEQsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQzVDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0MsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwRCxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMvRCxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN2RDtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ25DO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3dGQXhDVSxvQkFBb0I7eURBQXBCLG9CQUFvQjs7Ozs7MENBSHBCLENBQUMsa0JBQWtCLENBQUM7UUFEM0Isa0NBQTZGOztRQUF4RSw2Q0FBMkIsb0JBQUEsb0JBQUE7O2tEQUl6QyxvQkFBb0I7Y0FQaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTtvR0FDd0Y7Z0JBQ2xHLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtxRUFFd0IsUUFBUTtrQkFBOUIsU0FBUzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPZlNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL29mLXNlbGVjdC9vZi1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IElPZlNlbGVjdE9wdGlvbkR0bywgT2ZTY2hlbWFNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEZXN0cm95Unhqc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZXN0cm95LXJ4anMuc2VydmljZSc7XG5pbXBvcnQgeyBPZlNlbGVjdEFwaU1vZGVsIH0gZnJvbSAnLi9vZi1zZWxlY3QtYXBpLW1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcHBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwcC11dGlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb2Ytc2VsZWN0LWFwaScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8b2Ytc2VsZWN0ICN2Y1NlbGVjdCBbc2NoZW1hTW9kZWxdPVwic2NoZW1hTW9kZWxcIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbZmllbGRdPVwiZmllbGRcIj48L29mLXNlbGVjdD5gLFxuICBwcm92aWRlcnM6IFtEZXN0cm95Unhqc1NlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPZlNlbGVjdEFwaUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCd2Y1NlbGVjdCcpIHZjU2VsZWN0OiBPZlNlbGVjdENvbXBvbmVudDtcbiAgc2NoZW1hTW9kZWw6IE9mU2NoZW1hTW9kZWw7XG4gIGZpZWxkOiBPZlNlbGVjdEFwaU1vZGVsO1xuICBncm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVzdHJveSQ6IERlc3Ryb3lSeGpzU2VydmljZSkge1xuICB9XG5cbiAgZ2V0IGhhc0NhY2hlT3B0aW9uKCkge1xuICAgIHJldHVybiAhQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eSh0aGlzLmZpZWxkLmtleUNhY2hlKTtcbiAgfVxuXG4gIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuICdzZWxlY3RPcHRfJyArIHRoaXMuZmllbGQua2V5Q2FjaGU7XG4gIH1cblxuICBnZXRPcHRpb25zRnJvbUFwaSgpOiBPYnNlcnZhYmxlPElPZlNlbGVjdE9wdGlvbkR0b1tdPiB7XG4gICAgaWYgKHRoaXMuaGFzQ2FjaGVPcHRpb24pIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSk7XG4gICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgcmV0dXJuIG9mKEpTT04ucGFyc2UoY2FjaGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmllbGQuZnVuY3Rpb25TZXJ2aWNlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRPcHRpb25zRnJvbUFwaSgpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKG9wdCA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzQ2FjaGVPcHRpb24gJiYgIUFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90QW55SXRlbShvcHQpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShvcHQpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5maWVsZC5vcHRpb25zID0gb3B0O1xuICAgICAgICAgIGlmICh0aGlzLnZjU2VsZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnZjU2VsZWN0LnNldE9wdGlvbnNWaWV3KG9wdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbn1cbiJdfQ==