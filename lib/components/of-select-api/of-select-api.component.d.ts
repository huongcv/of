import { AfterViewInit } from '@angular/core';
import { OfSelectComponent } from '../of-select/of-select.component';
import { IOfSelectOptionDto, OfSchemaModel } from '../../models';
import { FormGroup } from '@angular/forms';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { OfSelectApiModel } from './of-select-api-model';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OfSelectApiComponent implements AfterViewInit {
    private destroy$;
    vcSelect: OfSelectComponent;
    schemaModel: OfSchemaModel;
    field: OfSelectApiModel;
    group: FormGroup;
    constructor(destroy$: DestroyRxjsService);
    get hasCacheOption(): boolean;
    get key(): string;
    getOptionsFromApi(): Observable<IOfSelectOptionDto[]>;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<OfSelectApiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfSelectApiComponent, "lib-of-select-api", never, {}, {}, never, never>;
}
//# sourceMappingURL=of-select-api.component.d.ts.map