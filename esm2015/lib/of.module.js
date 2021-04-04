import { NgModule } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { OfComponent } from './components/of.component';
import { OfRoutingModule } from './of-routing.module';
import { AntDesignModule } from '../ant-design.module';
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
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/form";
import * as i5 from "ng-zorro-antd/button";
import * as i6 from "ng-zorro-antd/core/wave";
import * as i7 from "ng-zorro-antd/core/transition-patch";
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
    static forChild() {
        return {
            ngModule: OfModule,
            providers: []
        };
    }
    static forLazy() {
        return new LazyModuleFactory(OfModule.forChild());
    }
}
OfModule.ɵmod = i0.ɵɵdefineNgModule({ type: OfModule });
OfModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OfModule_Factory(t) { return new (t || OfModule)(); }, imports: [[CoreModule,
            ThemeSharedModule,
            OfRoutingModule,
            AntDesignModule,
            CurrencyMaskModule,
            TextMaskModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OfModule, { declarations: [OfComponent, OfDynamicComponent,
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
        OfSelectCascadeComponent], imports: [CoreModule,
        ThemeSharedModule,
        OfRoutingModule,
        AntDesignModule,
        CurrencyMaskModule,
        TextMaskModule], exports: [OfComponent,
        OfDynamicComponent,
        OfFieldComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfModule, [{
        type: NgModule,
        args: [{
                declarations: [OfComponent, Of],
                imports: [CoreModule,
                    ThemeSharedModule,
                    OfRoutingModule,
                    AntDesignModule,
                    CurrencyMaskModule,
                    TextMaskModule],
                exports: [
                    OfComponent,
                    OfDynamicComponent,
                    OfFieldComponent
                ]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(OfDynamicComponent, [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NzRowDirective, i3.NgForOf, i3.NgIf, i2.NzColDirective, i3.NgClass, i4.NzFormLabelComponent, DynamicFieldDirective, i5.NzButtonComponent, i6.NzWaveDirective, i7.ɵNzTransitionPatchDirective], [ShowValidationErrorPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9vZi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hH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V0FBVyxFQUFFLEVBQUUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsVUFBVTtvQkFDbEIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixjQUFjLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO2lCQUNqQjthQUNGOzt1QkF2Q0Msa0JBQWtCLHVMQUNsQixxQkFBcUIsOEVBRXJCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSwgTGF6eU1vZHVsZUZhY3RvcnkgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgT2ZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2YuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9vZi1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFudERlc2lnbk1vZHVsZSB9IGZyb20gJy4uL2FudC1kZXNpZ24ubW9kdWxlJztcclxuaW1wb3J0IHsgT2ZGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi10ZW1wbGF0ZS1yZWYvb2YtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZEeW5hbWljQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLWR5bmFtaWMvb2YtZHluYW1pYy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZkNoZWNrQm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLWNoZWNrLWJveC9vZi1jaGVjay1ib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2R5bmFtaWMtZmllbGQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgT2ZUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLXRleHQvb2YtdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZkN1cnJlbmN5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLWN1cnJlbmN5L29mLWN1cnJlbmN5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1kYXRlLXBpY2tlci9vZi1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZk51bWJlcklucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLW51bWJlci1pbnB1dC9vZi1udW1iZXItaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZUZXh0QXJlYUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi10ZXh0LWFyZWEvb2YtdGV4dC1hcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mRGF0YVBpY2tlckNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2YtZGF0ZS1waWNrZXIvb2YtZGF0YS1waWNrZXItY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZkNvbnRlbnRIdG1sQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLWNvbnRlbnQtaHRtbC9vZi1jb250ZW50LWh0bWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnVtYmVyc09ubHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbnVtYmVycy1vbmx5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE9mUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2YtcGFzc3dvcmQvb2YtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1yYWRpby9vZi1yYWRpby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZlN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1zd2l0Y2gvb2Ytc3dpdGNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mU2VsZWN0U2VhcmNoU2VydmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mVGVtcGxhdGVSZWZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2YtdGVtcGxhdGUtcmVmL29mLXRlbXBsYXRlLXJlZi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaG93VmFsaWRhdGlvbkVycm9yUGlwZSB9IGZyb20gJy4vcGlwZXMvc2hvdy12YWxpZGF0aW9uLWVycm9yLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXJyZW5jeU1hc2tNb2R1bGUgfSBmcm9tICduZzItY3VycmVuY3ktbWFzayc7XHJcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcclxuaW1wb3J0IHsgT2ZPcHRpb25TZWxlY3RlZFBpcGUgfSBmcm9tICcuL3BpcGVzL29mLW9wdGlvbi1zZWxlY3RlZC5waXBlJztcclxuaW1wb3J0IHsgT2ZTZWxlY3RSZW5kZXJPcHRpb25QaXBlIH0gZnJvbSAnLi9waXBlcy9vZi1zZWxlY3QtcmVuZGVyLW9wdGlvbi5waXBlJztcclxuaW1wb3J0IHsgT2ZTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2Ytc2VsZWN0L29mLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPZlNlbGVjdEFzeW5jQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29mLXNlbGVjdC1hc3luYy9vZi1zZWxlY3QtYXN5bmMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZTZWxlY3RBcGlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2Ytc2VsZWN0LWFwaS9vZi1zZWxlY3QtYXBpLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mU2VsZWN0Q2FzY2FkZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vZi1zZWxlY3QtY2FzY2FkZS9vZi1zZWxlY3QtY2FzY2FkZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgT2YgPSBbXHJcbiAgT2ZEeW5hbWljQ29tcG9uZW50LFxyXG4gIER5bmFtaWNGaWVsZERpcmVjdGl2ZSxcclxuICBPZlRleHRDb21wb25lbnQsXHJcbiAgU2hvd1ZhbGlkYXRpb25FcnJvclBpcGUsXHJcbiAgT2ZDaGVja0JveENvbXBvbmVudCxcclxuICBPZkN1cnJlbmN5Q29tcG9uZW50LFxyXG4gIE9mRGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICBPZkRhdGFQaWNrZXJDb250cm9sQ29tcG9uZW50LFxyXG4gIE9mVGV4dEFyZWFDb21wb25lbnQsXHJcbiAgT2ZDb250ZW50SHRtbENvbXBvbmVudCxcclxuICBPZk51bWJlcklucHV0Q29tcG9uZW50LFxyXG4gIE51bWJlcnNPbmx5RGlyZWN0aXZlLFxyXG4gIE9mUGFzc3dvcmRDb21wb25lbnQsXHJcbiAgT2ZSYWRpb0NvbXBvbmVudCxcclxuICBPZlN3aXRjaENvbXBvbmVudCxcclxuICBPZk9wdGlvblNlbGVjdGVkUGlwZSxcclxuICBPZlNlbGVjdFJlbmRlck9wdGlvblBpcGUsXHJcbiAgT2ZTZWxlY3RTZWFyY2hTZXJ2ZXJDb21wb25lbnQsXHJcbiAgT2ZUZW1wbGF0ZVJlZkNvbXBvbmVudCxcclxuICBPZkZpZWxkQ29tcG9uZW50LFxyXG4gIE9mU2VsZWN0Q29tcG9uZW50LFxyXG4gIE9mU2VsZWN0QXN5bmNDb21wb25lbnQsXHJcbiAgT2ZTZWxlY3RBcGlDb21wb25lbnQsXHJcbiAgT2ZTZWxlY3RDYXNjYWRlQ29tcG9uZW50XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW09mQ29tcG9uZW50LCBPZl0sXHJcbiAgaW1wb3J0czogW0NvcmVNb2R1bGUsXHJcbiAgICBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgIE9mUm91dGluZ01vZHVsZSxcclxuICAgIEFudERlc2lnbk1vZHVsZSxcclxuICAgIEN1cnJlbmN5TWFza01vZHVsZSxcclxuICAgIFRleHRNYXNrTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBPZkNvbXBvbmVudCxcclxuICAgIE9mRHluYW1pY0NvbXBvbmVudCxcclxuICAgIE9mRmllbGRDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T2ZNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBPZk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JMYXp5KCk6IE5nTW9kdWxlRmFjdG9yeTxPZk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIG5ldyBMYXp5TW9kdWxlRmFjdG9yeShPZk1vZHVsZS5mb3JDaGlsZCgpKTtcclxuICB9XHJcbn1cclxuIl19