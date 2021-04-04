import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IOfSelectOptionDto, OfSchemaModel } from '../../models';
import { OfSelectModel } from './of-select-model';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import * as i0 from "@angular/core";
export declare class OfSelectComponent implements OnInit, AfterViewInit {
    private cdr;
    private destroy$;
    schemaModel: OfSchemaModel;
    field: OfSelectModel;
    group: FormGroup;
    options: IOfSelectOptionDto[];
    constructor(cdr: ChangeDetectorRef, destroy$: DestroyRxjsService);
    ngOnInit(): void;
    trackBySelect(index: number, item: IOfSelectOptionDto): string;
    search(value: string): void;
    setOptionsView(options: any): void;
    selectAll(): void;
    unSelectAll(): void;
    private handlerValueDataFieldChange;
    private getItemSelected;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<OfSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfSelectComponent, "of-select", never, { "schemaModel": "schemaModel"; "field": "field"; "group": "group"; }, {}, never, never>;
}
//# sourceMappingURL=of-select.component.d.ts.map