import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./of-validator.service";
export class OfCreateControlFormService {
    constructor(fb, validatorService) {
        this.fb = fb;
        this.validatorService = validatorService;
    }
    createControl(fields) {
        const group = this.fb.group({});
        _.forEach(fields, (field) => {
            this.createField(field, group);
        });
        return group;
    }
    createExtendControl(group, controls) {
        _.forEach(controls, (field) => {
            const f = group.get(field.dataField);
            if (f) {
                return;
            }
            this.createValidations(field);
            const control = this.fb.control(field.value, this.bindValidations(field));
            if (field.disabled) {
                control.disable({ onlySelf: true });
            }
            group.addControl(field.dataField, control);
        });
    }
    updateControl(fields, group) {
        Object.keys(group.controls).forEach(key => {
            const fDataField = fields.find(x => x.dataField === key);
            if (!fDataField) {
                group.removeControl(key);
            }
        });
        _.forEach(fields, (field) => {
            const f = group.get(field.dataField);
            if (f) {
                return;
            }
            this.createField(field, group);
        });
    }
    createField(field, group) {
        const ignoreType = ['contentHtml', 'componentRef', 'templateRef'];
        if (ignoreType.indexOf(field.type) > 0) {
            return;
        }
        this.createValidations(field);
        const control = this.fb.control(field.value, this.bindValidations(field));
        if (field.disabled) {
            control.disable({ onlySelf: true });
        }
        group.addControl(field.dataField, control);
    }
    createValidations(field) {
        field.validations = field.validations || [];
        field.validations.forEach(valid => {
            if (valid.name === 'email') {
                valid.validator = this.validatorService.emailValidator;
                valid.message = valid.message || 'Email sai định dạng!';
                return;
            }
            if (valid.name === 'phone') {
                valid.validator = this.validatorService.phoneValidator;
                valid.message = valid.message || 'Số điện thoại không đúng định dạng!';
                return;
            }
            if (valid.name === 'password') {
                valid.validator = this.validatorService.passwordValidator;
                valid.message = valid.message || 'Mật khẩu tối thiểu 8 ký tự, bao gồm chữ in hoa/ thường , số và ký tự đặc biệt!';
                return;
            }
        });
        if (field.required) {
            field.validations.push({
                name: 'whiteSpace',
                validator: this.validatorService.noWhitespaceValidator,
                message: field.errorEmpty
            });
        }
    }
    bindValidations(field) {
        const validations = field.validations || [];
        if (validations.length > 0) {
            const validList = [];
            validations.forEach(valid => {
                validList.push(valid.validator);
            });
            return Validators.compose(validList);
        }
        return null;
    }
}
OfCreateControlFormService.ɵfac = function OfCreateControlFormService_Factory(t) { return new (t || OfCreateControlFormService)(i0.ɵɵinject(i1.FormBuilder), i0.ɵɵinject(i2.OfValidatorService)); };
OfCreateControlFormService.ɵprov = i0.ɵɵdefineInjectable({ token: OfCreateControlFormService, factory: OfCreateControlFormService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfCreateControlFormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OfValidatorService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY3JlYXRlLWNvbnRyb2wtZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9zZXJ2aWNlcy9vZi1jcmVhdGUtY29udHJvbC1mb3JtLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBT3BFLE1BQU0sT0FBTywwQkFBMEI7SUFFckMsWUFBb0IsRUFBZSxFQUNmLGdCQUFvQztRQURwQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtJQUN4RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQXdCO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBZ0IsRUFBRSxRQUFnQztRQUNwRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQTJCLEVBQUUsRUFBRTtZQUNsRCxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsRUFBRTtnQkFDTCxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQzdCLEtBQUssQ0FBQyxLQUFLLEVBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FDNUIsQ0FBQztZQUNGLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUF3QixFQUFFLEtBQWdCO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxFQUFFO2dCQUNMLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFxQixFQUFFLEtBQWdCO1FBQ3pELE1BQU0sVUFBVSxHQUFhLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM1RSxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQzdCLEtBQUssQ0FBQyxLQUFLLEVBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FDNUIsQ0FBQztRQUNGLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDckM7UUFDRCxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdELGlCQUFpQixDQUFDLEtBQTRDO1FBQzVELEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDNUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDMUIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO2dCQUN2RCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksc0JBQXNCLENBQUM7Z0JBQ3hELE9BQU87YUFDUjtZQUNELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQzFCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztnQkFDdkQsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLHFDQUFxQyxDQUFDO2dCQUN2RSxPQUFPO2FBQ1I7WUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUM3QixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDMUQsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLGdGQUFnRixDQUFDO2dCQUNsSCxPQUFPO2FBQ1I7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNsQixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDckIsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCO2dCQUN0RCxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVU7YUFDMUIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQTRDO1FBQzFELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztvR0F4R1UsMEJBQTBCO2tFQUExQiwwQkFBMEIsV0FBMUIsMEJBQTBCLG1CQUZ6QixNQUFNO2tEQUVQLDBCQUEwQjtjQUh0QyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2ZDb250cm9sTW9kZWwsIE9mRXh0ZW5kQ29udHJvbE1vZGVsLCBPZlR5cGUgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBPZlZhbGlkYXRvclNlcnZpY2UgfSBmcm9tICcuL29mLXZhbGlkYXRvci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9mQ3JlYXRlQ29udHJvbEZvcm1TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBPZlZhbGlkYXRvclNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbnRyb2woZmllbGRzOiBPZkNvbnRyb2xNb2RlbFtdKTogRm9ybUdyb3VwIHtcclxuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XHJcbiAgICBfLmZvckVhY2goZmllbGRzLCAoZmllbGQ6IE9mQ29udHJvbE1vZGVsKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRmllbGQoZmllbGQsIGdyb3VwKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGdyb3VwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRXh0ZW5kQ29udHJvbChncm91cDogRm9ybUdyb3VwLCBjb250cm9sczogT2ZFeHRlbmRDb250cm9sTW9kZWxbXSkge1xyXG4gICAgXy5mb3JFYWNoKGNvbnRyb2xzLCAoZmllbGQ6IE9mRXh0ZW5kQ29udHJvbE1vZGVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IGYgPSBncm91cC5nZXQoZmllbGQuZGF0YUZpZWxkKTtcclxuICAgICAgaWYgKGYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0aW9ucyhmaWVsZCk7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2woXHJcbiAgICAgICAgZmllbGQudmFsdWUsXHJcbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbnMoZmllbGQpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChmaWVsZC5kaXNhYmxlZCkge1xyXG4gICAgICAgIGNvbnRyb2wuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGdyb3VwLmFkZENvbnRyb2woZmllbGQuZGF0YUZpZWxkLCBjb250cm9sKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbnRyb2woZmllbGRzOiBPZkNvbnRyb2xNb2RlbFtdLCBncm91cDogRm9ybUdyb3VwKTogdm9pZCB7XHJcbiAgICBPYmplY3Qua2V5cyhncm91cC5jb250cm9scykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBjb25zdCBmRGF0YUZpZWxkID0gZmllbGRzLmZpbmQoeCA9PiB4LmRhdGFGaWVsZCA9PT0ga2V5KTtcclxuICAgICAgaWYgKCFmRGF0YUZpZWxkKSB7XHJcbiAgICAgICAgZ3JvdXAucmVtb3ZlQ29udHJvbChrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIF8uZm9yRWFjaChmaWVsZHMsIChmaWVsZDogT2ZDb250cm9sTW9kZWwpID0+IHtcclxuICAgICAgY29uc3QgZiA9IGdyb3VwLmdldChmaWVsZC5kYXRhRmllbGQpO1xyXG4gICAgICBpZiAoZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNyZWF0ZUZpZWxkKGZpZWxkLCBncm91cCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRmllbGQoZmllbGQ6IE9mQ29udHJvbE1vZGVsLCBncm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICBjb25zdCBpZ25vcmVUeXBlOiBPZlR5cGVbXSA9IFsnY29udGVudEh0bWwnLCAnY29tcG9uZW50UmVmJywgJ3RlbXBsYXRlUmVmJ107XHJcbiAgICBpZiAoaWdub3JlVHlwZS5pbmRleE9mKGZpZWxkLnR5cGUpID4gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNyZWF0ZVZhbGlkYXRpb25zKGZpZWxkKTtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2woXHJcbiAgICAgIGZpZWxkLnZhbHVlLFxyXG4gICAgICB0aGlzLmJpbmRWYWxpZGF0aW9ucyhmaWVsZClcclxuICAgICk7XHJcbiAgICBpZiAoZmllbGQuZGlzYWJsZWQpIHtcclxuICAgICAgY29udHJvbC5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBncm91cC5hZGRDb250cm9sKGZpZWxkLmRhdGFGaWVsZCwgY29udHJvbCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY3JlYXRlVmFsaWRhdGlvbnMoZmllbGQ6IE9mQ29udHJvbE1vZGVsIHwgT2ZFeHRlbmRDb250cm9sTW9kZWwpIHtcclxuICAgIGZpZWxkLnZhbGlkYXRpb25zID0gZmllbGQudmFsaWRhdGlvbnMgfHwgW107XHJcbiAgICBmaWVsZC52YWxpZGF0aW9ucy5mb3JFYWNoKHZhbGlkID0+IHtcclxuICAgICAgaWYgKHZhbGlkLm5hbWUgPT09ICdlbWFpbCcpIHtcclxuICAgICAgICB2YWxpZC52YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvclNlcnZpY2UuZW1haWxWYWxpZGF0b3I7XHJcbiAgICAgICAgdmFsaWQubWVzc2FnZSA9IHZhbGlkLm1lc3NhZ2UgfHwgJ0VtYWlsIHNhaSDEkeG7i25oIGThuqFuZyEnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsaWQubmFtZSA9PT0gJ3Bob25lJykge1xyXG4gICAgICAgIHZhbGlkLnZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yU2VydmljZS5waG9uZVZhbGlkYXRvcjtcclxuICAgICAgICB2YWxpZC5tZXNzYWdlID0gdmFsaWQubWVzc2FnZSB8fCAnU+G7kSDEkWnhu4duIHRob+G6oWkga2jDtG5nIMSRw7puZyDEkeG7i25oIGThuqFuZyEnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsaWQubmFtZSA9PT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgIHZhbGlkLnZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yU2VydmljZS5wYXNzd29yZFZhbGlkYXRvcjtcclxuICAgICAgICB2YWxpZC5tZXNzYWdlID0gdmFsaWQubWVzc2FnZSB8fCAnTeG6rXQga2jhuql1IHThu5FpIHRoaeG7g3UgOCBrw70gdOG7sSwgYmFvIGfhu5NtIGNo4buvIGluIGhvYS8gdGjGsOG7nW5nICwgc+G7kSB2w6Aga8O9IHThu7EgxJHhurdjIGJp4buHdCEnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZmllbGQucmVxdWlyZWQpIHtcclxuICAgICAgZmllbGQudmFsaWRhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ3doaXRlU3BhY2UnLFxyXG4gICAgICAgIHZhbGlkYXRvcjogdGhpcy52YWxpZGF0b3JTZXJ2aWNlLm5vV2hpdGVzcGFjZVZhbGlkYXRvcixcclxuICAgICAgICBtZXNzYWdlOiBmaWVsZC5lcnJvckVtcHR5XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZFZhbGlkYXRpb25zKGZpZWxkOiBPZkNvbnRyb2xNb2RlbCB8IE9mRXh0ZW5kQ29udHJvbE1vZGVsKSB7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9ucyA9IGZpZWxkLnZhbGlkYXRpb25zIHx8IFtdO1xyXG4gICAgaWYgKHZhbGlkYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgdmFsaWRMaXN0ID0gW107XHJcbiAgICAgIHZhbGlkYXRpb25zLmZvckVhY2godmFsaWQgPT4ge1xyXG4gICAgICAgIHZhbGlkTGlzdC5wdXNoKHZhbGlkLnZhbGlkYXRvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkTGlzdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl19