import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
export class AppUtilityService {
    constructor() {
    }
    static isNullOrEmpty(input) {
        return typeof input === 'undefined' || input === null || input === '';
        // return !(typeof input !== 'undefined' && input && input !== '' && input !== null);
    }
    static isNotNull(input) {
        return !this.isNullOrEmpty(input);
    }
    static getFullTextSearch(str) {
        if (this.isNullOrEmpty(str)) {
            return str;
        }
        str += '';
        str = this.removeDau(str);
        str = str.replace(/\s\s+/g, ' ');
        return str;
    }
    static removeDau(str) {
        if (this.isNullOrEmpty(str)) {
            return str;
        }
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
        str = str.replace(/ + /g, ' ');
        str = str.trim();
        return str;
    }
    static isNotAnyItem(input) {
        return this.isNullOrEmpty(input) || input.length === 0;
    }
    static isWhitespace(value) {
        return (value || '').trim().length === 0;
    }
    static searchVietTat(str) {
        if (this.isNullOrEmpty(str)) {
            return str;
        }
        let ret = '';
        const spl = str.split(' ');
        if (this.isNotAnyItem(spl) === false) {
            spl.forEach((s) => {
                if (s.length > 0) {
                    ret = ret + s[0];
                }
            });
        }
        return this.getFullTextSearch(_.cloneDeep(ret));
    }
}
AppUtilityService.ɵfac = function AppUtilityService_Factory(t) { return new (t || AppUtilityService)(); };
AppUtilityService.ɵprov = i0.ɵɵdefineInjectable({ token: AppUtilityService, factory: AppUtilityService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppUtilityService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXV0aWxpdHktc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvc2VydmljZXMvYXBwLXV0aWxpdHktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUc1QixNQUFNLE9BQU8saUJBQWlCO0lBQzVCO0lBQ0EsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBVTtRQUM3QixPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUM7UUFDdEUscUZBQXFGO0lBQ3ZGLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQVU7UUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHO1FBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzQixPQUFPLEdBQUcsQ0FBQztTQUNaO1FBQ0QsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNWLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQVc7UUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLHdGQUF3RixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pILEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQixHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSztRQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBYTtRQUMvQixPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRztRQUN0QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNwQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2hCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNsQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7a0ZBL0RVLGlCQUFpQjt5REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcFV0aWxpdHlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc051bGxPckVtcHR5KGlucHV0OiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICd1bmRlZmluZWQnIHx8IGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSAnJztcclxuICAgIC8vIHJldHVybiAhKHR5cGVvZiBpbnB1dCAhPT0gJ3VuZGVmaW5lZCcgJiYgaW5wdXQgJiYgaW5wdXQgIT09ICcnICYmIGlucHV0ICE9PSBudWxsKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc05vdE51bGwoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbE9yRW1wdHkoaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEZ1bGxUZXh0U2VhcmNoKHN0cikge1xyXG4gICAgaWYgKHRoaXMuaXNOdWxsT3JFbXB0eShzdHIpKSB7XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgICBzdHIgKz0gJyc7XHJcbiAgICBzdHIgPSB0aGlzLnJlbW92ZURhdShzdHIpO1xyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlRGF1KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmlzTnVsbE9yRW1wdHkoc3RyKSkge1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvw6B8w6F84bqhfOG6o3zDo3zDonzhuqd84bqlfOG6rXzhuql84bqrfMSDfOG6sXzhuq984bq3fOG6s3zhurUvZywgJ2EnKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC/DqHzDqXzhurl84bq7fOG6vXzDqnzhu4F84bq/fOG7h3zhu4N84buFL2csICdlJyk7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvw6x8w6184buLfOG7iXzEqS9nLCAnaScpO1xyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL8OyfMOzfOG7jXzhu498w7V8w7R84buTfOG7kXzhu5l84buVfOG7l3zGoXzhu5184bubfOG7o3zhu5984buhL2csICdvJyk7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvw7l8w7p84bulfOG7p3zFqXzGsHzhu6t84bupfOG7sXzhu6184buvL2csICd1Jyk7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgv4buzfMO9fOG7tXzhu7d84bu5L2csICd5Jyk7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvxJEvZywgJ2QnKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8hfEB8JXxcXF58XFwqfFxcKHxcXCl8XFwrfFxcPXxcXDx8XFw+fFxcP3xcXC98LHxcXC58XFw6fFxcO3xcXCd8XFxcInxcXCZ8XFwjfFxcW3xcXF18fnxcXCR8X3xgfC18e3x9fFxcfHxcXFxcL2csICcgJyk7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvICsgL2csICcgJyk7XHJcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc05vdEFueUl0ZW0oaW5wdXQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzTnVsbE9yRW1wdHkoaW5wdXQpIHx8IGlucHV0Lmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc1doaXRlc3BhY2UodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSB8fCAnJykudHJpbSgpLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZWFyY2hWaWV0VGF0KHN0cikge1xyXG4gICAgaWYgKHRoaXMuaXNOdWxsT3JFbXB0eShzdHIpKSB7XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgICBsZXQgcmV0ID0gJyc7XHJcbiAgICBjb25zdCBzcGwgPSBzdHIuc3BsaXQoJyAnKTtcclxuICAgIGlmICh0aGlzLmlzTm90QW55SXRlbShzcGwpID09PSBmYWxzZSkge1xyXG4gICAgICBzcGwuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgIGlmIChzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHJldCA9IHJldCArIHNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmdldEZ1bGxUZXh0U2VhcmNoKF8uY2xvbmVEZWVwKHJldCkpO1xyXG4gIH1cclxufVxyXG4iXX0=