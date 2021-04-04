import { IOfSelectOptionDto, OfSchemaModel } from '../models';
import { BehaviorSubject } from 'rxjs';
import { SelectoptionServiceProxy, SelectsearchserverServiceProxy } from '../services/danh-muc-service-proxies';
export declare class OfComponent {
    private selectSp;
    private searchSp;
    formDisable$: BehaviorSubject<boolean>;
    ngaySinhMin$: BehaviorSubject<Date>;
    danTocOption$: BehaviorSubject<IOfSelectOptionDto[]>;
    schemaModel: OfSchemaModel;
    private disable;
    constructor(selectSp: SelectoptionServiceProxy, searchSp: SelectsearchserverServiceProxy);
    onClickDisable(): void;
    onClickSetValue(): void;
    onClickAddControl(): void;
}
