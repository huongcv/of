import { __awaiter } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { DestroyRxjsService } from '../services/destroy-rxjs.service';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { AppUtilityService } from '../services/app-utility-service';
import * as i0 from "@angular/core";
import * as i1 from "../services/destroy-rxjs.service";
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
DynamicFieldDirective.ɵfac = function DynamicFieldDirective_Factory(t) { return new (t || DynamicFieldDirective)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.DestroyRxjsService)); };
DynamicFieldDirective.ɵdir = i0.ɵɵdefineDirective({ type: DynamicFieldDirective, selectors: [["", "ofDynamicField", ""]], inputs: { schemaModel: "schemaModel", field: "field", group: "group", ofFieldTempates: "ofFieldTempates" }, outputs: { searchEvent: "searchEvent" }, features: [i0.ɵɵProvidersFeature([DestroyRxjsService])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DynamicFieldDirective, [{
        type: Directive,
        args: [{
                selector: '[ofDynamicField]',
                providers: [DestroyRxjsService]
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ViewContainerRef }, { type: i1.DestroyRxjsService }]; }, { schemaModel: [{
            type: Input
        }], field: [{
            type: Input
        }], group: [{
            type: Input
        }], ofFieldTempates: [{
            type: Input
        }], searchEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2RpcmVjdGl2ZXMvZHluYW1pYy1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBTXBFLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEMsWUFDVSxRQUFrQyxFQUNsQyxTQUEyQixFQUMzQixRQUE0QjtRQUY1QixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQVI3QixvQkFBZSxHQUF1QixFQUFFLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBU2hELENBQUM7SUFFSyxRQUFROztZQUNaLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FB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QUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEZXN0cm95Unhqc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kZXN0cm95LXJ4anMuc2VydmljZSc7XHJcbmltcG9ydCB7IE9mQ29udHJvbE1vZGVsLCBPZlNjaGVtYU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgT2ZGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvb2YtdGVtcGxhdGUtcmVmL29mLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mQ29tcG9uZW50UmVmTW9kZWwgfSBmcm9tICcuLi9jb21wb25lbnRzL29mLWNvbXBvbmVudC1yZWYvb2YtY29tcG9uZW50LXJlZi5tb2RlbCc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBcHBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwcC11dGlsaXR5LXNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbb2ZEeW5hbWljRmllbGRdJyxcclxuICBwcm92aWRlcnM6IFtEZXN0cm95Unhqc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBPZkNvbnRyb2xNb2RlbDtcclxuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgpIG9mRmllbGRUZW1wYXRlczogT2ZGaWVsZENvbXBvbmVudFtdID0gW107XHJcbiAgQE91dHB1dCgpIHNlYXJjaEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgcHJpdmF0ZSBjb21wb25lbnRSZWY6IGFueTtcclxuICBwcml2YXRlIGNvbXBvbmVudDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogRGVzdHJveVJ4anNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIGF3YWl0IHRoaXMubWFwQ29tcG9uZW50KCk7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnQpO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnNjaGVtYU1vZGVsID0gdGhpcy5zY2hlbWFNb2RlbDtcclxuICAgICAgaWYgKHRoaXMuZmllbGQudHlwZSA9PT0gJ3RlbXBsYXRlUmVmJykge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLm9mRmllbGRUZW1wYXRlcyA9IHRoaXMub2ZGaWVsZFRlbXBhdGVzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNjaGVtYU1vZGVsLmlzU2VhcmNoQm94ICYmIHRoaXMuZmllbGQudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc2VhcmNoRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoRXZlbnQuZW1pdChkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHRoaXMuaW5pdCQoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG1hcENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpZWxkLnR5cGU7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnY2hlY2tCb3gnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZDaGVja0JveENvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLWNoZWNrLWJveC9vZi1jaGVjay1ib3guY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZkNoZWNrQm94Q29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0ZXh0QXJlYSc6XHJcbiAgICAgICAgY29uc3QgeyBPZlRleHRBcmVhQ29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2YtdGV4dC1hcmVhL29mLXRleHQtYXJlYS5jb21wb25lbnQnKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IE9mVGV4dEFyZWFDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZUZXh0Q29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2YtdGV4dC9vZi10ZXh0LmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZUZXh0Q29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZTZWxlY3RDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi1zZWxlY3Qvb2Ytc2VsZWN0LmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZTZWxlY3RDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlbGVjdEFzeW5jJzpcclxuICAgICAgICBjb25zdCB7IE9mU2VsZWN0QXN5bmNDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi1zZWxlY3QtYXN5bmMvb2Ytc2VsZWN0LWFzeW5jLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZTZWxlY3RBc3luY0NvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc2VsZWN0QXBpJzpcclxuICAgICAgICBjb25zdCB7IE9mU2VsZWN0QXBpQ29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2Ytc2VsZWN0LWFwaS9vZi1zZWxlY3QtYXBpLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZTZWxlY3RBcGlDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlbGVjdEFwaUNhc2NhZGUnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZTZWxlY3RDYXNjYWRlQ29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2Ytc2VsZWN0LWNhc2NhZGUvb2Ytc2VsZWN0LWNhc2NhZGUuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZlNlbGVjdENhc2NhZGVDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlbGVjdFNlYXJjaFNlcnZlcic6XHJcbiAgICAgICAgY29uc3QgeyBPZlNlbGVjdFNlYXJjaFNlcnZlckNvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZTZWxlY3RTZWFyY2hTZXJ2ZXJDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2N1cnJlbmN5SW5wdXQnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZDdXJyZW5jeUNvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLWN1cnJlbmN5L29mLWN1cnJlbmN5LmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZDdXJyZW5jeUNvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGF0ZVBpY2tlcic6XHJcbiAgICAgICAgY29uc3QgeyBPZkRhdGVQaWNrZXJDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi1kYXRlLXBpY2tlci9vZi1kYXRlLXBpY2tlci5jb21wb25lbnQnKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IE9mRGF0ZVBpY2tlckNvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY29udGVudEh0bWwnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZDb250ZW50SHRtbENvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLWNvbnRlbnQtaHRtbC9vZi1jb250ZW50LWh0bWwuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBPZkNvbnRlbnRIdG1sQ29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdudW1iZXJJbnB1dCc6XHJcbiAgICAgICAgY29uc3QgeyBPZk51bWJlcklucHV0Q29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2YtbnVtYmVyLWlucHV0L29mLW51bWJlci1pbnB1dC5jb21wb25lbnQnKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IE9mTnVtYmVySW5wdXRDb21wb25lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Bhc3NXb3JkSW5wdXQnOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZQYXNzd29yZENvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLXBhc3N3b3JkL29mLXBhc3N3b3JkLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZQYXNzd29yZENvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmFkaW8nOlxyXG4gICAgICAgIGNvbnN0IHsgT2ZSYWRpb0NvbXBvbmVudCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9jb21wb25lbnRzL29mLXJhZGlvL29mLXJhZGlvLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZSYWRpb0NvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3dpdGNoJzpcclxuICAgICAgICBjb25zdCB7IE9mU3dpdGNoQ29tcG9uZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4uL2NvbXBvbmVudHMvb2Ytc3dpdGNoL29mLXN3aXRjaC5jb21wb25lbnQnKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IE9mU3dpdGNoQ29tcG9uZW50O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjb21wb25lbnRSZWYnOlxyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZCBhcyBPZkNvbXBvbmVudFJlZk1vZGVsPGFueT47XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBmaWVsZC5jb21wb25lbnRSZWY7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RlbXBsYXRlUmVmJzpcclxuICAgICAgICBjb25zdCB7IE9mVGVtcGxhdGVSZWZDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgnLi4vY29tcG9uZW50cy9vZi10ZW1wbGF0ZS1yZWYvb2YtdGVtcGxhdGUtcmVmLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gT2ZUZW1wbGF0ZVJlZkNvbXBvbmVudDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXQgZigpIHtcclxuICAgIHJldHVybiB0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkLmRhdGFGaWVsZCkgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdCQoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5oaWRkZW5Bc3luYykge1xyXG4gICAgICB0aGlzLmZpZWxkLmhpZGRlbkFzeW5jLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZCA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLmhpZGRlbiA9IGQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWVsZC5kaXNhYmxlZEFzeW5jKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGlzYWJsZWRBc3luYy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC5kaXNhYmxlZCA9IGQ7XHJcbiAgICAgICAgICBpZiAodGhpcy5mKSB7XHJcbiAgICAgICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5mLmRpc2FibGUoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmYuZW5hYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZGlzYWJsZUV4dGVuZENvbnRyb2woZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc2FibGVFeHRlbmRDb250cm9sKGQpIHtcclxuICAgIGlmICghQXBwVXRpbGl0eVNlcnZpY2UuaXNOb3RBbnlJdGVtKHRoaXMuZmllbGQuY29udHJvbHMpKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuY29udHJvbHMuZm9yRWFjaChjdHJsID0+IHtcclxuICAgICAgICBjdHJsLmRpc2FibGVkID0gZDtcclxuICAgICAgICBjb25zdCBmQ29udHJvbCA9IHRoaXMuZ3JvdXAuZ2V0KGN0cmwuZGF0YUZpZWxkKTtcclxuICAgICAgICBpZiAoZkNvbnRyb2wpIHtcclxuICAgICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgIGZDb250cm9sLmRpc2FibGUoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZDb250cm9sLmVuYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==