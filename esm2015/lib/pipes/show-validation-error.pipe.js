import { Pipe } from '@angular/core';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
export class ShowValidationErrorPipe {
    transform(errors, validations, submitted) {
        if (!submitted) {
            return '';
        }
        let err = '';
        if (errors && (validations === null || validations === void 0 ? void 0 : validations.length) > 0) {
            _.forEach(validations, valid => {
                if (errors[valid.name]) {
                    err = valid.message;
                    return false;
                }
            });
        }
        return err;
    }
}
ShowValidationErrorPipe.ɵfac = function ShowValidationErrorPipe_Factory(t) { return new (t || ShowValidationErrorPipe)(); };
ShowValidationErrorPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "showValidationError", type: ShowValidationErrorPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ShowValidationErrorPipe, [{
        type: Pipe,
        args: [{
                name: 'showValidationError'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uLWVycm9yLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL3BpcGVzL3Nob3ctdmFsaWRhdGlvbi1lcnJvci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQU01QixNQUFNLE9BQU8sdUJBQXVCO0lBRWxDLFNBQVMsQ0FBQyxNQUFXLEVBQUUsV0FBMkIsRUFBRSxTQUFrQjtRQUNwRSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksTUFBTSxJQUFJLENBQUEsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE1BQU0sSUFBRyxDQUFDLEVBQUU7WUFDckMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDdEIsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ3BCLE9BQU8sS0FBSyxDQUFDO2lCQUNkO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7OEZBaEJVLHVCQUF1QjtxRkFBdkIsdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FIbkMsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxxQkFBcUI7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgT3JkVmFsaWRhdG9yIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc2hvd1ZhbGlkYXRpb25FcnJvcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3dWYWxpZGF0aW9uRXJyb3JQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShlcnJvcnM6IGFueSwgdmFsaWRhdGlvbnM6IE9yZFZhbGlkYXRvcltdLCBzdWJtaXR0ZWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdWJtaXR0ZWQpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgbGV0IGVyciA9ICcnO1xyXG4gICAgaWYgKGVycm9ycyAmJiB2YWxpZGF0aW9ucz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICBfLmZvckVhY2godmFsaWRhdGlvbnMsIHZhbGlkID0+IHtcclxuICAgICAgICBpZiAoZXJyb3JzW3ZhbGlkLm5hbWVdKSB7XHJcbiAgICAgICAgICBlcnIgPSB2YWxpZC5tZXNzYWdlO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyO1xyXG4gIH1cclxuXHJcbn1cclxuIl19