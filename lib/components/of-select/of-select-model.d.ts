import { OfSelectBaseModel, OfSelectBaseModelConfig } from '../../models/of-select-base.model';
import { IOfSelectOptionDto } from '../../models';
export interface OfSelectModelConfig extends OfSelectBaseModelConfig {
    options: IOfSelectOptionDto[];
}
export declare class OfSelectModel extends OfSelectBaseModel {
    constructor(config: OfSelectModelConfig);
}
//# sourceMappingURL=of-select-model.d.ts.map