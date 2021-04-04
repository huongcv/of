import { Component } from '@angular/core';
import { OfCheckBoxModel, OfContentHtmlModel, OfCurrencyModel, OfDateModel, OfExtendControlModel, OfNumberModel, OfPwdModel, OfRadioModel, OfSchemaModel, OfSelectSearchServerModel, OfSwitchModel, OfTemplateRefModel, OfTextAreaModel } from '../models';
import { OfTextModel } from './of-text/of-text.model';
import { BehaviorSubject } from 'rxjs';
import { OfSelectModel } from './of-select/of-select-model';
import { OfSelectAsyncModel } from './of-select-async/of-select-async-model';
import { OfSelectApiModel } from './of-select-api/of-select-api-model';
import { SelectoptionServiceProxy, SelectOptionType, SelectsearchserverServiceProxy, SelectSearchServerType } from '../services/danh-muc-service-proxies';
import { OfSelectCascadeModel } from './of-select-cascade/of-select-cascade-model';
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
OfComponent.decorators = [
    { type: Component, args: [{
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
                providers: [SelectoptionServiceProxy, SelectsearchserverServiceProxy]
            },] }
];
OfComponent.ctorParameters = () => [
    { type: SelectoptionServiceProxy },
    { type: SelectsearchserverServiceProxy }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFDZSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFDckYsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQzdELGFBQWEsRUFDYix5QkFBeUIsRUFBRSxhQUFhLEVBQ3hDLGtCQUFrQixFQUFFLGVBQWUsRUFDcEMsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLDhCQUE4QixFQUM5QixzQkFBc0IsRUFDdkIsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQW9DbkYsTUFBTSxPQUFPLFdBQVc7SUEyTXRCLFlBQW9CLFFBQWtDLEVBQ2xDLFFBQXdDO1FBRHhDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQWdDO1FBM001RCxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQU8s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O1lBQy9CLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN0QixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDMUIsbUJBQW1CLEVBQUUsTUFBTTtZQUMzQixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDM0IsSUFBSSxXQUFXLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDakMsU0FBUyxFQUFFLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDcEMsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsV0FBVyxFQUFFO29CQUNYO3dCQUNFLElBQUksRUFBRSxPQUFPO3FCQUNkO2lCQUNGO2dCQUNELEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUMxQixDQUFDO1NBQ0gsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OztZQWpSRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCVDtnQkFFRCxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQzthQUN0RTs7O1lBeENDLHdCQUF3QjtZQUV4Qiw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBJT2ZTZWxlY3RPcHRpb25EdG8sIE9mQ2hlY2tCb3hNb2RlbCwgT2ZDb250ZW50SHRtbE1vZGVsLCBPZkN1cnJlbmN5TW9kZWwsIE9mRGF0ZU1vZGVsLFxyXG4gIE9mRXh0ZW5kQ29udHJvbE1vZGVsLCBPZk51bWJlck1vZGVsLCBPZlB3ZE1vZGVsLCBPZlJhZGlvTW9kZWwsXHJcbiAgT2ZTY2hlbWFNb2RlbCxcclxuICBPZlNlbGVjdFNlYXJjaFNlcnZlck1vZGVsLCBPZlN3aXRjaE1vZGVsLFxyXG4gIE9mVGVtcGxhdGVSZWZNb2RlbCwgT2ZUZXh0QXJlYU1vZGVsXHJcbn0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgT2ZUZXh0TW9kZWwgfSBmcm9tICcuL29mLXRleHQvb2YtdGV4dC5tb2RlbCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPZlNlbGVjdE1vZGVsIH0gZnJvbSAnLi9vZi1zZWxlY3Qvb2Ytc2VsZWN0LW1vZGVsJztcclxuaW1wb3J0IHsgT2ZTZWxlY3RBc3luY01vZGVsIH0gZnJvbSAnLi9vZi1zZWxlY3QtYXN5bmMvb2Ytc2VsZWN0LWFzeW5jLW1vZGVsJztcclxuaW1wb3J0IHsgT2ZTZWxlY3RBcGlNb2RlbCB9IGZyb20gJy4vb2Ytc2VsZWN0LWFwaS9vZi1zZWxlY3QtYXBpLW1vZGVsJztcclxuaW1wb3J0IHtcclxuICBTZWxlY3RvcHRpb25TZXJ2aWNlUHJveHksXHJcbiAgU2VsZWN0T3B0aW9uVHlwZSxcclxuICBTZWxlY3RzZWFyY2hzZXJ2ZXJTZXJ2aWNlUHJveHksXHJcbiAgU2VsZWN0U2VhcmNoU2VydmVyVHlwZVxyXG59IGZyb20gJy4uL3NlcnZpY2VzL2RhbmgtbXVjLXNlcnZpY2UtcHJveGllcyc7XHJcbmltcG9ydCB7IE9mU2VsZWN0Q2FzY2FkZU1vZGVsIH0gZnJvbSAnLi9vZi1zZWxlY3QtY2FzY2FkZS9vZi1zZWxlY3QtY2FzY2FkZS1tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1vZicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxvZiAjdmNGb3JtIFtzY2hlbWFNb2RlbF09XCJzY2hlbWFNb2RlbFwiPlxyXG4gICAgICAgICAgICAgIDxvZi1maWVsZCBpZD1cInRlbXBsYXRlUmVmXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29udHJvbCBsZXQtZ3JvdXA9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuei1pbnB1dC1ncm91cCBuekNvbXBhY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuei1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwidGVtcGxhdGVPcHRcIiBzdHlsZT1cIndpZHRoOiA1MCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuei1vcHRpb24gW256TGFiZWxdPVwiJ09wdGlvbiAxJ1wiIFtuelZhbHVlXT1cIicxJ1wiPjwvbnotb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG56LW9wdGlvbiBbbnpMYWJlbF09XCInT3B0aW9uIDInXCIgW256VmFsdWVdPVwiJzInXCI+PC9uei1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbnotc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwidGVtcGxhdGVJbnB1dFwiIG56LWlucHV0IHBsYWNlaG9sZGVyPVwidGVtcGxhdGVJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA1MCVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uei1pbnB1dC1ncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L29mLWZpZWxkPlxyXG4gICAgICAgICAgPC9vZj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ2xpY2tEaXNhYmxlKClcIj5EaXNhYmxlPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ2xpY2tTZXRWYWx1ZSgpXCI+U2V0IHZhbHVlPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInZjRm9ybS5vblN1Ym1pdCgpXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInNjaGVtYU1vZGVsLnN1Ym1pdHRlZCA9IGZhbHNlXCI+Q2xlYXIgU3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ2xpY2tBZGRDb250cm9sKClcIj5BZGRDb250cm9sPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cHJlPnt7dmNGb3JtLnZhbHVlfGpzb259fTwvcHJlPlxyXG5cclxuICBgLFxyXG4gIHN0eWxlczogW10sXHJcbiAgcHJvdmlkZXJzOiBbU2VsZWN0b3B0aW9uU2VydmljZVByb3h5LCBTZWxlY3RzZWFyY2hzZXJ2ZXJTZXJ2aWNlUHJveHldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZkNvbXBvbmVudCB7XHJcbiAgZm9ybURpc2FibGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbiAgbmdheVNpbmhNaW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlPihuZXcgRGF0ZSgyMDIxLCAyLCAyNykpO1xyXG4gIGRhblRvY09wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElPZlNlbGVjdE9wdGlvbkR0b1tdPihbe1xyXG4gICAgZGlzcGxheVRleHQ6ICdLaW5oJyxcclxuICAgIHZhbHVlOiAnMSdcclxuICB9LCB7XHJcbiAgICBkaXNwbGF5VGV4dDogJ03DtG5nJyxcclxuICAgIHZhbHVlOiAnMidcclxuICB9XSk7XHJcbiAgc2NoZW1hTW9kZWwgPSBuZXcgT2ZTY2hlbWFNb2RlbCh7XHJcbiAgICBmaWVsZHM6IFtcclxuICAgICAgbmV3IE9mVGV4dE1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ03DoycsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnbWEnLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIHZhbGlkYXRpb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdlbWFpbCdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXHJcblxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mVGV4dE1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ0jhu40gdMOqbicsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAndGVuRGF5RHUnLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIGRpc2FibGVkQXN5bmM6IHRoaXMuZm9ybURpc2FibGUkXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgbmV3IE9mU2VsZWN0TW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnR2nhu5tpIHTDrW5oJyxcclxuICAgICAgICBkYXRhRmllbGQ6ICdnaW9pVGluaElkJyxcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICB7IGRpc3BsYXlUZXh0OiAnTmFtJywgdmFsdWU6ICcxJyB9LFxyXG4gICAgICAgICAgeyBkaXNwbGF5VGV4dDogJ07hu68nLCB2YWx1ZTogJzInIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZTZWxlY3RBc3luY01vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ0TDom4gdOG7mWMgYXN5bmMnLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ2RhblRvYycsXHJcbiAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgb3B0aW9uc0FzeW5jOiB0aGlzLmRhblRvY09wdGlvbiRcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBPZlNlbGVjdEFwaU1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ1Thu4luaCcsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAndGluaElkJyxcclxuICAgICAgICBmdW5jdGlvblNlcnZpY2U6IHRoaXMuc2VsZWN0U3AuZ2V0b3B0aW9ucyh7XHJcbiAgICAgICAgICB0eXBlOiBTZWxlY3RPcHRpb25UeXBlLlRpbmhcclxuICAgICAgICB9IGFzIGFueSksXHJcbiAgICAgICAga2V5Q2FjaGU6ICd0aW5oJ1xyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mU2VsZWN0Q2FzY2FkZU1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ0h1eeG7h24nLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ2h1eWVuSWQnLFxyXG4gICAgICAgIGNhc2NhZGVGaWVsZDogJ3RpbmhJZCcsXHJcbiAgICAgICAgZnVuY3Rpb25TZXJ2aWNlOiAoY2FzY2FkZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0U3AuZ2V0b3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlbGVjdE9wdGlvblR5cGUuSHV5ZW4sXHJcbiAgICAgICAgICAgIGNhc2NhZGVyOiBjYXNjYWRlXHJcbiAgICAgICAgICB9IGFzIGFueSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW5kZXJPcHRpb25GdW5jOiAob3B0KSA9PiB7XHJcbiAgICAgICAgICBpZiAob3B0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHQudmFsdWUgKyAnIC0gJyArIG9wdC5kaXNwbGF5VGV4dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbmRlclNlbGVjdGVkRnVuYzogKG9wdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKG9wdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxiPiR7b3B0LnZhbHVlfTwvYj5gICsgJyAtICcgKyBvcHQuZGlzcGxheVRleHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mU2VsZWN0Q2FzY2FkZU1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ1jDoycsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAneGFJZCcsXHJcbiAgICAgICAgY2FzY2FkZUZpZWxkOiAnaHV5ZW5JZCcsXHJcbiAgICAgICAgZnVuY3Rpb25TZXJ2aWNlOiAoY2FzY2FkZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0U3AuZ2V0b3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlbGVjdE9wdGlvblR5cGUuWGEsXHJcbiAgICAgICAgICAgIGNhc2NhZGVyOiBjYXNjYWRlXHJcbiAgICAgICAgICB9IGFzIGFueSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXlDYWNoZTogJ3hhJ1xyXG4gICAgICB9KSxcclxuXHJcbiAgICAgIG5ldyBPZlNlbGVjdFNlYXJjaFNlcnZlck1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ1F14bqtbiBodXnhu4duIHNlYXJjaCcsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnaHV5ZW5TZWFyY2hTZXJ2ZXJJZCcsXHJcbiAgICAgICAgZnVuY3Rpb25TZXJ2aWNlOiAoZHRvKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTcC5nZXRvcHRpb25zKHtcclxuICAgICAgICAgICAgLi4uZHRvLFxyXG4gICAgICAgICAgICB0eXBlOiBTZWxlY3RTZWFyY2hTZXJ2ZXJUeXBlLkh1eWVuXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZTZWxlY3RTZWFyY2hTZXJ2ZXJNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICdRdeG6rW4gaHV54buHbiBzZWFyY2ggc2hvd1BhZ2luYXRpb24nLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ2h1eWVuU2VhcmNoU2VydmVySWQnLFxyXG4gICAgICAgIGZ1bmN0aW9uU2VydmljZTogKGR0bykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU3AuZ2V0b3B0aW9ucyh7XHJcbiAgICAgICAgICAgIC4uLmR0byxcclxuICAgICAgICAgICAgdHlwZTogU2VsZWN0U2VhcmNoU2VydmVyVHlwZS5IdXllblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93UGFnaW5hdGlvbjogdHJ1ZVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mQ2hlY2tCb3hNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ2NoZWNrQm94JyxcclxuICAgICAgICBjaGVja0JveExhYmVsOiAnQ2hlY2sgYm94JyxcclxuICAgICAgICBkaXNhYmxlZEFzeW5jOiB0aGlzLmZvcm1EaXNhYmxlJFxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mRGF0ZU1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ05nw6B5IHNpbmgnLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ25nYXlTaW5oJyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBub3RHcmVhdGVyVGhhbkN1cnJlbnQ6IHRydWUsXHJcbiAgICAgICAgbWluRGF0ZUFzeW5jOiB0aGlzLm5nYXlTaW5oTWluJCxcclxuICAgICAgICBkaXNhYmxlZEFzeW5jOiB0aGlzLmZvcm1EaXNhYmxlJFxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mQ3VycmVuY3lNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICfEkMahbiBnacOhJyxcclxuICAgICAgICBkYXRhRmllbGQ6ICdkb25HaWEnLFxyXG4gICAgICAgIGRpc2FibGVkQXN5bmM6IHRoaXMuZm9ybURpc2FibGUkXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZDb250ZW50SHRtbE1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJyAnLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ2JlbmhOaGFuSWQnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICc8aDM+Y29udGVudCBzdHJpbmcgaHRtbDwvaDM+JyxcclxuICAgICAgICBkaXNhYmxlZEFzeW5jOiB0aGlzLmZvcm1EaXNhYmxlJFxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mVGV4dEFyZWFNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICdHaGkgY2jDuicsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnZ2hpQ2h1JyxcclxuICAgICAgICByb3dzOiAyLFxyXG4gICAgICAgIGRpc2FibGVkQXN5bmM6IHRoaXMuZm9ybURpc2FibGUkXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZOdW1iZXJNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICdT4buRIHRo4bupIHThu7EnLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ3NvVGh1VHUnLFxyXG4gICAgICAgIG1pbjogMTAsXHJcbiAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgc3RlcDogMixcclxuICAgICAgICBkaXNhYmxlZEFzeW5jOiB0aGlzLmZvcm1EaXNhYmxlJFxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IE9mTnVtYmVyTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnxJBp4buHbiB0aG/huqFpJyxcclxuICAgICAgICBkYXRhRmllbGQ6ICdkaWVuVGhvYWknLFxyXG4gICAgICAgIG9ubHlLZXlOdW1iZXI6IHRydWUsXHJcbiAgICAgICAgZGlzYWJsZWRBc3luYzogdGhpcy5mb3JtRGlzYWJsZSRcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBPZlB3ZE1vZGVsKHtcclxuICAgICAgICBsYWJlbDogJ03huq10IGto4bqpdScsXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnbWF0S2hhdScsXHJcbiAgICAgICAgZGlzYWJsZWRBc3luYzogdGhpcy5mb3JtRGlzYWJsZSQsXHJcbiAgICAgICAgdmFsaWRhdGlvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBPZlJhZGlvTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnTG/huqFpJyxcclxuICAgICAgICBkYXRhRmllbGQ6ICdsb2FpJyxcclxuICAgICAgICBpdGVtczogW3tcclxuICAgICAgICAgIGxhYmVsOiAnTG/huqFpIDEnLFxyXG4gICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsYWJlbDogJ0xv4bqhaSAyJyxcclxuICAgICAgICAgIHZhbHVlOiAyXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICdMb+G6oWkgMycsXHJcbiAgICAgICAgICB2YWx1ZTogM1xyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgT2ZTd2l0Y2hNb2RlbCh7XHJcbiAgICAgICAgbGFiZWw6ICdTd2l0Y2gnLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ3N3aXRjaCcsXHJcbiAgICAgICAgeWVzVGV4dDogJ0PDsydcclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBPZlRlbXBsYXRlUmVmTW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAndGVtcGxhdGVSZWYnLFxyXG4gICAgICAgIGRhdGFGaWVsZDogJ3RlbXBsYXRlUmVmJyxcclxuICAgICAgICBjb250cm9sczogW1xyXG4gICAgICAgICAgbmV3IE9mRXh0ZW5kQ29udHJvbE1vZGVsKHtcclxuICAgICAgICAgICAgZGF0YUZpZWxkOiAndGVtcGxhdGVPcHQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJzEnXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIG5ldyBPZkV4dGVuZENvbnRyb2xNb2RlbCh7XHJcbiAgICAgICAgICAgIGRhdGFGaWVsZDogJ3RlbXBsYXRlSW5wdXQnLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICBdXHJcbiAgICAgIH0pXHJcbiAgICBdXHJcbiAgfSk7XHJcbiAgcHJpdmF0ZSBkaXNhYmxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VsZWN0U3A6IFNlbGVjdG9wdGlvblNlcnZpY2VQcm94eSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHNlYXJjaFNwOiBTZWxlY3RzZWFyY2hzZXJ2ZXJTZXJ2aWNlUHJveHkpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvbkNsaWNrRGlzYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZSA9ICF0aGlzLmRpc2FibGU7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLmRpc2FibGVBbGwodGhpcy5kaXNhYmxlKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tTZXRWYWx1ZSgpIHtcclxuICAgIHRoaXMuc2NoZW1hTW9kZWwucGF0Y2hWYWx1ZSh7XHJcbiAgICAgIG5nYXlTaW5oOiBuZXcgRGF0ZSgyMDIxLCAyLCAyOCksXHJcbiAgICAgIG1hOiBOdW1iZXIobmV3IERhdGUoKSksXHJcbiAgICAgIGdoaUNodTogTnVtYmVyKG5ldyBEYXRlKCkpLFxyXG4gICAgICBodXllblNlYXJjaFNlcnZlcklkOiAnOTM2MScsXHJcbiAgICAgIHRpbmhJZDogJzg2NycsXHJcbiAgICAgIGh1eWVuSWQ6ICc1MzEnLFxyXG4gICAgICB4YUlkOiAnNTMzJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQWRkQ29udHJvbCgpIHtcclxuICAgIHRoaXMuc2NoZW1hTW9kZWwuYWRkQ29udHJvbHMoW1xyXG4gICAgICBuZXcgT2ZUZXh0TW9kZWwoe1xyXG4gICAgICAgIGxhYmVsOiAnTcOjICcgKyBOdW1iZXIobmV3IERhdGUoKSksXHJcbiAgICAgICAgZGF0YUZpZWxkOiAnbWEnICsgTnVtYmVyKG5ldyBEYXRlKCkpLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIHZhbGlkYXRpb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdlbWFpbCdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZhbHVlOiBOdW1iZXIobmV3IERhdGUoKSlcclxuICAgICAgfSlcclxuICAgIF0sIDApO1xyXG4gIH1cclxufVxyXG4iXX0=