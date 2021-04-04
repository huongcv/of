import { AfterViewInit } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { OfSelectComponent } from '../of-select/of-select.component';
import { IOfSelectOptionDto, OfSchemaModel } from '../../models';
import { FormGroup } from '@angular/forms';
import { OfSelectCascadeModel } from './of-select-cascade-model';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OfSelectCascadeComponent implements AfterViewInit {
    private destroy$;
    vcSelect: OfSelectComponent;
    schemaModel: OfSchemaModel;
    field: OfSelectCascadeModel;
    group: FormGroup;
    constructor(destroy$: DestroyRxjsService);
    getOptionsFromApi(cascade: string): Observable<IOfSelectOptionDto[]>;
    get ctrl(): import("@angular/forms").AbstractControl;
    get hasCacheOption(): boolean;
    key(cascade: string): string;
    disableIfCascadeEmpty(cascade: string): void;
    setOptionsForView(options: any): void;
    checkCurrentValue(options: IOfSelectOptionDto[]): void;
    handlerCascadeChange(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<OfSelectCascadeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfSelectCascadeComponent, "of-select-cascade", never, {}, {}, never, never>;
}
//# sourceMappingURL=of-select-cascade.component.d.ts.map