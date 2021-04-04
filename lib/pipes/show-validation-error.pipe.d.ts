import { PipeTransform } from '@angular/core';
import { OrdValidator } from '../models';
import * as i0 from "@angular/core";
export declare class ShowValidationErrorPipe implements PipeTransform {
    transform(errors: any, validations: OrdValidator[], submitted: boolean): string;
    static ɵfac: i0.ɵɵFactoryDef<ShowValidationErrorPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<ShowValidationErrorPipe, "showValidationError">;
}
//# sourceMappingURL=show-validation-error.pipe.d.ts.map