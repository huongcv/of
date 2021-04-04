import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class NumbersOnlyDirective {
    // tslint:disable-next-line:variable-name
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
NumbersOnlyDirective.ɵfac = function NumbersOnlyDirective_Factory(t) { return new (t || NumbersOnlyDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
NumbersOnlyDirective.ɵdir = i0.ɵɵdefineDirective({ type: NumbersOnlyDirective, selectors: [["input", "numbersOnlyInput", ""]], hostBindings: function NumbersOnlyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("input", function NumbersOnlyDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NumbersOnlyDirective, [{
        type: Directive,
        args: [{
                selector: 'input[numbersOnlyInput]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { onInputChange: [{
            type: HostListener,
            args: ['input', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy1vbmx5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvZGlyZWN0aXZlcy9udW1iZXJzLW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUtwRSxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLHlDQUF5QztJQUN6QyxZQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUNuQyxDQUFDO0lBRWtDLGFBQWEsQ0FBQyxLQUFLO1FBQ3BELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxXQUFXLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQ2hELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7O3dGQVpVLG9CQUFvQjt5REFBcEIsb0JBQW9CO3VHQUFwQix5QkFBcUI7O2tEQUFyQixvQkFBb0I7Y0FIaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7YUFDcEM7NkRBT29DLGFBQWE7a0JBQS9DLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXRbbnVtYmVyc09ubHlJbnB1dF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJzT25seURpcmVjdGl2ZSB7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgb25JbnB1dENoYW5nZShldmVudCkge1xyXG4gICAgY29uc3QgaW5pdGFsVmFsdWUgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGluaXRhbFZhbHVlLnJlcGxhY2UoL1teMC05XSovZywgJycpO1xyXG4gICAgaWYgKGluaXRhbFZhbHVlICE9PSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnZhbHVlKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19