import { IOfSelectOptionDto } from '../../models';
import { OfSelectBaseModel, OfSelectBaseModelConfig } from '../../models/of-select-base.model';
import { Observable } from 'rxjs';
export interface PagedResultDtoOfSelectOption {
    totalCount: number;
    items: IOfSelectOptionDto[] | undefined;
}
export interface ISelectSearchServerDto {
    value: string | undefined;
    filter: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export interface OfSelectSearchServerModelConfig extends OfSelectBaseModelConfig {
    showPagination?: boolean;
    functionService: (ISelectSearchServerDto: any) => Observable<PagedResultDtoOfSelectOption>;
}
export declare class OfSelectSearchServerModel extends OfSelectBaseModel {
    showPagination: boolean;
    functionService: (ISelectSearchServerDto: any) => Observable<PagedResultDtoOfSelectOption>;
    constructor(config: OfSelectSearchServerModelConfig);
}
