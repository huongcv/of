import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OfSchemaModel } from '../../models';
import { OfPwdModel } from './of-pwd.model';
import * as i0 from "@angular/core";
export declare class OfPasswordComponent implements OnInit {
    schemaModel: OfSchemaModel;
    field: OfPwdModel;
    group: FormGroup;
    passwordVisible: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<OfPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfPasswordComponent, "of-password", never, {}, {}, never, never>;
}
//# sourceMappingURL=of-password.component.d.ts.map