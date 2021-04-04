import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { OfSchemaModel } from '../../models';
import { OfTextModel } from './of-text.model';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OfTextComponent implements OnInit {
    private destroy$;
    searchEvent: EventEmitter<any>;
    schemaModel: OfSchemaModel;
    field: OfTextModel;
    group: FormGroup;
    keyEnter$: Subject<unknown>;
    nzSpinning: boolean;
    constructor(destroy$: DestroyRxjsService);
    ngOnInit(): void;
    onKeyEnterControl(): void;
    static ɵfac: i0.ɵɵFactoryDef<OfTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfTextComponent, "of-text", never, {}, { "searchEvent": "searchEvent"; }, never, never>;
}
//# sourceMappingURL=of-text.component.d.ts.map