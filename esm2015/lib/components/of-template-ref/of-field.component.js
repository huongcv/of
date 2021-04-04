import { Component, ContentChild, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../of-dynamic/of-dynamic.component";
const _c0 = ["control"];
export class OfFieldComponent {
    constructor(ofDynamic) {
        this.ofDynamic = ofDynamic;
        // map với dataField
        this.id = '';
        this.ofDynamic.addOfFieldTempates(this);
    }
}
OfFieldComponent.ɵfac = function OfFieldComponent_Factory(t) { return new (t || OfFieldComponent)(i0.ɵɵdirectiveInject(i1.OfDynamicComponent)); };
OfFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfFieldComponent, selectors: [["of-field"]], contentQueries: function OfFieldComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.controlTemplate = _t.first);
    } }, inputs: { id: "id" }, decls: 0, vars: 0, template: function OfFieldComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfFieldComponent, [{
        type: Component,
        args: [{
                selector: 'of-field',
                template: ``
            }]
    }], function () { return [{ type: i1.OfDynamicComponent }]; }, { id: [{
            type: Input
        }], controlTemplate: [{
            type: ContentChild,
            args: ['control']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXRlbXBsYXRlLXJlZi9vZi1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7O0FBTzVFLE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0IsWUFBbUIsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFKaEQsb0JBQW9CO1FBQ1gsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUlmLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0ZBUFUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7Ozs7OztrREFBaEIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLEVBQUU7YUFDYjtxRUFHVSxFQUFFO2tCQUFWLEtBQUs7WUFDbUIsZUFBZTtrQkFBdkMsWUFBWTttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2ZEeW5hbWljQ29tcG9uZW50IH0gZnJvbSAnLi4vb2YtZHluYW1pYy9vZi1keW5hbWljLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29mLWZpZWxkJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIE9mRmllbGRDb21wb25lbnQge1xuICAvLyBtYXAgduG7m2kgZGF0YUZpZWxkXG4gIEBJbnB1dCgpIGlkID0gJyc7XG4gIEBDb250ZW50Q2hpbGQoJ2NvbnRyb2wnKSBjb250cm9sVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9mRHluYW1pYzogT2ZEeW5hbWljQ29tcG9uZW50KSB7XG4gICAgdGhpcy5vZkR5bmFtaWMuYWRkT2ZGaWVsZFRlbXBhdGVzKHRoaXMpO1xuICB9XG5cbn1cbiJdfQ==