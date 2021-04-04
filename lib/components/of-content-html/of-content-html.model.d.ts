import { OfControlModel, OfControlModelConfig } from '../../models';
export interface OfContentHtmlModelConfig extends OfControlModelConfig {
    content?: string;
    isBlank?: boolean;
}
export declare class OfContentHtmlModel extends OfControlModel {
    content: string | null;
    constructor(config: OfContentHtmlModelConfig);
}
//# sourceMappingURL=of-content-html.model.d.ts.map