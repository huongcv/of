import { IOfSelectOptionDto, OfSchemaModel } from '../models';
import { BehaviorSubject } from 'rxjs';
import { SelectoptionServiceProxy, SelectsearchserverServiceProxy } from '../services/danh-muc-service-proxies';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<OfComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OfComponent, "lib-of", never, {}, {}, never, never>;
}
//# sourceMappingURL=of.component.d.ts.map