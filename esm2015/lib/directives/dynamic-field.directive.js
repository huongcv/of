import { __awaiter } from "tslib";
import { ComponentFactoryResolver, Directive, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { DestroyRxjsService } from '../services/destroy-rxjs.service';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { AppUtilityService } from '../services/app-utility-service';
export class DynamicFieldDirective {
    constructor(resolver, container, destroy$) {
        this.resolver = resolver;
        this.container = container;
        this.destroy$ = destroy$;
        this.ofFieldTempates = [];
        this.searchEvent = new EventEmitter();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mapComponent();
            if (this.component) {
                const factory = this.resolver.resolveComponentFactory(this.component);
                this.componentRef = this.container.createComponent(factory);
                this.componentRef.instance.field = this.field;
                this.componentRef.instance.group = this.group;
                this.componentRef.instance.schemaModel = this.schemaModel;
                if (this.field.type === 'templateRef') {
                    this.componentRef.instance.ofFieldTempates = this.ofFieldTempates;
                }
                if (this.schemaModel.isSearchBox && this.field.type === 'text') {
                    this.componentRef.instance.searchEvent.pipe(takeUntil(this.destroy$)).subscribe(d => {
                        this.searchEvent.emit(d);
                    });
                }
            }
            this.init$();
        });
    }
    mapComponent() {
        return __awaiter(this, void 0, void 0, function* () {
            const type = this.field.type;
            switch (type) {
                case 'checkBox':
                    const { OfCheckBoxComponent } = yield import('../components/of-check-box/of-check-box.component');
                    this.component = OfCheckBoxComponent;
                    break;
                case 'textArea':
                    const { OfTextAreaComponent } = yield import('../components/of-text-area/of-text-area.component');
                    this.component = OfTextAreaComponent;
                    break;
                case 'text':
                    const { OfTextComponent } = yield import('../components/of-text/of-text.component');
                    this.component = OfTextComponent;
                    break;
                case 'select':
                    const { OfSelectComponent } = yield import('../components/of-select/of-select.component');
                    this.component = OfSelectComponent;
                    break;
                case 'selectAsync':
                    const { OfSelectAsyncComponent } = yield import('../components/of-select-async/of-select-async.component');
                    this.component = OfSelectAsyncComponent;
                    break;
                case 'selectApi':
                    const { OfSelectApiComponent } = yield import('../components/of-select-api/of-select-api.component');
                    this.component = OfSelectApiComponent;
                    break;
                case 'selectApiCascade':
                    const { OfSelectCascadeComponent } = yield import('../components/of-select-cascade/of-select-cascade.component');
                    this.component = OfSelectCascadeComponent;
                    break;
                case 'selectSearchServer':
                    const { OfSelectSearchServerComponent } = yield import('../components/of-select-search-server/of-select-search-server.component');
                    this.component = OfSelectSearchServerComponent;
                    break;
                case 'currencyInput':
                    const { OfCurrencyComponent } = yield import('../components/of-currency/of-currency.component');
                    this.component = OfCurrencyComponent;
                    break;
                case 'datePicker':
                    const { OfDatePickerComponent } = yield import('../components/of-date-picker/of-date-picker.component');
                    this.component = OfDatePickerComponent;
                    break;
                case 'contentHtml':
                    const { OfContentHtmlComponent } = yield import('../components/of-content-html/of-content-html.component');
                    this.component = OfContentHtmlComponent;
                    break;
                case 'numberInput':
                    const { OfNumberInputComponent } = yield import('../components/of-number-input/of-number-input.component');
                    this.component = OfNumberInputComponent;
                    break;
                case 'passWordInput':
                    const { OfPasswordComponent } = yield import('../components/of-password/of-password.component');
                    this.component = OfPasswordComponent;
                    break;
                case 'radio':
                    const { OfRadioComponent } = yield import('../components/of-radio/of-radio.component');
                    this.component = OfRadioComponent;
                    break;
                case 'switch':
                    const { OfSwitchComponent } = yield import('../components/of-switch/of-switch.component');
                    this.component = OfSwitchComponent;
                    break;
                case 'componentRef':
                    const field = this.field;
                    this.component = field.componentRef;
                    break;
                case 'templateRef':
                    const { OfTemplateRefComponent } = yield import('../components/of-template-ref/of-template-ref.component');
                    this.component = OfTemplateRefComponent;
                    break;
            }
        });
    }
    get f() {
        return this.group.get(this.field.dataField) || null;
    }
    init$() {
        if (this.field.hiddenAsync) {
            this.field.hiddenAsync.pipe(takeUntil(this.destroy$))
                .pipe(debounceTime(300))
                .subscribe(d => {
                this.field.hidden = d;
            });
        }
        if (this.field.disabledAsync) {
            this.field.disabledAsync.pipe(takeUntil(this.destroy$))
                .subscribe(d => {
                this.field.disabled = d;
                if (this.f) {
                    if (d) {
                        this.f.disable({ onlySelf: true });
                    }
                    else {
                        this.f.enable({ onlySelf: true });
                    }
                }
                this.disableExtendControl(d);
            });
        }
    }
    disableExtendControl(d) {
        if (!AppUtilityService.isNotAnyItem(this.field.controls)) {
            this.field.controls.forEach(ctrl => {
                ctrl.disabled = d;
                const fControl = this.group.get(ctrl.dataField);
                if (fControl) {
                    if (d) {
                        fControl.disable({ onlySelf: true });
                    }
                    else {
                        fControl.enable({ onlySelf: true });
                    }
                }
            });
        }
    }
}
DynamicFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ofDynamicField]',
                providers: [DestroyRxjsService]
            },] }
];
DynamicFieldDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: DestroyRxjsService }
];
DynamicFieldDirective.propDecorators = {
    schemaModel: [{ type: Input }],
    field: [{ type: Input }],
    group: [{ type: Input }],
    ofFieldTempates: [{ type: Input }],
    searchEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2RpcmVjdGl2ZXMvZHluYW1pYy1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUl0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTXBFLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEMsWUFDVSxRQUFrQyxFQUNsQyxTQUEyQixFQUMzQixRQUE0QjtRQUY1QixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQVI3QixvQkFBZSxHQUF1QixFQUFFLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBU2hELENBQUM7SUFFSyxRQUFROztZQUNaLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFD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S0FBSzs4QkFDTCxLQUFLOzBCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERlc3Ryb3lSeGpzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rlc3Ryb3ktcnhqcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2ZDb250cm9sTW9kZWwsIE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBPZkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9vZi10ZW1wbGF0ZS1yZWYvb2YtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2ZDb21wb25lbnRSZWZNb2RlbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvb2YtY29tcG9uZW50LXJlZi9vZi1jb21wb25lbnQtcmVmLm1vZGVsJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFwcFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXBwLXV0aWxpdHktc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tvZkR5bmFtaWNGaWVsZF0nLFxyXG4gIHByb3ZpZGVyczogW0Rlc3Ryb3lSeGpzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgc2NoZW1hTW9kZWw6IE9mU2NoZW1hTW9kZWw7XHJcbiAgQElucHV0KCkgZmllbGQ6IE9mQ29udHJvbE1vZGVsO1xyXG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgb2ZGaWVsZFRlbXBhdGVzOiBPZkZpZWxkQ29tcG9uZW50W10gPSBbXTtcclxuICBAT3V0cHV0KCkgc2VhcmNoRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBwcml2YXRlIGNvbXBvbmVudFJlZjogYW55O1xyXG4gIHByaXZhdGUgY29tcG9uZW50OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBEZXN0cm95Unhqc1NlcnZpY2VcclxuICApIHtcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgYXdhaXQgdGhpcy5tYXBDb21wb25lbnQoKTtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudCk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5maWVsZCA9IHRoaXMuZmllbGQ7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc2NoZW1hTW9kZWwgPSB0aGlzLnNjaGVtYU1vZGVsO1xyXG4gICAgICBpZiAodGhpcy5maWVsZC50eXBlID09PSAndGVtcGxhdGVSZWYnKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Uub2ZGaWVsZFRlbXBhdGVzID0gdGhpcy5vZkZpZWxkVGVtcGF0ZXM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2NoZW1hTW9kZWwuaXNTZWFyY2hCb3ggJiYgdGhpcy5maWVsZC50eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zZWFyY2hFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hFdmVudC5lbWl0KGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgdGhpcy5pbml0JCgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbWFwQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmllbGQudHlwZTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdjaGVja0JveCc6XHJcbiAgICAgICAgY29uc3QgeyBPZkNoZWNrQm94Q29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2YtY2hlY2stYm94L29mLWNoZWNrLWJveC5jb21wb25lbnQnKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IE9mQ2hlY2tCb3hDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHRBcmVhJzpcclxuICAgICAgICBjb25zdCB7IE9mVGV4dEFyZWFDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi10ZXh0LWFyZWEvb2YtdGV4dC1hcmVhLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZUZXh0QXJlYUNvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgY29uc3QgeyBPZlRleHRDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi10ZXh0L29mLXRleHQuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZlRleHRDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgY29uc3QgeyBPZlNlbGVjdENvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLXNlbGVjdC9vZi1zZWxlY3QuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZlNlbGVjdENvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc2VsZWN0QXN5bmMnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZTZWxlY3RBc3luY0NvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLXNlbGVjdC1hc3luYy9vZi1zZWxlY3QtYXN5bmMuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZlNlbGVjdEFzeW5jQ29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzZWxlY3RBcGknOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZTZWxlY3RBcGlDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi1zZWxlY3QtYXBpL29mLXNlbGVjdC1hcGkuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZlNlbGVjdEFwaUNvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc2VsZWN0QXBpQ2FzY2FkZSc6XHJcbiAgICAgICAgY29uc3QgeyBPZlNlbGVjdENhc2NhZGVDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi1zZWxlY3QtY2FzY2FkZS9vZi1zZWxlY3QtY2FzY2FkZS5jb21wb25lbnQnKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IE9mU2VsZWN0Q2FzY2FkZUNvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc2VsZWN0U2VhcmNoU2VydmVyJzpcclxuICAgICAgICBjb25zdCB7IE9mU2VsZWN0U2VhcmNoU2VydmVyQ29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXIvb2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXIuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZlNlbGVjdFNlYXJjaFNlcnZlckNvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY3VycmVuY3lJbnB1dCc6XHJcbiAgICAgICAgY29uc3QgeyBPZkN1cnJlbmN5Q29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2YtY3VycmVuY3kvb2YtY3VycmVuY3kuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZkN1cnJlbmN5Q29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkYXRlUGlja2VyJzpcclxuICAgICAgICBjb25zdCB7IE9mRGF0ZVBpY2tlckNvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLWRhdGUtcGlja2VyL29mLWRhdGUtcGlja2VyLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZEYXRlUGlja2VyQ29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjb250ZW50SHRtbCc6XHJcbiAgICAgICAgY29uc3QgeyBPZkNvbnRlbnRIdG1sQ29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2YtY29udGVudC1odG1sL29mLWNvbnRlbnQtaHRtbC5jb21wb25lbnQnKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IE9mQ29udGVudEh0bWxDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ251bWJlcklucHV0JzpcclxuICAgICAgICBjb25zdCB7IE9mTnVtYmVySW5wdXRDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi1udW1iZXItaW5wdXQvb2YtbnVtYmVyLWlucHV0LmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZOdW1iZXJJbnB1dENvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGFzc1dvcmRJbnB1dCc6XHJcbiAgICAgICAgY29uc3QgeyBPZlBhc3N3b3JkQ29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2YtcGFzc3dvcmQvb2YtcGFzc3dvcmQuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZlBhc3N3b3JkQ29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyYWRpbyc6XHJcbiAgICAgICAgY29uc3QgeyBPZlJhZGlvQ29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2YtcmFkaW8vb2YtcmFkaW8uY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZlJhZGlvQ29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzd2l0Y2gnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZTd2l0Y2hDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi1zd2l0Y2gvb2Ytc3dpdGNoLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZTd2l0Y2hDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NvbXBvbmVudFJlZic6XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkIGFzIE9mQ29tcG9uZW50UmVmTW9kZWw8YW55PjtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGZpZWxkLmNvbXBvbmVudFJlZjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndGVtcGxhdGVSZWYnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZUZW1wbGF0ZVJlZkNvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLXRlbXBsYXRlLXJlZi9vZi10ZW1wbGF0ZS1yZWYuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZlRlbXBsYXRlUmVmQ29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldCBmKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0JCgpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmhpZGRlbkFzeW5jKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuaGlkZGVuQXN5bmMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShkID0+IHtcclxuICAgICAgICAgIHRoaXMuZmllbGQuaGlkZGVuID0gZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpZWxkLmRpc2FibGVkQXN5bmMpIHtcclxuICAgICAgdGhpcy5maWVsZC5kaXNhYmxlZEFzeW5jLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZCA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLmRpc2FibGVkID0gZDtcclxuICAgICAgICAgIGlmICh0aGlzLmYpIHtcclxuICAgICAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmYuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuZi5lbmFibGUoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5kaXNhYmxlRXh0ZW5kQ29udHJvbChkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZUV4dGVuZENvbnRyb2woZCkge1xyXG4gICAgaWYgKCFBcHBVdGlsaXR5U2VydmljZS5pc05vdEFueUl0ZW0odGhpcy5maWVsZC5jb250cm9scykpIHtcclxuICAgICAgdGhpcy5maWVsZC5jb250cm9scy5mb3JFYWNoKGN0cmwgPT4ge1xyXG4gICAgICAgIGN0cmwuZGlzYWJsZWQgPSBkO1xyXG4gICAgICAgIGNvbnN0IGZDb250cm9sID0gdGhpcy5ncm91cC5nZXQoY3RybC5kYXRhRmllbGQpO1xyXG4gICAgICAgIGlmIChmQ29udHJvbCkge1xyXG4gICAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgICAgZkNvbnRyb2wuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZkNvbnRyb2wuZW5hYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19