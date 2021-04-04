import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import * as i0 from "@angular/core";
export declare class OfDataPickerControlComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {
    refDate: NzDatePickerComponent;
    refInput: ElementRef;
    disabledDate?: (d: Date) => boolean;
    placeHolder: string;
    mask: (string | RegExp)[];
    $destroy: Subject<boolean>;
    isWriteValue: boolean;
    mouseEvent$: Subject<string>;
    nzIcon: string;
    nzIcon$: BehaviorSubject<string>;
    isShowIconCalendar: boolean;
    get value(): any;
    set value(v: any);
    isDisabled: boolean;
    get disabled(): boolean;
    set disabled(v: boolean);
    control: FormControl;
    inputValue: FormControl;
    private onChange;
    private onTouched;
    onChangeValue(event: any): void;
    onFocus(event: any): void;
    mouseLeaveMain(): void;
    mouseEnterMain(): void;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState?(isDisabled: boolean): void;
    onFocusOutInputMask(): void;
    onClickIcon(): void;
    static ɵfac: i0.ɵɵFactoryDef<OfDataPickerControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfDataPickerControlComponent, "of-date-picker-ctrl", never, { "disabledDate": "disabledDate"; "placeHolder": "placeHolder"; "disabled": "disabled"; "control": "control"; }, {}, never, never>;
}
//# sourceMappingURL=of-data-picker-control.component.d.ts.map