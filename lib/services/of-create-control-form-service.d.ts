import { FormBuilder, FormGroup } from '@angular/forms';
import { OfControlModel, OfExtendControlModel } from '../models';
import { OfValidatorService } from './of-validator.service';
import * as i0 from "@angular/core";
export declare class OfCreateControlFormService {
    private fb;
    private validatorService;
    constructor(fb: FormBuilder, validatorService: OfValidatorService);
    createControl(fields: OfControlModel[]): FormGroup;
    createExtendControl(group: FormGroup, controls: OfExtendControlModel[]): void;
    updateControl(fields: OfControlModel[], group: FormGroup): void;
    private createField;
    createValidations(field: OfControlModel | OfExtendControlModel): void;
    bindValidations(field: OfControlModel | OfExtendControlModel): import("@angular/forms").ValidatorFn;
    static ɵfac: i0.ɵɵFactoryDef<OfCreateControlFormService, never>;
    static ɵprov: i0.ɵɵInjectableDef<OfCreateControlFormService>;
}
//# sourceMappingURL=of-create-control-form-service.d.ts.map