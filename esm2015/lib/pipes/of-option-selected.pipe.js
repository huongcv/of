import { Pipe } from '@angular/core';
import { AppUtilityService } from '../services/app-utility-service';
import * as i0 from "@angular/core";
export class OfOptionSelectedPipe {
    transform(value, label, field) {
        if (AppUtilityService.isNotNull(value)) {
            if (typeof field.renderSelectedFunc === 'function') {
                if (field === null || field === void 0 ? void 0 : field.itemSelected) {
                    return field.renderSelectedFunc(field === null || field === void 0 ? void 0 : field.itemSelected);
                }
                return '';
            }
            else {
                return label;
            }
        }
        return null;
    }
}
OfOptionSelectedPipe.ɵfac = function OfOptionSelectedPipe_Factory(t) { return new (t || OfOptionSelectedPipe)(); };
OfOptionSelectedPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "ofOptionSelected", type: OfOptionSelectedPipe, pure: false });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfOptionSelectedPipe, [{
        type: Pipe,
        args: [{
                name: 'ofOptionSelected',
                pure: false
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytb3B0aW9uLXNlbGVjdGVkLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL3BpcGVzL29mLW9wdGlvbi1zZWxlY3RlZC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQU1wRSxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFNBQVMsQ0FBQyxLQUFVLEVBQUUsS0FBYSxFQUFFLEtBQXdCO1FBQzNELElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksT0FBTyxLQUFLLENBQUMsa0JBQWtCLEtBQUssVUFBVSxFQUFFO2dCQUNsRCxJQUFJLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxZQUFZLEVBQUU7b0JBQ3ZCLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxZQUFZLENBQUMsQ0FBQztpQkFDdEQ7Z0JBQ0QsT0FBTyxFQUFFLENBQUM7YUFDWDtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O3dGQWRVLG9CQUFvQjsrRUFBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FKaEMsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLElBQUksRUFBRSxLQUFLO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9mU2VsZWN0QmFzZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL29mLXNlbGVjdC1iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQXBwVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcHAtdXRpbGl0eS1zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnb2ZPcHRpb25TZWxlY3RlZCcsXHJcbiAgcHVyZTogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE9mT3B0aW9uU2VsZWN0ZWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBsYWJlbDogc3RyaW5nLCBmaWVsZDogT2ZTZWxlY3RCYXNlTW9kZWwpOiBzdHJpbmcge1xyXG4gICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90TnVsbCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKHR5cGVvZiBmaWVsZC5yZW5kZXJTZWxlY3RlZEZ1bmMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBpZiAoZmllbGQ/Lml0ZW1TZWxlY3RlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZpZWxkLnJlbmRlclNlbGVjdGVkRnVuYyhmaWVsZD8uaXRlbVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=