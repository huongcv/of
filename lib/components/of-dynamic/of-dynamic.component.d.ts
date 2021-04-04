import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { OfControlModel, OfSchemaModel } from '../../models';
import { OfFieldComponent } from '../of-template-ref/of-field.component';
import { OfCreateControlFormService } from '../../services/of-create-control-form-service';
import { OfValidatorService } from '../../services/of-validator.service';
import * as i0 from "@angular/core";
export declare class OfDynamicComponent implements OnInit, AfterViewInit {
    private fb;
    private createCtrlService;
    private validatorService;
    private destroy$;
    schemaModel: OfSchemaModel;
    submitValueEvent: EventEmitter<any>;
    searchEvent: EventEmitter<any>;
    form: FormGroup;
    fields: OfControlModel[];
    ofFieldTempates: OfFieldComponent[];
    get value(): any;
    constructor(fb: FormBuilder, createCtrlService: OfCreateControlFormService, validatorService: OfValidatorService, destroy$: DestroyRxjsService);
    ngOnInit(): void;
    reBuilderForm(): void;
    init$(): void;
    trackByField(index: number, field: OfControlModel): string;
    onSubmit(isCheckValid?: boolean): any;
    ngAfterViewInit(): void;
    onClickSearchBtn(): void;
    disableAll(f?: boolean): void;
    disableField(name: string, f?: boolean): void;
    addOfFieldTempates(d: OfFieldComponent): void;
    static ɵfac: i0.ɵɵFactoryDef<OfDynamicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfDynamicComponent, "of", never, { "schemaModel": "schemaModel"; }, { "submitValueEvent": "submitValueEvent"; "searchEvent": "searchEvent"; }, never, ["[topContent]", "[bottomContent]"]>;
}
//# sourceMappingURL=of-dynamic.component.d.ts.map