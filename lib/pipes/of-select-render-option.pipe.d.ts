import { PipeTransform } from '@angular/core';
import { OfSelectBaseModel } from '../models/of-select-base.model';
import { IOfSelectOptionDto } from '../models';
import * as i0 from "@angular/core";
export declare class OfSelectRenderOptionPipe implements PipeTransform {
    transform(displayText: string, field: OfSelectBaseModel, option: IOfSelectOptionDto): string;
    static ɵfac: i0.ɵɵFactoryDef<OfSelectRenderOptionPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<OfSelectRenderOptionPipe, "ofSelectRenderOption">;
}
//# sourceMappingURL=of-select-render-option.pipe.d.ts.map