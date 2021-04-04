import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class OfService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Of';
    }
    sample() {
        // return this.restService.request<void, any>(
        //   { method: 'GET', url: '/api/Of/sample' },
        //   { apiName: this.apiName }
        // );
    }
}
OfService.ɵfac = function OfService_Factory(t) { return new (t || OfService)(i0.ɵɵinject(i1.RestService)); };
OfService.ɵprov = i0.ɵɵdefineInjectable({ token: OfService, factory: OfService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Yuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvc2VydmljZXMvb2Yuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLFNBQVM7SUFHcEIsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGNUMsWUFBTyxHQUFHLElBQUksQ0FBQztJQUVnQyxDQUFDO0lBRWhELE1BQU07UUFDSiw4Q0FBOEM7UUFDOUMsOENBQThDO1FBQzlDLDhCQUE4QjtRQUM5QixLQUFLO0lBQ1AsQ0FBQzs7a0VBVlUsU0FBUztpREFBVCxTQUFTLFdBQVQsU0FBUyxtQkFGUixNQUFNO2tEQUVQLFNBQVM7Y0FIckIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2ZTZXJ2aWNlIHtcbiAgYXBpTmFtZSA9ICdPZic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0U2VydmljZTogUmVzdFNlcnZpY2UpIHt9XG5cbiAgc2FtcGxlKCkge1xuICAgIC8vIHJldHVybiB0aGlzLnJlc3RTZXJ2aWNlLnJlcXVlc3Q8dm9pZCwgYW55PihcbiAgICAvLyAgIHsgbWV0aG9kOiAnR0VUJywgdXJsOiAnL2FwaS9PZi9zYW1wbGUnIH0sXG4gICAgLy8gICB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9XG4gICAgLy8gKTtcbiAgfVxufVxuIl19