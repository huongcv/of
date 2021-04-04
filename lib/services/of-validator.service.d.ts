import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class OfValidatorService {
    constructor();
    noWhitespaceValidator(control: FormControl): {
        whiteSpace: boolean;
    };
    emailValidator(control: FormControl): {
        email: boolean;
    };
    passwordValidator(control: FormControl): {
        password: boolean;
    };
    phoneValidator(control: FormControl): {
        phone: boolean;
    };
    focusControlItem(id: number): void;
    focusFirst(id: number): void;
    static ɵfac: i0.ɵɵFactoryDef<OfValidatorService, never>;
    static ɵprov: i0.ɵɵInjectableDef<OfValidatorService>;
}
//# sourceMappingURL=of-validator.service.d.ts.map