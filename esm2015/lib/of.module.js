import { NgModule } from '@angular/core';
import { AntDesignModule } from '../ant-design/ant-design.module';
import { OfFieldComponent } from './components/of-template-ref/of-field.component';
import { OfDynamicComponent } from './components/of-dynamic/of-dynamic.component';
import { OfCheckBoxComponent } from './components/of-check-box/of-check-box.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { OfTextComponent } from './components/of-text/of-text.component';
import { OfCurrencyComponent } from './components/of-currency/of-currency.component';
import { OfDatePickerComponent } from './components/of-date-picker/of-date-picker.component';
import { OfNumberInputComponent } from './components/of-number-input/of-number-input.component';
import { OfTextAreaComponent } from './components/of-text-area/of-text-area.component';
import { OfDataPickerControlComponent } from './components/of-date-picker/of-data-picker-control.component';
import { OfContentHtmlComponent } from './components/of-content-html/of-content-html.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { OfPasswordComponent } from './components/of-password/of-password.component';
import { OfRadioComponent } from './components/of-radio/of-radio.component';
import { OfSwitchComponent } from './components/of-switch/of-switch.component';
import { OfSelectSearchServerComponent } from './components/of-select-search-server/of-select-search-server.component';
import { OfTemplateRefComponent } from './components/of-template-ref/of-template-ref.component';
import { ShowValidationErrorPipe } from './pipes/show-validation-error.pipe';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { TextMaskModule } from 'angular2-text-mask';
import { OfOptionSelectedPipe } from './pipes/of-option-selected.pipe';
import { OfSelectRenderOptionPipe } from './pipes/of-select-render-option.pipe';
import { OfSelectComponent } from './components/of-select/of-select.component';
import { OfSelectAsyncComponent } from './components/of-select-async/of-select-async.component';
import { OfSelectApiComponent } from './components/of-select-api/of-select-api.component';
import { OfSelectCascadeComponent } from './components/of-select-cascade/of-select-cascade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const Of = [
    OfDynamicComponent,
    DynamicFieldDirective,
    OfTextComponent,
    ShowValidationErrorPipe,
    OfCheckBoxComponent,
    OfCurrencyComponent,
    OfDatePickerComponent,
    OfDataPickerControlComponent,
    OfTextAreaComponent,
    OfContentHtmlComponent,
    OfNumberInputComponent,
    NumbersOnlyDirective,
    OfPasswordComponent,
    OfRadioComponent,
    OfSwitchComponent,
    OfOptionSelectedPipe,
    OfSelectRenderOptionPipe,
    OfSelectSearchServerComponent,
    OfTemplateRefComponent,
    OfFieldComponent,
    OfSelectComponent,
    OfSelectAsyncComponent,
    OfSelectApiComponent,
    OfSelectCascadeComponent
];
export class OfModule {
}
OfModule.decorators = [
    { type: NgModule, args: [{
                declarations: [Of],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    AntDesignModule,
                    CurrencyMaskModule,
                    TextMaskModule
                ],
                exports: [
                    OfDynamicComponent,
                    OfFieldComponent,
                    ReactiveFormsModule,
                    FormsModule,
                    CommonModule
                ],
                entryComponents: [
                    OfCheckBoxComponent,
                    OfTextAreaComponent,
                    OfTextComponent,
                    OfSelectComponent,
                    OfSelectAsyncComponent,
                    OfSelectApiComponent,
                    OfSelectCascadeComponent,
                    OfSelectSearchServerComponent,
                    OfCurrencyComponent,
                    OfDatePickerComponent,
                    OfContentHtmlComponent,
                    OfNumberInputComponent,
                    OfPasswordComponent,
                    OfRadioComponent,
                    OfSwitchComponent,
                    OfTemplateRefComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9vZi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE1BQU0sRUFBRSxHQUFHO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDekIsQ0FBQztBQXVDRixNQUFNLE9BQU8sUUFBUTs7O1lBckNwQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNsQixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsWUFBWTtpQkFDYjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4Qiw2QkFBNkI7b0JBQzdCLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsc0JBQXNCO2lCQUN2QjthQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW50RGVzaWduTW9kdWxlIH0gZnJvbSAnLi4vYW50LWRlc2lnbi9hbnQtZGVzaWduLm1vZHVsZSc7XHJcbmltcG9ydCB7IE9mRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2YtdGVtcGxhdGUtcmVmL29mLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mRHluYW1pY0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1keW5hbWljL29mLWR5bmFtaWMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZDaGVja0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1jaGVjay1ib3gvb2YtY2hlY2stYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE9mVGV4dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi10ZXh0L29mLXRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZDdXJyZW5jeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1jdXJyZW5jeS9vZi1jdXJyZW5jeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZkRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2YtZGF0ZS1waWNrZXIvb2YtZGF0ZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZOdW1iZXJJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1udW1iZXItaW5wdXQvb2YtbnVtYmVyLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mVGV4dEFyZWFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2YtdGV4dC1hcmVhL29mLXRleHQtYXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZkRhdGFQaWNrZXJDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLWRhdGUtcGlja2VyL29mLWRhdGEtcGlja2VyLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZDb250ZW50SHRtbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1jb250ZW50LWh0bWwvb2YtY29udGVudC1odG1sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE51bWJlcnNPbmx5RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL251bWJlcnMtb25seS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBPZlBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLXBhc3N3b3JkL29mLXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2YtcmFkaW8vb2YtcmFkaW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZTd2l0Y2hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2Ytc3dpdGNoL29mLXN3aXRjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZlNlbGVjdFNlYXJjaFNlcnZlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1zZWxlY3Qtc2VhcmNoLXNlcnZlci9vZi1zZWxlY3Qtc2VhcmNoLXNlcnZlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZlRlbXBsYXRlUmVmQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLXRlbXBsYXRlLXJlZi9vZi10ZW1wbGF0ZS1yZWYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2hvd1ZhbGlkYXRpb25FcnJvclBpcGUgfSBmcm9tICcuL3BpcGVzL3Nob3ctdmFsaWRhdGlvbi1lcnJvci5waXBlJztcclxuaW1wb3J0IHsgQ3VycmVuY3lNYXNrTW9kdWxlIH0gZnJvbSAnbmcyLWN1cnJlbmN5LW1hc2snO1xyXG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XHJcbmltcG9ydCB7IE9mT3B0aW9uU2VsZWN0ZWRQaXBlIH0gZnJvbSAnLi9waXBlcy9vZi1vcHRpb24tc2VsZWN0ZWQucGlwZSc7XHJcbmltcG9ydCB7IE9mU2VsZWN0UmVuZGVyT3B0aW9uUGlwZSB9IGZyb20gJy4vcGlwZXMvb2Ytc2VsZWN0LXJlbmRlci1vcHRpb24ucGlwZSc7XHJcbmltcG9ydCB7IE9mU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLXNlbGVjdC9vZi1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZTZWxlY3RBc3luY0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1zZWxlY3QtYXN5bmMvb2Ytc2VsZWN0LWFzeW5jLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mU2VsZWN0QXBpQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLXNlbGVjdC1hcGkvb2Ytc2VsZWN0LWFwaS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZlNlbGVjdENhc2NhZGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2Ytc2VsZWN0LWNhc2NhZGUvb2Ytc2VsZWN0LWNhc2NhZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5jb25zdCBPZiA9IFtcclxuICBPZkR5bmFtaWNDb21wb25lbnQsXHJcbiAgRHluYW1pY0ZpZWxkRGlyZWN0aXZlLFxyXG4gIE9mVGV4dENvbXBvbmVudCxcclxuICBTaG93VmFsaWRhdGlvbkVycm9yUGlwZSxcclxuICBPZkNoZWNrQm94Q29tcG9uZW50LFxyXG4gIE9mQ3VycmVuY3lDb21wb25lbnQsXHJcbiAgT2ZEYXRlUGlja2VyQ29tcG9uZW50LFxyXG4gIE9mRGF0YVBpY2tlckNvbnRyb2xDb21wb25lbnQsXHJcbiAgT2ZUZXh0QXJlYUNvbXBvbmVudCxcclxuICBPZkNvbnRlbnRIdG1sQ29tcG9uZW50LFxyXG4gIE9mTnVtYmVySW5wdXRDb21wb25lbnQsXHJcbiAgTnVtYmVyc09ubHlEaXJlY3RpdmUsXHJcbiAgT2ZQYXNzd29yZENvbXBvbmVudCxcclxuICBPZlJhZGlvQ29tcG9uZW50LFxyXG4gIE9mU3dpdGNoQ29tcG9uZW50LFxyXG4gIE9mT3B0aW9uU2VsZWN0ZWRQaXBlLFxyXG4gIE9mU2VsZWN0UmVuZGVyT3B0aW9uUGlwZSxcclxuICBPZlNlbGVjdFNlYXJjaFNlcnZlckNvbXBvbmVudCxcclxuICBPZlRlbXBsYXRlUmVmQ29tcG9uZW50LFxyXG4gIE9mRmllbGRDb21wb25lbnQsXHJcbiAgT2ZTZWxlY3RDb21wb25lbnQsXHJcbiAgT2ZTZWxlY3RBc3luY0NvbXBvbmVudCxcclxuICBPZlNlbGVjdEFwaUNvbXBvbmVudCxcclxuICBPZlNlbGVjdENhc2NhZGVDb21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbT2ZdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIEFudERlc2lnbk1vZHVsZSxcclxuICAgIEN1cnJlbmN5TWFza01vZHVsZSxcclxuICAgIFRleHRNYXNrTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBPZkR5bmFtaWNDb21wb25lbnQsXHJcbiAgICBPZkZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIE9mQ2hlY2tCb3hDb21wb25lbnQsXHJcbiAgICBPZlRleHRBcmVhQ29tcG9uZW50LFxyXG4gICAgT2ZUZXh0Q29tcG9uZW50LFxyXG4gICAgT2ZTZWxlY3RDb21wb25lbnQsXHJcbiAgICBPZlNlbGVjdEFzeW5jQ29tcG9uZW50LFxyXG4gICAgT2ZTZWxlY3RBcGlDb21wb25lbnQsXHJcbiAgICBPZlNlbGVjdENhc2NhZGVDb21wb25lbnQsXHJcbiAgICBPZlNlbGVjdFNlYXJjaFNlcnZlckNvbXBvbmVudCxcclxuICAgIE9mQ3VycmVuY3lDb21wb25lbnQsXHJcbiAgICBPZkRhdGVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBPZkNvbnRlbnRIdG1sQ29tcG9uZW50LFxyXG4gICAgT2ZOdW1iZXJJbnB1dENvbXBvbmVudCxcclxuICAgIE9mUGFzc3dvcmRDb21wb25lbnQsXHJcbiAgICBPZlJhZGlvQ29tcG9uZW50LFxyXG4gICAgT2ZTd2l0Y2hDb21wb25lbnQsXHJcbiAgICBPZlRlbXBsYXRlUmVmQ29tcG9uZW50XHJcbiAgXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIE9mTW9kdWxlIHtcclxufVxyXG4iXX0=