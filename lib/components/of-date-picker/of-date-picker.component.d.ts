import { AfterContentChecked, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { OfSchemaModel } from '../../models';
import { OfDateModel } from './of-date.model';
import { OfDataPickerControlComponent } from './of-data-picker-control.component';
import * as i0 from "@angular/core";
export declare class OfDatePickerComponent implements OnInit, AfterContentChecked {
    private destroy$;
    cdr: ChangeDetectorRef;
    schemaModel: OfSchemaModel;
    field: OfDateModel;
    group: FormGroup;
    minDate: Date;
    maxDate: Date;
    vcDatePicker: OfDataPickerControlComponent;
    constructor(destroy$: DestroyRxjsService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    setMinDate(min: Date | moment.Moment): void;
    setMaxDate(max: Date | moment.Moment): void;
    convertDate(date: Date | moment.Moment): Date;
    get f(): import("@angular/forms").AbstractControl;
    disabledDate: (current: Date) => boolean;
    handlerTuNgayChange(): void;
    handlerDenNgayChange(): void;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDef<OfDatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfDatePickerComponent, "of-date-picker", never, {}, {}, never, never>;
}
//# sourceMappingURL=of-date-picker.component.d.ts.map