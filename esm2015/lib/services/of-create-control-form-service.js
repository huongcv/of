import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { FormBuilder, Validators } from '@angular/forms';
import { OfValidatorService } from './of-validator.service';
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
OfCreateControlFormService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OfCreateControlFormService_Factory() { return new OfCreateControlFormService(i0.ɵɵinject(i1.FormBuilder), i0.ɵɵinject(i2.OfValidatorService)); }, token: OfCreateControlFormService, providedIn: "root" });
OfCreateControlFormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OfCreateControlFormService.ctorParameters = () => [
    { type: FormBuilder },
    { type: OfValidatorService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY3JlYXRlLWNvbnRyb2wtZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9zZXJ2aWNlcy9vZi1jcmVhdGUtY29udHJvbC1mb3JtLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSzVELE1BQU0sT0FBTywwQkFBMEI7SUFFckMsWUFBb0IsRUFBZSxFQUNmLGdCQUFvQztRQURwQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtJQUN4RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQXdCO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBZ0IsRUFBRSxRQUFnQztRQUNwRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQTJCLEVBQUUsRUFBRTtZQUNsRCxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxJQUFJLENB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ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPZkNvbnRyb2xNb2RlbCwgT2ZFeHRlbmRDb250cm9sTW9kZWwsIE9mVHlwZSB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE9mVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4vb2YtdmFsaWRhdG9yLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZDcmVhdGVDb250cm9sRm9ybVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIHZhbGlkYXRvclNlcnZpY2U6IE9mVmFsaWRhdG9yU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29udHJvbChmaWVsZHM6IE9mQ29udHJvbE1vZGVsW10pOiBGb3JtR3JvdXAge1xyXG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcclxuICAgIF8uZm9yRWFjaChmaWVsZHMsIChmaWVsZDogT2ZDb250cm9sTW9kZWwpID0+IHtcclxuICAgICAgdGhpcy5jcmVhdGVGaWVsZChmaWVsZCwgZ3JvdXApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZ3JvdXA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFeHRlbmRDb250cm9sKGdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2xzOiBPZkV4dGVuZENvbnRyb2xNb2RlbFtdKSB7XHJcbiAgICBfLmZvckVhY2goY29udHJvbHMsIChmaWVsZDogT2ZFeHRlbmRDb250cm9sTW9kZWwpID0+IHtcclxuICAgICAgY29uc3QgZiA9IGdyb3VwLmdldChmaWVsZC5kYXRhRmllbGQpO1xyXG4gICAgICBpZiAoZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRpb25zKGZpZWxkKTtcclxuICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuZmIuY29udHJvbChcclxuICAgICAgICBmaWVsZC52YWx1ZSxcclxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9ucyhmaWVsZClcclxuICAgICAgKTtcclxuICAgICAgaWYgKGZpZWxkLmRpc2FibGVkKSB7XHJcbiAgICAgICAgY29udHJvbC5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZ3JvdXAuYWRkQ29udHJvbChmaWVsZC5kYXRhRmllbGQsIGNvbnRyb2wpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29udHJvbChmaWVsZHM6IE9mQ29udHJvbE1vZGVsW10sIGdyb3VwOiBGb3JtR3JvdXApOiB2b2lkIHtcclxuICAgIE9iamVjdC5rZXlzKGdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IGZEYXRhRmllbGQgPSBmaWVsZHMuZmluZCh4ID0+IHguZGF0YUZpZWxkID09PSBrZXkpO1xyXG4gICAgICBpZiAoIWZEYXRhRmllbGQpIHtcclxuICAgICAgICBncm91cC5yZW1vdmVDb250cm9sKGtleSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXy5mb3JFYWNoKGZpZWxkcywgKGZpZWxkOiBPZkNvbnRyb2xNb2RlbCkgPT4ge1xyXG4gICAgICBjb25zdCBmID0gZ3JvdXAuZ2V0KGZpZWxkLmRhdGFGaWVsZCk7XHJcbiAgICAgIGlmIChmKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3JlYXRlRmllbGQoZmllbGQsIGdyb3VwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVGaWVsZChmaWVsZDogT2ZDb250cm9sTW9kZWwsIGdyb3VwOiBGb3JtR3JvdXApIHtcclxuICAgIGNvbnN0IGlnbm9yZVR5cGU6IE9mVHlwZVtdID0gWydjb250ZW50SHRtbCcsICdjb21wb25lbnRSZWYnLCAndGVtcGxhdGVSZWYnXTtcclxuICAgIGlmIChpZ25vcmVUeXBlLmluZGV4T2YoZmllbGQudHlwZSkgPiAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY3JlYXRlVmFsaWRhdGlvbnMoZmllbGQpO1xyXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZmIuY29udHJvbChcclxuICAgICAgZmllbGQudmFsdWUsXHJcbiAgICAgIHRoaXMuYmluZFZhbGlkYXRpb25zKGZpZWxkKVxyXG4gICAgKTtcclxuICAgIGlmIChmaWVsZC5kaXNhYmxlZCkge1xyXG4gICAgICBjb250cm9sLmRpc2FibGUoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGdyb3VwLmFkZENvbnRyb2woZmllbGQuZGF0YUZpZWxkLCBjb250cm9sKTtcclxuICB9XHJcblxyXG5cclxuICBjcmVhdGVWYWxpZGF0aW9ucyhmaWVsZDogT2ZDb250cm9sTW9kZWwgfCBPZkV4dGVuZENvbnRyb2xNb2RlbCkge1xyXG4gICAgZmllbGQudmFsaWRhdGlvbnMgPSBmaWVsZC52YWxpZGF0aW9ucyB8fCBbXTtcclxuICAgIGZpZWxkLnZhbGlkYXRpb25zLmZvckVhY2godmFsaWQgPT4ge1xyXG4gICAgICBpZiAodmFsaWQubmFtZSA9PT0gJ2VtYWlsJykge1xyXG4gICAgICAgIHZhbGlkLnZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yU2VydmljZS5lbWFpbFZhbGlkYXRvcjtcclxuICAgICAgICB2YWxpZC5tZXNzYWdlID0gdmFsaWQubWVzc2FnZSB8fCAnRW1haWwgc2FpIMSR4buLbmggZOG6oW5nISc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWxpZC5uYW1lID09PSAncGhvbmUnKSB7XHJcbiAgICAgICAgdmFsaWQudmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JTZXJ2aWNlLnBob25lVmFsaWRhdG9yO1xyXG4gICAgICAgIHZhbGlkLm1lc3NhZ2UgPSB2YWxpZC5tZXNzYWdlIHx8ICdT4buRIMSRaeG7h24gdGhv4bqhaSBraMO0bmcgxJHDum5nIMSR4buLbmggZOG6oW5nISc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWxpZC5uYW1lID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgdmFsaWQudmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JTZXJ2aWNlLnBhc3N3b3JkVmFsaWRhdG9yO1xyXG4gICAgICAgIHZhbGlkLm1lc3NhZ2UgPSB2YWxpZC5tZXNzYWdlIHx8ICdN4bqtdCBraOG6qXUgdOG7kWkgdGhp4buDdSA4IGvDvSB04buxLCBiYW8gZ+G7k20gY2jhu68gaW4gaG9hLyB0aMaw4budbmcgLCBz4buRIHbDoCBrw70gdOG7sSDEkeG6t2MgYmnhu4d0ISc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChmaWVsZC5yZXF1aXJlZCkge1xyXG4gICAgICBmaWVsZC52YWxpZGF0aW9ucy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAnd2hpdGVTcGFjZScsXHJcbiAgICAgICAgdmFsaWRhdG9yOiB0aGlzLnZhbGlkYXRvclNlcnZpY2Uubm9XaGl0ZXNwYWNlVmFsaWRhdG9yLFxyXG4gICAgICAgIG1lc3NhZ2U6IGZpZWxkLmVycm9yRW1wdHlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kVmFsaWRhdGlvbnMoZmllbGQ6IE9mQ29udHJvbE1vZGVsIHwgT2ZFeHRlbmRDb250cm9sTW9kZWwpIHtcclxuICAgIGNvbnN0IHZhbGlkYXRpb25zID0gZmllbGQudmFsaWRhdGlvbnMgfHwgW107XHJcbiAgICBpZiAodmFsaWRhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCB2YWxpZExpc3QgPSBbXTtcclxuICAgICAgdmFsaWRhdGlvbnMuZm9yRWFjaCh2YWxpZCA9PiB7XHJcbiAgICAgICAgdmFsaWRMaXN0LnB1c2godmFsaWQudmFsaWRhdG9yKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UodmFsaWRMaXN0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=