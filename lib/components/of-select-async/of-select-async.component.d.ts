import { AfterViewInit } from '@angular/core';
import { OfSchemaModel } from '../../models';
import { FormGroup } from '@angular/forms';
import { OfSelectAsyncModel } from './of-select-async-model';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { OfSelectComponent } from '../of-select/of-select.component';
import * as i0 from "@angular/core";
export declare class OfSelectAsyncComponent implements AfterViewInit {
    private destroy$;
    vcSelect: OfSelectComponent;
    schemaModel: OfSchemaModel;
    field: OfSelectAsyncModel;
    group: FormGroup;
    constructor(destroy$: DestroyRxjsService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<OfSelectAsyncComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfSelectAsyncComponent, "select-async", never, {}, {}, never, never>;
}
//# sourceMappingURL=of-select-async.component.d.ts.map