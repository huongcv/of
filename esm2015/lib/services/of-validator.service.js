import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { AppUtilityService } from './app-utility-service';
import * as i0 from "@angular/core";
export class OfValidatorService {
    constructor() {
    }
    noWhitespaceValidator(control) {
        if (AppUtilityService.isNullOrEmpty(control.value)) {
            return { whiteSpace: true };
        }
        const v = '' + control.value;
        const isWhitespace = v.trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { whiteSpace: true };
    }
    emailValidator(control) {
        const value = (control === null || control === void 0 ? void 0 : control.value) || '';
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(value);
        return isValid ? null : { email: true };
    }
    passwordValidator(control) {
        const value = (control === null || control === void 0 ? void 0 : control.value) || '';
        const check = value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/);
        const isValid = !!check;
        return isValid ? null : { password: true };
    }
    phoneValidator(control) {
        const value = (control === null || control === void 0 ? void 0 : control.value) || '';
        const check = value.match(/(09|01[2|6|8|9])+([0-9]{8})\b/);
        const isValid = !!check;
        return isValid ? null : { phone: true };
    }
    focusControlItem(id) {
        const arr = $('#' + id).find('.ord-form-control');
        let flag = true;
        arr.each(function () {
            let txt = $(this).find('.form-control-err').text();
            if (txt) {
                txt = txt.replace(/ /g, '');
            }
            if (flag && AppUtilityService.isNotNull(txt)) {
                $(this).find('.ord-dynamic-input').focus();
                $(this).find('.ant-input-number-input').focus();
                $(this).find('.ant-input').focus();
                $(this).find('.ant-select-selection-search-input').focus();
                if ($(this).find('.ant-radio-input')[0]) {
                    $(this).find('.ant-radio-input')[0].focus();
                }
                flag = false;
            }
        });
    }
    focusFirst(id) {
        const arr = $('#' + id).find('.ord-form-control');
        let flag = true;
        arr.each(function () {
            if (flag) {
                $(this).find('.ord-dynamic-input').focus();
                $(this).find('.ant-input-number-input').focus();
                $(this).find('.ant-input').focus();
                $(this).find('.ant-select-selection-search-input').focus();
                if ($(this).find('.ant-radio-input')[0]) {
                    $(this).find('.ant-radio-input')[0].focus();
                }
                flag = false;
            }
        });
    }
}
OfValidatorService.ɵfac = function OfValidatorService_Factory(t) { return new (t || OfValidatorService)(); };
OfValidatorService.ɵprov = i0.ɵɵdefineInjectable({ token: OfValidatorService, factory: OfValidatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfValidatorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtdmFsaWRhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL3NlcnZpY2VzL29mLXZhbGlkYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBSzFELE1BQU0sT0FBTyxrQkFBa0I7SUFFN0I7SUFDQSxDQUFDO0lBRU0scUJBQXFCLENBQUMsT0FBb0I7UUFDL0MsSUFBSSxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDN0I7UUFDRCxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3QixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQztRQUM5QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU0sY0FBYyxDQUFDLE9BQW9CO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEtBQUssS0FBSSxFQUFFLENBQUM7UUFDbkMsTUFBTSxFQUFFLEdBQUcseUpBQXlKLENBQUM7UUFDckssTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixPQUFPLE9B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QUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUM3QztnQkFDRCxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O29GQXpFVSxrQkFBa0I7MERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmpCLE1BQU07a0RBRVAsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgQXBwVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuL2FwcC11dGlsaXR5LXNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZWYWxpZGF0b3JTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm9XaGl0ZXNwYWNlVmFsaWRhdG9yKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eShjb250cm9sLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4geyB3aGl0ZVNwYWNlOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCB2ID0gJycgKyBjb250cm9sLnZhbHVlO1xyXG4gICAgY29uc3QgaXNXaGl0ZXNwYWNlID0gdi50cmltKCkubGVuZ3RoID09PSAwO1xyXG4gICAgY29uc3QgaXNWYWxpZCA9ICFpc1doaXRlc3BhY2U7XHJcbiAgICByZXR1cm4gaXNWYWxpZCA/IG51bGwgOiB7IHdoaXRlU3BhY2U6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbWFpbFZhbGlkYXRvcihjb250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250cm9sPy52YWx1ZSB8fCAnJztcclxuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIGNvbnN0IGlzVmFsaWQgPSByZS50ZXN0KHZhbHVlKTtcclxuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IHsgZW1haWw6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYXNzd29yZFZhbGlkYXRvcihjb250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250cm9sPy52YWx1ZSB8fCAnJztcclxuICAgIGNvbnN0IGNoZWNrID0gdmFsdWUubWF0Y2goL14oPz0uKltBLVphLXpdKSg/PS4qXFxkKVtBLVphLXpcXGRAJCElKiM/Jl17OCx9JC8pO1xyXG4gICAgY29uc3QgaXNWYWxpZCA9ICEhY2hlY2s7XHJcbiAgICByZXR1cm4gaXNWYWxpZCA/IG51bGwgOiB7IHBhc3N3b3JkOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGhvbmVWYWxpZGF0b3IoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gY29udHJvbD8udmFsdWUgfHwgJyc7XHJcbiAgICBjb25zdCBjaGVjayA9IHZhbHVlLm1hdGNoKC8oMDl8MDFbMnw2fDh8OV0pKyhbMC05XXs4fSlcXGIvKTtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSAhIWNoZWNrO1xyXG4gICAgcmV0dXJuIGlzVmFsaWQgPyBudWxsIDogeyBwaG9uZTogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgZm9jdXNDb250cm9sSXRlbShpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBhcnIgPSAkKCcjJyArIGlkKS5maW5kKCcub3JkLWZvcm0tY29udHJvbCcpO1xyXG4gICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgYXJyLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCB0eHQgPSAkKHRoaXMpLmZpbmQoJy5mb3JtLWNvbnRyb2wtZXJyJykudGV4dCgpO1xyXG4gICAgICBpZiAodHh0KSB7XHJcbiAgICAgICAgdHh0ID0gdHh0LnJlcGxhY2UoLyAvZywgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmbGFnICYmIEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90TnVsbCh0eHQpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcub3JkLWR5bmFtaWMtaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmFudC1pbnB1dC1udW1iZXItaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmFudC1pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCcuYW50LXJhZGlvLWlucHV0JylbMF0pIHtcclxuICAgICAgICAgICQodGhpcykuZmluZCgnLmFudC1yYWRpby1pbnB1dCcpWzBdLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZm9jdXNGaXJzdChpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBhcnIgPSAkKCcjJyArIGlkKS5maW5kKCcub3JkLWZvcm0tY29udHJvbCcpO1xyXG4gICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgYXJyLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcub3JkLWR5bmFtaWMtaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmFudC1pbnB1dC1udW1iZXItaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmFudC1pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCcuYW50LXJhZGlvLWlucHV0JylbMF0pIHtcclxuICAgICAgICAgICQodGhpcykuZmluZCgnLmFudC1yYWRpby1pbnB1dCcpWzBdLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==