import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
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
OfService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OfService_Factory() { return new OfService(i0.ɵɵinject(i1.RestService)); }, token: OfService, providedIn: "root" });
OfService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OfService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Yuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvc2VydmljZXMvb2Yuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUszQyxNQUFNLE9BQU8sU0FBUztJQUdwQixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUY1QyxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBRWdDLENBQUM7SUFFaEQsTUFBTTtRQUNKLDhDQUE4QztRQUM5Qyw4Q0FBOEM7UUFDOUMsOEJBQThCO1FBQzlCLEtBQUs7SUFDUCxDQUFDOzs7O1lBYkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2ZTZXJ2aWNlIHtcbiAgYXBpTmFtZSA9ICdPZic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0U2VydmljZTogUmVzdFNlcnZpY2UpIHt9XG5cbiAgc2FtcGxlKCkge1xuICAgIC8vIHJldHVybiB0aGlzLnJlc3RTZXJ2aWNlLnJlcXVlc3Q8dm9pZCwgYW55PihcbiAgICAvLyAgIHsgbWV0aG9kOiAnR0VUJywgdXJsOiAnL2FwaS9PZi9zYW1wbGUnIH0sXG4gICAgLy8gICB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9XG4gICAgLy8gKTtcbiAgfVxufVxuIl19