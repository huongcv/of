import { Component } from '@angular/core';
import { OfCheckBoxModel, OfContentHtmlModel, OfCurrencyModel, OfDateModel, OfExtendControlModel, OfNumberModel, OfPwdModel, OfRadioModel, OfSchemaModel, OfSelectSearchServerModel, OfSwitchModel, OfTemplateRefModel, OfTextAreaModel } from '../models';
import { OfTextModel } from './of-text/of-text.model';
import { BehaviorSubject } from 'rxjs';
import { OfSelectModel } from './of-select/of-select-model';
import { OfSelectAsyncModel } from './of-select-async/of-select-async-model';
import { OfSelectApiModel } from './of-select-api/of-select-api-model';
import { SelectoptionServiceProxy, SelectOptionType, SelectsearchserverServiceProxy, SelectSearchServerType } from '../services/danh-muc-service-proxies';
import { OfSelectCascadeModel } from './of-select-cascade/of-select-cascade-model';
import * as i0 from "@angular/core";
import * as i1 from "../services/danh-muc-service-proxies";
import * as i2 from "./of-dynamic/of-dynamic.component";
import * as i3 from "./of-template-ref/of-field.component";
import * as i4 from "@angular/forms";
import * as i5 from "ng-zorro-antd/input";
import * as i6 from "ng-zorro-antd/select";
import * as i7 from "@angular/common";
function OfComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 6);
    i0.ɵɵelementStart(1, "nz-input-group", 7);
    i0.ɵɵelementStart(2, "nz-select", 8);
    i0.ɵɵelement(3, "nz-option", 9);
    i0.ɵɵelement(4, "nz-option", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r3 = ctx.group;
    i0.ɵɵproperty("formGroup", group_r3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzLabel", "Option 1")("nzValue", "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzLabel", "Option 2")("nzValue", "2");
} }
export class OfComponent {
    constructor(selectSp, searchSp) {
        this.selectSp = selectSp;
        this.searchSp = searchSp;
        this.formDisable$ = new BehaviorSubject(false);
        this.ngaySinhMin$ = new BehaviorSubject(new Date(2021, 2, 27));
        this.danTocOption$ = new BehaviorSubject([{
                displayText: 'Kinh',
                value: '1'
            }, {
                displayText: 'Mông',
                value: '2'
            }]);
        this.schemaModel = new OfSchemaModel({
            fields: [
                new OfTextModel({
                    label: 'Mã',
                    dataField: 'ma',
                    required: true,
                    validations: [
                        {
                            name: 'email'
                        }
                    ],
                    disabled: true
                }),
                new OfTextModel({
                    label: 'Họ tên',
                    dataField: 'tenDayDu',
                    required: true,
                    disabledAsync: this.formDisable$
                }),
                new OfSelectModel({
                    label: 'Giới tính',
                    dataField: 'gioiTinhId',
                    value: 1,
                    options: [
                        { displayText: 'Nam', value: '1' },
                        { displayText: 'Nữ', value: '2' }
                    ]
                }),
                new OfSelectAsyncModel({
                    label: 'Dân tộc async',
                    dataField: 'danToc',
                    value: 1,
                    optionsAsync: this.danTocOption$
                }),
                new OfSelectApiModel({
                    label: 'Tỉnh',
                    dataField: 'tinhId',
                    functionService: this.selectSp.getoptions({
                        type: SelectOptionType.Tinh
                    }),
                    keyCache: 'tinh'
                }),
                new OfSelectCascadeModel({
                    label: 'Huyện',
                    dataField: 'huyenId',
                    cascadeField: 'tinhId',
                    functionService: (cascade) => {
                        return this.selectSp.getoptions({
                            type: SelectOptionType.Huyen,
                            cascader: cascade
                        });
                    },
                    renderOptionFunc: (opt) => {
                        if (opt) {
                            return opt.value + ' - ' + opt.displayText;
                        }
                        return '';
                    },
                    renderSelectedFunc: (opt) => {
                        if (opt) {
                            return `<b>${opt.value}</b>` + ' - ' + opt.displayText;
                        }
                        return '';
                    }
                }),
                new OfSelectCascadeModel({
                    label: 'Xã',
                    dataField: 'xaId',
                    cascadeField: 'huyenId',
                    functionService: (cascade) => {
                        return this.selectSp.getoptions({
                            type: SelectOptionType.Xa,
                            cascader: cascade
                        });
                    },
                    keyCache: 'xa'
                }),
                new OfSelectSearchServerModel({
                    label: 'Quận huyện search',
                    dataField: 'huyenSearchServerId',
                    functionService: (dto) => {
                        return this.searchSp.getoptions(Object.assign(Object.assign({}, dto), { type: SelectSearchServerType.Huyen }));
                    }
                }),
                new OfSelectSearchServerModel({
                    label: 'Quận huyện search showPagination',
                    dataField: 'huyenSearchServerId',
                    functionService: (dto) => {
                        return this.searchSp.getoptions(Object.assign(Object.assign({}, dto), { type: SelectSearchServerType.Huyen }));
                    },
                    showPagination: true
                }),
                new OfCheckBoxModel({
                    label: '',
                    dataField: 'checkBox',
                    checkBoxLabel: 'Check box',
                    disabledAsync: this.formDisable$
                }),
                new OfDateModel({
                    label: 'Ngày sinh',
                    dataField: 'ngaySinh',
                    required: true,
                    notGreaterThanCurrent: true,
                    minDateAsync: this.ngaySinhMin$,
                    disabledAsync: this.formDisable$
                }),
                new OfCurrencyModel({
                    label: 'Đơn giá',
                    dataField: 'donGia',
                    disabledAsync: this.formDisable$
                }),
                new OfContentHtmlModel({
                    label: ' ',
                    dataField: 'benhNhanId',
                    content: '<h3>content string html</h3>',
                    disabledAsync: this.formDisable$
                }),
                new OfTextAreaModel({
                    label: 'Ghi chú',
                    dataField: 'ghiChu',
                    rows: 2,
                    disabledAsync: this.formDisable$
                }),
                new OfNumberModel({
                    label: 'Số thứ tự',
                    dataField: 'soThuTu',
                    min: 10,
                    max: 100,
                    step: 2,
                    disabledAsync: this.formDisable$
                }),
                new OfNumberModel({
                    label: 'Điện thoại',
                    dataField: 'dienThoai',
                    onlyKeyNumber: true,
                    disabledAsync: this.formDisable$
                }),
                new OfPwdModel({
                    label: 'Mật khẩu',
                    dataField: 'matKhau',
                    disabledAsync: this.formDisable$,
                    validations: [
                        {
                            name: 'password'
                        }
                    ]
                }),
                new OfRadioModel({
                    label: 'Loại',
                    dataField: 'loai',
                    items: [{
                            label: 'Loại 1',
                            value: 1
                        }, {
                            label: 'Loại 2',
                            value: 2
                        }, {
                            label: 'Loại 3',
                            value: 3
                        }]
                }),
                new OfSwitchModel({
                    label: 'Switch',
                    dataField: 'switch',
                    yesText: 'Có'
                }),
                new OfTemplateRefModel({
                    label: 'templateRef',
                    dataField: 'templateRef',
                    controls: [
                        new OfExtendControlModel({
                            dataField: 'templateOpt',
                            value: '1'
                        }),
                        new OfExtendControlModel({
                            dataField: 'templateInput',
                            required: true
                        })
                    ]
                })
            ]
        });
        this.disable = false;
    }
    onClickDisable() {
        this.disable = !this.disable;
        this.schemaModel.disableAll(this.disable);
    }
    onClickSetValue() {
        this.schemaModel.patchValue({
            ngaySinh: new Date(2021, 2, 28),
            ma: Number(new Date()),
            ghiChu: Number(new Date()),
            huyenSearchServerId: '9361',
            tinhId: '867',
            huyenId: '531',
            xaId: '533'
        });
    }
    onClickAddControl() {
        this.schemaModel.addControls([
            new OfTextModel({
                label: 'Mã ' + Number(new Date()),
                dataField: 'ma' + Number(new Date()),
                required: true,
                validations: [
                    {
                        name: 'email'
                    }
                ],
                value: Number(new Date())
            })
        ], 0);
    }
}
OfComponent.ɵfac = function OfComponent_Factory(t) { return new (t || OfComponent)(i0.ɵɵdirectiveInject(i1.SelectoptionServiceProxy), i0.ɵɵdirectiveInject(i1.SelectsearchserverServiceProxy)); };
OfComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfComponent, selectors: [["lib-of"]], features: [i0.ɵɵProvidersFeature([SelectoptionServiceProxy, SelectsearchserverServiceProxy])], decls: 20, vars: 4, consts: [[1, "form-group"], [3, "schemaModel"], ["vcForm", ""], ["id", "templateRef"], ["control", ""], [1, "btn", "btn-primary", 3, "click"], [3, "formGroup"], ["nzCompact", ""], ["formControlName", "templateOpt", 2, "width", "50%"], [3, "nzLabel", "nzValue"], ["formControlName", "templateInput", "nz-input", "", "placeholder", "templateInput", 2, "width", "50%"]], template: function OfComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "of", 1, 2);
        i0.ɵɵelementStart(3, "of-field", 3);
        i0.ɵɵtemplate(4, OfComponent_ng_template_4_Template, 6, 5, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵelementStart(7, "button", 5);
        i0.ɵɵlistener("click", function OfComponent_Template_button_click_7_listener() { return ctx.onClickDisable(); });
        i0.ɵɵtext(8, "Disable");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 5);
        i0.ɵɵlistener("click", function OfComponent_Template_button_click_9_listener() { return ctx.onClickSetValue(); });
        i0.ɵɵtext(10, "Set value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 5);
        i0.ɵɵlistener("click", function OfComponent_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(2); return _r0.onSubmit(); });
        i0.ɵɵtext(12, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 5);
        i0.ɵɵlistener("click", function OfComponent_Template_button_click_13_listener() { return ctx.schemaModel.submitted = false; });
        i0.ɵɵtext(14, "Clear Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 5);
        i0.ɵɵlistener("click", function OfComponent_Template_button_click_15_listener() { return ctx.onClickAddControl(); });
        i0.ɵɵtext(16, "AddControl");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "pre");
        i0.ɵɵtext(18);
        i0.ɵɵpipe(19, "json");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("schemaModel", ctx.schemaModel);
        i0.ɵɵadvance(17);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(19, 2, _r0.value));
    } }, directives: [i2.OfDynamicComponent, i3.OfFieldComponent, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i4.FormGroupDirective, i5.NzInputGroupComponent, i6.NzSelectComponent, i4.NgControlStatus, i4.FormControlName, i6.NzOptionComponent, i4.DefaultValueAccessor, i5.NzInputDirective], pipes: [i7.JsonPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfComponent, [{
        type: Component,
        args: [{
                selector: 'lib-of',
                template: `
      <div class="form-group">
          <of #vcForm [schemaModel]="schemaModel">
              <of-field id="templateRef">
                  <ng-template #control let-group="group">
                      <form [formGroup]="group">
                          <nz-input-group nzCompact>
                              <nz-select formControlName="templateOpt" style="width: 50%">
                                  <nz-option [nzLabel]="'Option 1'" [nzValue]="'1'"></nz-option>
                                  <nz-option [nzLabel]="'Option 2'" [nzValue]="'2'"></nz-option>
                              </nz-select>
                              <input formControlName="templateInput" nz-input placeholder="templateInput"
                                     style="width: 50%"/>
                          </nz-input-group>
                      </form>
                  </ng-template>
              </of-field>
          </of>
      </div>
      <div>
          <button class="btn btn-primary" (click)="onClickDisable()">Disable</button>
          <button class="btn btn-primary" (click)="onClickSetValue()">Set value</button>
          <button class="btn btn-primary" (click)="vcForm.onSubmit()">Submit</button>
          <button class="btn btn-primary" (click)="schemaModel.submitted = false">Clear Submit</button>
          <button class="btn btn-primary" (click)="onClickAddControl()">AddControl</button>
      </div>
      <pre>{{vcForm.value|json}}</pre>

  `,
                styles: [],
                providers: [SelectoptionServiceProxy, SelectsearchserverServiceProxy]
            }]
    }], function () { return [{ type: i1.SelectoptionServiceProxy }, { type: i1.SelectsearchserverServiceProxy }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFDZSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFDckYsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQzdELGFBQWEsRUFDYix5QkFBeUIsRUFBRSxhQUFhLEVBQ3hDLGtCQUFrQixFQUFFLGVBQWUsRUFDcEMsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLDhCQUE4QixFQUM5QixzQkFBc0IsRUFDdkIsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7OztJQVM3RCwrQkFDSTtJQUFBLHlDQUNJO0lBQUEsb0NBQ0k7SUFBQSwrQkFBOEQ7SUFDOUQsK0JBQThEO0lBQ2xFLGlCQUFZO0lBQ1osNEJBRUo7SUFBQSxpQkFBaUI7SUFDckIsaUJBQU87OztJQVRELG9DQUFtQjtJQUdGLGVBQXNCO0lBQXRCLG9DQUFzQixnQkFBQTtJQUN0QixlQUFzQjtJQUF0QixvQ0FBc0IsZ0JB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Q0FBMkQ7UUFBM0Isd0ZBQVMsb0JBQWdCLElBQUM7UUFBQyx1QkFBTztRQUFBLGlCQUFTO1FBQzNFLGlDQUE0RDtRQUE1Qix3RkFBUyxxQkFBaUIsSUFBQztRQUFDLDBCQUFTO1FBQUEsaUJBQVM7UUFDOUUsa0NBQTREO1FBQTVCLCtJQUFTLGNBQWlCLElBQUM7UUFBQyx1QkFBTTtRQUFBLGlCQUFTO1FBQzNFLGtDQUF3RTtRQUF4QyxxSEFBaUMsS0FBSyxJQUFDO1FBQUMsNkJBQVk7UUFBQSxpQkFBUztRQUM3RixrQ0FBOEQ7UUFBOUIseUZBQVMsdUJBQW1CLElBQUM7UUFBQywyQkFBVTtRQUFBLGlCQUFTO1FBQ3JGLGlCQUFNO1FBQ04sNEJBQUs7UUFBQSxhQUFxQjs7UUFBQSxpQkFBTTs7O1FBeEJoQixlQUEyQjtRQUEzQiw2Q0FBMkI7UUF3QnRDLGdCQUFxQjtRQUFyQixzREFBcUI7O2tEQU1uQixXQUFXO2NBbEN2QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTtnQkFDVixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQzthQUN0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIElPZlNlbGVjdE9wdGlvbkR0bywgT2ZDaGVja0JveE1vZGVsLCBPZkNvbnRlbnRIdG1sTW9kZWwsIE9mQ3VycmVuY3lNb2RlbCwgT2ZEYXRlTW9kZWwsXHJcbiAgT2ZFeHRlbmRDb250cm9sTW9kZWwsIE9mTnVtYmVyTW9kZWwsIE9mUHdkTW9kZWwsIE9mUmFkaW9Nb2RlbCxcclxuICBPZlNjaGVtYU1vZGVsLFxyXG4gIE9mU2VsZWN0U2VhcmNoU2VydmVyTW9kZWwsIE9mU3dpdGNoTW9kZWwsXHJcbiAgT2ZUZW1wbGF0ZVJlZk1vZGVsLCBPZlRleHRBcmVhTW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBPZlRleHRNb2RlbCB9IGZyb20gJy4vb2YtdGV4dC9vZi10ZXh0Lm1vZGVsJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9mU2VsZWN0TW9kZWwgfSBmcm9tICcuL29mLXNlbGVjdC9vZi1zZWxlY3QtbW9kZWwnO1xyXG5pbXBvcnQgeyBPZlNlbGVjdEFzeW5jTW9kZWwgfSBmcm9tICcuL29mLXNlbGVjdC1hc3luYy9vZi1zZWxlY3QtYXN5bmMtbW9kZWwnO1xyXG5pbXBvcnQgeyBPZlNlbGVjdEFwaU1vZGVsIH0gZnJvbSAnLi9vZi1zZWxlY3QtYXBpL29mLXNlbGVjdC1hcGktbW9kZWwnO1xyXG5pbXBvcnQge1xyXG4gIFNlbGVjdG9wdGlvblNlcnZpY2VQcm94eSxcclxuICBTZWxlY3RPcHRpb25UeXBlLFxyXG4gIFNlbGVjdHNlYXJjaHNlcnZlclNlcnZpY2VQcm94eSxcclxuICBTZWxlY3RTZWFyY2hTZXJ2ZXJUeXBlXHJcbn0gZnJvbSAnLi4vc2VydmljZXMvZGFuaC1tdWMtc2VydmljZS1wcm94aWVzJztcclxuaW1wb3J0IHsgT2ZTZWxlY3RDYXNjYWRlTW9kZWwgfSBmcm9tICcuL29mLXNlbGVjdC1jYXNjYWRlL29mLXNlbGVjdC1jYXNjYWRlLW1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW9mJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPG9mICN2Y0Zvcm0gW3NjaGVtYU1vZGVsXT1cInNjaGVtYU1vZGVsXCI+XHJcbiAgICAgICAgICAgICAgPG9mLWZpZWxkIGlkPVwidGVtcGxhdGVSZWZcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjb250cm9sIGxldC1ncm91cD1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG56LWlucHV0LWdyb3VwIG56Q29tcGFjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG56LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJ0ZW1wbGF0ZU9wdFwiIHN0eWxlPVwid2lkdGg6IDUwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG56LW9wdGlvbiBbbnpMYWJlbF09XCInT3B0aW9uIDEnXCIgW256VmFsdWVdPVwiJzEnXCI+PC9uei1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bnotb3B0aW9uIFtuekxhYmVsXT1cIidPcHRpb24gMidcIiBbbnpWYWx1ZV09XCInMidcIj48L256LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uei1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ0ZW1wbGF0ZUlucHV0XCIgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJ0ZW1wbGF0ZUlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDUwJVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L256LWlucHV0LWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDwvb2YtZmllbGQ+XHJcbiAgICAgICAgICA8L29mPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25DbGlja0Rpc2FibGUoKVwiPkRpc2FibGU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25DbGlja1NldFZhbHVlKClcIj5TZXQgdmFsdWU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwidmNGb3JtLm9uU3VibWl0KClcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwic2NoZW1hTW9kZWwuc3VibWl0dGVkID0gZmFsc2VcIj5DbGVhciBTdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25DbGlja0FkZENvbnRyb2woKVwiPkFkZENvbnRyb2w8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwcmU+e3t2Y0Zvcm0udmFsdWV8anNvbn19PC9wcmU+XHJcblxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXSxcclxuICBwcm92aWRlcnM6IFtTZWxlY3RvcHRpb25TZXJ2aWNlUHJveHksIFNlbGVjdHNlYXJjaHNlcnZlclNlcnZpY2VQcm94eV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE9mQ29tcG9uZW50IHtcclxuICBmb3JtRGlzYWJsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuICBuZ2F5U2luaE1pbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhdGU+KG5ldyBEYXRlKDIwMjEsIDIsIDI3KSk7XHJcbiAgZGFuVG9jT3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SU9mU2VsZWN0T3B0aW9uRHRvW10+KFt7XHJcbiAgICBkaXNwbGF5VGV4dDogJ0tpbmgnLFxyXG4gICAgdmFsdWU6ICcxJ1xyXG4gIH0sIHtcclxuICAgIGRpc3BsYXlUZXh0OiAnTcO0bmcnLFxyXG4gICAgdmFsdWU6ICcyJ1xyXG4gIH1dKTtcclxuICBzY2hlbWFNb2RlbCA9IG5ldyBPZlNjaGVtYU1vZGVsKHtcclxuICAgIGZpZWxkczogW1xyXG4gICAgICBuZXcgT2ZUZXh0TW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnTcOjJyxcclxuICAgICAgICBkYXRhRmllbGQ6ICdtYScsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdmFsaWRhdGlvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2VtYWlsJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZUZXh0TW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnSOG7jSB0w6puJyxcclxuICAgICAgICBkYXRhRmllbGQ6ICd0ZW5EYXlEdScsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgZGlzYWJsZWRBc3luYzogdGhpcy5mb3JtRGlzYWJsZSRcclxuICAgICAgfSksXHJcblxyXG4gICAgICBuZXcgT2ZTZWxlY3RNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICdHaeG7m2kgdMOtbmgnLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ2dpb2lUaW5oSWQnLFxyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgIHsgZGlzcGxheVRleHQ6ICdOYW0nLCB2YWx1ZTogJzEnIH0sXHJcbiAgICAgICAgICB7IGRpc3BsYXlUZXh0OiAnTuG7rycsIHZhbHVlOiAnMicgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBPZlNlbGVjdEFzeW5jTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnRMOibiB04buZYyBhc3luYycsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnZGFuVG9jJyxcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICBvcHRpb25zQXN5bmM6IHRoaXMuZGFuVG9jT3B0aW9uJFxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mU2VsZWN0QXBpTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnVOG7iW5oJyxcclxuICAgICAgICBkYXRhRmllbGQ6ICd0aW5oSWQnLFxyXG4gICAgICAgIGZ1bmN0aW9uU2VydmljZTogdGhpcy5zZWxlY3RTcC5nZXRvcHRpb25zKHtcclxuICAgICAgICAgIHR5cGU6IFNlbGVjdE9wdGlvblR5cGUuVGluaFxyXG4gICAgICAgIH0gYXMgYW55KSxcclxuICAgICAgICBrZXlDYWNoZTogJ3RpbmgnXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZTZWxlY3RDYXNjYWRlTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnSHV54buHbicsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnaHV5ZW5JZCcsXHJcbiAgICAgICAgY2FzY2FkZUZpZWxkOiAndGluaElkJyxcclxuICAgICAgICBmdW5jdGlvblNlcnZpY2U6IChjYXNjYWRlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RTcC5nZXRvcHRpb25zKHtcclxuICAgICAgICAgICAgdHlwZTogU2VsZWN0T3B0aW9uVHlwZS5IdXllbixcclxuICAgICAgICAgICAgY2FzY2FkZXI6IGNhc2NhZGVcclxuICAgICAgICAgIH0gYXMgYW55KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbmRlck9wdGlvbkZ1bmM6IChvcHQpID0+IHtcclxuICAgICAgICAgIGlmIChvcHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdC52YWx1ZSArICcgLSAnICsgb3B0LmRpc3BsYXlUZXh0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVuZGVyU2VsZWN0ZWRGdW5jOiAob3B0KSA9PiB7XHJcbiAgICAgICAgICBpZiAob3B0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGI+JHtvcHQudmFsdWV9PC9iPmAgKyAnIC0gJyArIG9wdC5kaXNwbGF5VGV4dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZTZWxlY3RDYXNjYWRlTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnWMOjJyxcclxuICAgICAgICBkYXRhRmllbGQ6ICd4YUlkJyxcclxuICAgICAgICBjYXNjYWRlRmllbGQ6ICdodXllbklkJyxcclxuICAgICAgICBmdW5jdGlvblNlcnZpY2U6IChjYXNjYWRlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RTcC5nZXRvcHRpb25zKHtcclxuICAgICAgICAgICAgdHlwZTogU2VsZWN0T3B0aW9uVHlwZS5YYSxcclxuICAgICAgICAgICAgY2FzY2FkZXI6IGNhc2NhZGVcclxuICAgICAgICAgIH0gYXMgYW55KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleUNhY2hlOiAneGEnXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgbmV3IE9mU2VsZWN0U2VhcmNoU2VydmVyTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnUXXhuq1uIGh1eeG7h24gc2VhcmNoJyxcclxuICAgICAgICBkYXRhRmllbGQ6ICdodXllblNlYXJjaFNlcnZlcklkJyxcclxuICAgICAgICBmdW5jdGlvblNlcnZpY2U6IChkdG8pID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNwLmdldG9wdGlvbnMoe1xyXG4gICAgICAgICAgICAuLi5kdG8sXHJcbiAgICAgICAgICAgIHR5cGU6IFNlbGVjdFNlYXJjaFNlcnZlclR5cGUuSHV5ZW5cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBPZlNlbGVjdFNlYXJjaFNlcnZlck1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ1F14bqtbiBodXnhu4duIHNlYXJjaCBzaG93UGFnaW5hdGlvbicsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnaHV5ZW5TZWFyY2hTZXJ2ZXJJZCcsXHJcbiAgICAgICAgZnVuY3Rpb25TZXJ2aWNlOiAoZHRvKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTcC5nZXRvcHRpb25zKHtcclxuICAgICAgICAgICAgLi4uZHRvLFxyXG4gICAgICAgICAgICB0eXBlOiBTZWxlY3RTZWFyY2hTZXJ2ZXJUeXBlLkh1eWVuXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dQYWdpbmF0aW9uOiB0cnVlXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZDaGVja0JveE1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJycsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnY2hlY2tCb3gnLFxyXG4gICAgICAgIGNoZWNrQm94TGFiZWw6ICdDaGVjayBib3gnLFxyXG4gICAgICAgIGRpc2FibGVkQXN5bmM6IHRoaXMuZm9ybURpc2FibGUkXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZEYXRlTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnTmfDoHkgc2luaCcsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnbmdheVNpbmgnLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG5vdEdyZWF0ZXJUaGFuQ3VycmVudDogdHJ1ZSxcclxuICAgICAgICBtaW5EYXRlQXN5bmM6IHRoaXMubmdheVNpbmhNaW4kLFxyXG4gICAgICAgIGRpc2FibGVkQXN5bmM6IHRoaXMuZm9ybURpc2FibGUkXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZDdXJyZW5jeU1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ8SQxqFuIGdpw6EnLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ2RvbkdpYScsXHJcbiAgICAgICAgZGlzYWJsZWRBc3luYzogdGhpcy5mb3JtRGlzYWJsZSRcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBPZkNvbnRlbnRIdG1sTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnICcsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnYmVuaE5oYW5JZCcsXHJcbiAgICAgICAgY29udGVudDogJzxoMz5jb250ZW50IHN0cmluZyBodG1sPC9oMz4nLFxyXG4gICAgICAgIGRpc2FibGVkQXN5bmM6IHRoaXMuZm9ybURpc2FibGUkXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZUZXh0QXJlYU1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ0doaSBjaMO6JyxcclxuICAgICAgICBkYXRhRmllbGQ6ICdnaGlDaHUnLFxyXG4gICAgICAgIHJvd3M6IDIsXHJcbiAgICAgICAgZGlzYWJsZWRBc3luYzogdGhpcy5mb3JtRGlzYWJsZSRcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBPZk51bWJlck1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ1Phu5EgdGjhu6kgdOG7sScsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnc29UaHVUdScsXHJcbiAgICAgICAgbWluOiAxMCxcclxuICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICBzdGVwOiAyLFxyXG4gICAgICAgIGRpc2FibGVkQXN5bmM6IHRoaXMuZm9ybURpc2FibGUkXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZOdW1iZXJNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICfEkGnhu4duIHRob+G6oWknLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ2RpZW5UaG9haScsXHJcbiAgICAgICAgb25seUtleU51bWJlcjogdHJ1ZSxcclxuICAgICAgICBkaXNhYmxlZEFzeW5jOiB0aGlzLmZvcm1EaXNhYmxlJFxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mUHdkTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnTeG6rXQga2jhuql1JyxcclxuICAgICAgICBkYXRhRmllbGQ6ICdtYXRLaGF1JyxcclxuICAgICAgICBkaXNhYmxlZEFzeW5jOiB0aGlzLmZvcm1EaXNhYmxlJCxcclxuICAgICAgICB2YWxpZGF0aW9uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncGFzc3dvcmQnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mUmFkaW9Nb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICdMb+G6oWknLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ2xvYWknLFxyXG4gICAgICAgIGl0ZW1zOiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdMb+G6oWkgMScsXHJcbiAgICAgICAgICB2YWx1ZTogMVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnTG/huqFpIDInLFxyXG4gICAgICAgICAgdmFsdWU6IDJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsYWJlbDogJ0xv4bqhaSAzJyxcclxuICAgICAgICAgIHZhbHVlOiAzXHJcbiAgICAgICAgfV1cclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBPZlN3aXRjaE1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ1N3aXRjaCcsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnc3dpdGNoJyxcclxuICAgICAgICB5ZXNUZXh0OiAnQ8OzJ1xyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mVGVtcGxhdGVSZWZNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICd0ZW1wbGF0ZVJlZicsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAndGVtcGxhdGVSZWYnLFxyXG4gICAgICAgIGNvbnRyb2xzOiBbXHJcbiAgICAgICAgICBuZXcgT2ZFeHRlbmRDb250cm9sTW9kZWwoe1xyXG4gICAgICAgICAgICBkYXRhRmllbGQ6ICd0ZW1wbGF0ZU9wdCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnMSdcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgbmV3IE9mRXh0ZW5kQ29udHJvbE1vZGVsKHtcclxuICAgICAgICAgICAgZGF0YUZpZWxkOiAndGVtcGxhdGVJbnB1dCcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgICAgfSlcclxuICAgIF1cclxuICB9KTtcclxuICBwcml2YXRlIGRpc2FibGUgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWxlY3RTcDogU2VsZWN0b3B0aW9uU2VydmljZVByb3h5LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VhcmNoU3A6IFNlbGVjdHNlYXJjaHNlcnZlclNlcnZpY2VQcm94eSkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tEaXNhYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlID0gIXRoaXMuZGlzYWJsZTtcclxuICAgIHRoaXMuc2NoZW1hTW9kZWwuZGlzYWJsZUFsbCh0aGlzLmRpc2FibGUpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1NldFZhbHVlKCkge1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5wYXRjaFZhbHVlKHtcclxuICAgICAgbmdheVNpbmg6IG5ldyBEYXRlKDIwMjEsIDIsIDI4KSxcclxuICAgICAgbWE6IE51bWJlcihuZXcgRGF0ZSgpKSxcclxuICAgICAgZ2hpQ2h1OiBOdW1iZXIobmV3IERhdGUoKSksXHJcbiAgICAgIGh1eWVuU2VhcmNoU2VydmVySWQ6ICc5MzYxJyxcclxuICAgICAgdGluaElkOiAnODY3JyxcclxuICAgICAgaHV5ZW5JZDogJzUzMScsXHJcbiAgICAgIHhhSWQ6ICc1MzMnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tBZGRDb250cm9sKCkge1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5hZGRDb250cm9scyhbXHJcbiAgICAgIG5ldyBPZlRleHRNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICdNw6MgJyArIE51bWJlcihuZXcgRGF0ZSgpKSxcclxuICAgICAgICBkYXRhRmllbGQ6ICdtYScgKyBOdW1iZXIobmV3IERhdGUoKSksXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdmFsaWRhdGlvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2VtYWlsJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmFsdWU6IE51bWJlcihuZXcgRGF0ZSgpKVxyXG4gICAgICB9KVxyXG4gICAgXSwgMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==