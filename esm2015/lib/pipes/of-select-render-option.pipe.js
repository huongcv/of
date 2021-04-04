import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class OfSelectRenderOptionPipe {
    transform(displayText, field, option) {
        return typeof (field.renderOptionFunc) === 'function' ? field === null || field === void 0 ? void 0 : field.renderOptionFunc(option) : displayText;
    }
}
OfSelectRenderOptionPipe.ɵfac = function OfSelectRenderOptionPipe_Factory(t) { return new (t || OfSelectRenderOptionPipe)(); };
OfSelectRenderOptionPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "ofSelectRenderOption", type: OfSelectRenderOptionPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfSelectRenderOptionPipe, [{
        type: Pipe,
        args: [{
                name: 'ofSelectRenderOption'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LXJlbmRlci1vcHRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvcGlwZXMvb2Ytc2VsZWN0LXJlbmRlci1vcHRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFPcEQsTUFBTSxPQUFPLHdCQUF3QjtJQUVuQyxTQUFTLENBQUMsV0FBbUIsRUFBRSxLQUF3QixFQUFFLE1BQTBCO1FBQ2pGLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3hHLENBQUM7O2dHQUpVLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FIcEMsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxzQkFBc0I7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9mU2VsZWN0QmFzZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL29mLXNlbGVjdC1iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgSU9mU2VsZWN0T3B0aW9uRHRvIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnb2ZTZWxlY3RSZW5kZXJPcHRpb24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZlNlbGVjdFJlbmRlck9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGRpc3BsYXlUZXh0OiBzdHJpbmcsIGZpZWxkOiBPZlNlbGVjdEJhc2VNb2RlbCwgb3B0aW9uOiBJT2ZTZWxlY3RPcHRpb25EdG8pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHR5cGVvZiAoZmllbGQucmVuZGVyT3B0aW9uRnVuYykgPT09ICdmdW5jdGlvbicgPyBmaWVsZD8ucmVuZGVyT3B0aW9uRnVuYyhvcHRpb24pIDogZGlzcGxheVRleHQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=