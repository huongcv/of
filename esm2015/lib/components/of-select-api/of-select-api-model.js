import { OfSelectBaseModel } from '../../models/of-select-base.model';
export class OfSelectApiModel extends OfSelectBaseModel {
    constructor(config) {
        super(config);
        this.dataExtend = {};
        this.type = 'selectApi';
        this.functionService = config.functionService;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWFwaS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1zZWxlY3QtYXBpL29mLXNlbGVjdC1hcGktbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUEyQixNQUFNLG1DQUFtQyxDQUFDO0FBVy9GLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxpQkFBaUI7SUFNckQsWUFBWSxNQUE4QjtRQUN4QyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFIaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUlkLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUNoRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPZlNlbGVjdEJhc2VNb2RlbCwgT2ZTZWxlY3RCYXNlTW9kZWxDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvb2Ytc2VsZWN0LWJhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElPZlNlbGVjdE9wdGlvbkR0byB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9mU2VsZWN0QXBpTW9kZWxDb25maWcgZXh0ZW5kcyBPZlNlbGVjdEJhc2VNb2RlbENvbmZpZyB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJhbi10eXBlc1xyXG4gIGZ1bmN0aW9uU2VydmljZTogT2JzZXJ2YWJsZTxJT2ZTZWxlY3RPcHRpb25EdG9bXT47XHJcbiAga2V5Q2FjaGU6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBPZlNlbGVjdEFwaU1vZGVsIGV4dGVuZHMgT2ZTZWxlY3RCYXNlTW9kZWwge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpiYW4tdHlwZXNcclxuICBmdW5jdGlvblNlcnZpY2U6IE9ic2VydmFibGU8SU9mU2VsZWN0T3B0aW9uRHRvW10+O1xyXG4gIGtleUNhY2hlOiBzdHJpbmc7XHJcbiAgZGF0YUV4dGVuZCA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE9mU2VsZWN0QXBpTW9kZWxDb25maWcpIHtcclxuICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICB0aGlzLnR5cGUgPSAnc2VsZWN0QXBpJztcclxuICAgIHRoaXMuZnVuY3Rpb25TZXJ2aWNlID0gY29uZmlnLmZ1bmN0aW9uU2VydmljZTtcclxuICB9XHJcbn1cclxuIl19