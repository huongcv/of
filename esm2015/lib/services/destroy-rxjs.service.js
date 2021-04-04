import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class DestroyRxjsService extends Subject {
    ngOnDestroy() {
        this.next();
        this.complete();
    }
}
DestroyRxjsService.ɵfac = function DestroyRxjsService_Factory(t) { return ɵDestroyRxjsService_BaseFactory(t || DestroyRxjsService); };
DestroyRxjsService.ɵprov = i0.ɵɵdefineInjectable({ token: DestroyRxjsService, factory: DestroyRxjsService.ɵfac });
const ɵDestroyRxjsService_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(DestroyRxjsService);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DestroyRxjsService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzdHJveS1yeGpzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL3NlcnZpY2VzL2Rlc3Ryb3ktcnhqcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHL0IsTUFBTSxPQUFPLGtCQUFtQixTQUFRLE9BQWE7SUFDbkQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzsrR0FKVSxrQkFBa0I7MERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7K0VBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVzdHJveVJ4anNTZXJ2aWNlIGV4dGVuZHMgU3ViamVjdDx2b2lkPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm5leHQoKTtcclxuICAgIHRoaXMuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==