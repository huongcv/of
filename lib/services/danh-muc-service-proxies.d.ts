import { Observable } from 'rxjs';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export declare const API_BASE_URL = "http://ytcs-api-v2.orenda.vn";
export declare class AbpServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param includeTypes (optional)
     * @return Success
     */
    apiDefinition(includeTypes: boolean | undefined): Observable<ApplicationApiDescriptionModel>;
    protected processApiDefinition(response: HttpResponseBase): Observable<ApplicationApiDescriptionModel>;
    /**
     * @return Success
     */
    applicationConfiguration(): Observable<ApplicationConfigurationDto>;
    protected processApplicationConfiguration(response: HttpResponseBase): Observable<ApplicationConfigurationDto>;
    static ɵfac: i0.ɵɵFactoryDef<AbpServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<AbpServiceProxy>;
}
export declare class TenantsServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    byName(name: string | null): Observable<FindTenantResultDto>;
    protected processByName(response: HttpResponseBase): Observable<FindTenantResultDto>;
    /**
     * @return Success
     */
    byId(id: string): Observable<FindTenantResultDto>;
    protected processById(response: HttpResponseBase): Observable<FindTenantResultDto>;
    static ɵfac: i0.ɵɵFactoryDef<TenantsServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<TenantsServiceProxy>;
}
export declare class BenhvienServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: BenhVienPagedRequestDto | undefined): Observable<PagedResultDtoOfBenhVienDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfBenhVienDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    cosoyteautocompletedatasource(body: CoSoYTeAutoDataSourceRequest | undefined): Observable<PagedResultDtoOfCoSoYTeAutoDataSourceDto>;
    protected processCosoyteautocompletedatasource(response: HttpResponseBase): Observable<PagedResultDtoOfCoSoYTeAutoDataSourceDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    cosoytedacodailyautocompletedatasource(body: CoSoYTeDaCoDaiLyAutoDataSourceRequest | undefined): Observable<PagedResultDtoOfCoSoYTeAutoDataSourceDto>;
    protected processCosoytedacodailyautocompletedatasource(response: HttpResponseBase): Observable<PagedResultDtoOfCoSoYTeAutoDataSourceDto>;
    /**
     * @param ma (optional)
     * @return Success
     */
    searchbenhvienidbyma(ma: string | null | undefined): Observable<number>;
    protected processSearchbenhvienidbyma(response: HttpResponseBase): Observable<number>;
    /**
     * @return Success
     */
    getdanhsachbenhvien(): Observable<BenhVienDto[]>;
    protected processGetdanhsachbenhvien(response: HttpResponseBase): Observable<BenhVienDto[]>;
    /**
     * @param benhVienId (optional)
     * @return Success
     */
    comboboxbenhvienordichvu(benhVienId: number | null | undefined): Observable<ComboBoxDto[]>;
    protected processComboboxbenhvienordichvu(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    /**
     * @return Success
     */
    loaibenhvienbyid(id: number): Observable<number>;
    protected processLoaibenhvienbyid(response: HttpResponseBase): Observable<number>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<BenhVienDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<BenhVienDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: BenhVienDto | undefined): Observable<BenhVienDto>;
    protected processCreate(response: HttpResponseBase): Observable<BenhVienDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: BenhVienDto | undefined): Observable<BenhVienDto>;
    protected processUpdate(response: HttpResponseBase): Observable<BenhVienDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<BenhvienServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<BenhvienServiceProxy>;
}
export declare class CauhinhdichvusokhamServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    createordelete(body: DichVuSoKhamOutputDto[] | null | undefined): Observable<void>;
    protected processCreateordelete(response: HttpResponseBase): Observable<void>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedRequestDichVuSoKhamDto | undefined): Observable<PagedResultDtoOfDichVuSoKhamOutputDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDichVuSoKhamOutputDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DichVuSoKhamOutputDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DichVuSoKhamOutputDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DichVuSoKhamDto | undefined): Observable<DichVuSoKhamOutputDto>;
    protected processCreate(response: HttpResponseBase): Observable<DichVuSoKhamOutputDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DichVuSoKhamDto | undefined): Observable<DichVuSoKhamOutputDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DichVuSoKhamOutputDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhdichvusokhamServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhdichvusokhamServiceProxy>;
}
export declare class CauhinhdoituongkhoduocServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param khoId (optional)
     * @return Success
     */
    getkhodoituong(khoId: number | undefined): Observable<KhoDoiTuongDto>;
    protected processGetkhodoituong(response: HttpResponseBase): Observable<KhoDoiTuongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    luucauhinh(body: KhoDoiTuongDto | undefined): Observable<void>;
    protected processLuucauhinh(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhdoituongkhoduocServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhdoituongkhoduocServiceProxy>;
}
export declare class CauhinhgiadichvuServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: DichVuPagedRequestDto | undefined): Observable<PagedResultDtoOfDichVuDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDichVuDto>;
    /**
     * @return Success
     */
    gettreeview(): Observable<void>;
    protected processGettreeview(response: HttpResponseBase): Observable<void>;
    /**
     * @param body (optional)
     * @return Success
     */
    updateserviceprices(body: ListDichVuDonGiaRequestDto | undefined): Observable<boolean>;
    protected processUpdateserviceprices(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    releaseserviceprices(body: ListDichVuDonGiaRequestDto | undefined): Observable<ItemExistsPagedResultDtoOfDichVuDto>;
    protected processReleaseserviceprices(response: HttpResponseBase): Observable<ItemExistsPagedResultDtoOfDichVuDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    releaseservicepricestoall(body: ListDichVuDonGiaRequestDto | undefined): Observable<ItemExistsPagedResultDtoOfDichVuDto>;
    protected processReleaseservicepricestoall(response: HttpResponseBase): Observable<ItemExistsPagedResultDtoOfDichVuDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    pricelistexpires(body: UpdateEffectiveDateRequestDto | undefined): Observable<number>;
    protected processPricelistexpires(response: HttpResponseBase): Observable<number>;
    /**
     * @param body (optional)
     * @return Success
     */
    updateeffectivedate(body: UpdateEffectiveDateRequestDto | undefined): Observable<boolean>;
    protected processUpdateeffectivedate(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    updateeffectivedatetoall(body: UpdateEffectiveDateRequestDto | undefined): Observable<boolean>;
    protected processUpdateeffectivedatetoall(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    importservice(body: ImportDichVuRequestDto | undefined): Observable<boolean>;
    protected processImportservice(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    validateexistsimportservice(body: ImportDichVuResultDto[] | null | undefined): Observable<ImportDichVuResultDto[]>;
    protected processValidateexistsimportservice(response: HttpResponseBase): Observable<ImportDichVuResultDto[]>;
    /**
     * @return Success
     */
    exportexceldichvudangsoanthao(): Observable<FileDto>;
    protected processExportexceldichvudangsoanthao(response: HttpResponseBase): Observable<FileDto>;
    /**
     * @return Success
     */
    exportexceldichvudangsoanthaosample(): Observable<FileDto>;
    protected processExportexceldichvudangsoanthaosample(response: HttpResponseBase): Observable<FileDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DichVuDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DichVuDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DichVuDto | undefined): Observable<DichVuDto>;
    protected processCreate(response: HttpResponseBase): Observable<DichVuDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DichVuDto | undefined): Observable<DichVuDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DichVuDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhgiadichvuServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhgiadichvuServiceProxy>;
}
export declare class CauhinhmautinnhanServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    getall(): Observable<CauHinhHeThongDto[]>;
    protected processGetall(response: HttpResponseBase): Observable<CauHinhHeThongDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    saveurl(body: CauHinhHeThongDto[] | null | undefined): Observable<boolean>;
    protected processSaveurl(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<CauHinhHeThongDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processCreate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processUpdate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhmautinnhanServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhmautinnhanServiceProxy>;
}
export declare class CauhinhphongbandichvuServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    createordelete(body: PhongBanDichVuOutputDto[] | null | undefined): Observable<void>;
    protected processCreateordelete(response: HttpResponseBase): Observable<void>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedRequestPhongBanDichVuDto | undefined): Observable<PagedResultDtoOfPhongBanDichVuOutputDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfPhongBanDichVuOutputDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<PhongBanDichVuOutputDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<PhongBanDichVuOutputDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: PhongBanDichVuDto | undefined): Observable<PhongBanDichVuOutputDto>;
    protected processCreate(response: HttpResponseBase): Observable<PhongBanDichVuOutputDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: PhongBanDichVuDto | undefined): Observable<PhongBanDichVuOutputDto>;
    protected processUpdate(response: HttpResponseBase): Observable<PhongBanDichVuOutputDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhphongbandichvuServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhphongbandichvuServiceProxy>;
}
export declare class CauhinhquanlyhosobccsServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    getall(): Observable<CauHinhHeThongDto[]>;
    protected processGetall(response: HttpResponseBase): Observable<CauHinhHeThongDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    saveurl(body: CauHinhHeThongDto[] | null | undefined): Observable<boolean>;
    protected processSaveurl(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<CauHinhHeThongDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processCreate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processUpdate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhquanlyhosobccsServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhquanlyhosobccsServiceProxy>;
}
export declare class CauhinhtaikhoanbulksmsServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    getall(): Observable<CauHinhHeThongDto[]>;
    protected processGetall(response: HttpResponseBase): Observable<CauHinhHeThongDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    saveurl(body: CauHinhHeThongDto[] | null | undefined): Observable<boolean>;
    protected processSaveurl(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<CauHinhHeThongDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processCreate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processUpdate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhtaikhoanbulksmsServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhtaikhoanbulksmsServiceProxy>;
}
export declare class CauhinhtaikhoandichvuthecaoServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    getall(): Observable<CauHinhHeThongDto[]>;
    protected processGetall(response: HttpResponseBase): Observable<CauHinhHeThongDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    saveurl(body: CauHinhHeThongDto[] | null | undefined): Observable<boolean>;
    protected processSaveurl(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<CauHinhHeThongDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processCreate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processUpdate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhtaikhoandichvuthecaoServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhtaikhoandichvuthecaoServiceProxy>;
}
export declare class CauhinhtaikhoanlienthongServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    getbyid(id: number): Observable<CauHinhTaiKhoanLienThongDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<CauHinhTaiKhoanLienThongDto>;
    /**
     * @return Success
     */
    getall(): Observable<CauHinhTaiKhoanLienThongDto[]>;
    protected processGetall(response: HttpResponseBase): Observable<CauHinhTaiKhoanLienThongDto[]>;
    /**
     * @return Success
     */
    getbyloaitaikhoan(loaiTaiKhoan: string | null): Observable<CauHinhTaiKhoanLienThongDto>;
    protected processGetbyloaitaikhoan(response: HttpResponseBase): Observable<CauHinhTaiKhoanLienThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: CauHinhTaiKhoanLienThongDto | undefined): Observable<CauHinhTaiKhoanLienThongDto>;
    protected processCreate(response: HttpResponseBase): Observable<CauHinhTaiKhoanLienThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    test(body: CauHinhTaiKhoanLienThongDto | undefined): Observable<boolean>;
    protected processTest(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    saveurl(body: CauHinhTaiKhoanLienThongDto[] | null | undefined): Observable<boolean>;
    protected processSaveurl(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfCauHinhTaiKhoanLienThongDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfCauHinhTaiKhoanLienThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: CauHinhTaiKhoanLienThongDto | undefined): Observable<CauHinhTaiKhoanLienThongDto>;
    protected processUpdate(response: HttpResponseBase): Observable<CauHinhTaiKhoanLienThongDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhtaikhoanlienthongServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhtaikhoanlienthongServiceProxy>;
}
export declare class CauhinhtaikhoanviettelpayServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    getall(): Observable<CauHinhHeThongDto[]>;
    protected processGetall(response: HttpResponseBase): Observable<CauHinhHeThongDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    saveurl(body: CauHinhHeThongDto[] | null | undefined): Observable<boolean>;
    protected processSaveurl(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<CauHinhHeThongDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processCreate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processUpdate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhtaikhoanviettelpayServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhtaikhoanviettelpayServiceProxy>;
}
export declare class CauhinhtinnhandichvuServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    getall(): Observable<CauHinhHeThongDto[]>;
    protected processGetall(response: HttpResponseBase): Observable<CauHinhHeThongDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    saveurl(body: CauHinhHeThongDto[] | null | undefined): Observable<boolean>;
    protected processSaveurl(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfCauHinhHeThongDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<CauHinhHeThongDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processCreate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: CauHinhHeThongDto | undefined): Observable<CauHinhHeThongDto>;
    protected processUpdate(response: HttpResponseBase): Observable<CauHinhHeThongDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<CauhinhtinnhandichvuServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CauhinhtinnhandichvuServiceProxy>;
}
export declare class ChuongtrinhServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfChuongTrinhDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfChuongTrinhDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<ChuongTrinhDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<ChuongTrinhDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: ChuongTrinhDto | undefined): Observable<ChuongTrinhDto>;
    protected processCreate(response: HttpResponseBase): Observable<ChuongTrinhDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: ChuongTrinhDto | undefined): Observable<ChuongTrinhDto>;
    protected processUpdate(response: HttpResponseBase): Observable<ChuongTrinhDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<ChuongtrinhServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ChuongtrinhServiceProxy>;
}
export declare class CombodataServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getfromdatabase(body: GetComboDataFromDataBaseInputDto | undefined): Observable<ComboBoxDto[]>;
    protected processGetfromdatabase(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    getfromdatabasetreeview(body: GetComboDataFromDataBaseInputDto | undefined): Observable<void>;
    protected processGetfromdatabasetreeview(response: HttpResponseBase): Observable<void>;
    /**
     * @param type (optional)
     * @return Success
     */
    appenum(type: string | null | undefined): Observable<ComboBoxDto[]>;
    protected processAppenum(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    static ɵfac: i0.ɵɵFactoryDef<CombodataServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<CombodataServiceProxy>;
}
export declare class DichvukhamchuabenhServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: DichVuPagedRequestDto | undefined): Observable<PagedResultDtoOfDichVuDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDichVuDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DichVuDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DichVuDto>;
    /**
     * @return Success
     */
    gettreeview(): Observable<void>;
    protected processGettreeview(response: HttpResponseBase): Observable<void>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DichVuDto | undefined): Observable<DichVuDto>;
    protected processCreate(response: HttpResponseBase): Observable<DichVuDto>;
    /**
     * @return Success
     */
    createbatch(ids: string | null): Observable<boolean>;
    protected processCreatebatch(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DichVuDto | undefined): Observable<DichVuDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DichVuDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    export(body: DichVuPagedRequestDto | undefined): Observable<FileDto>;
    protected processExport(response: HttpResponseBase): Observable<FileDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<DichvukhamchuabenhServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DichvukhamchuabenhServiceProxy>;
}
export declare class DoituongServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    treedatadoituong(): Observable<DoiTuongTreeDto[]>;
    protected processTreedatadoituong(response: HttpResponseBase): Observable<DoiTuongTreeDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DoiTuongDto | undefined): Observable<DoiTuongDto>;
    protected processCreate(response: HttpResponseBase): Observable<DoiTuongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DoiTuongDto | undefined): Observable<DoiTuongDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DoiTuongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: DoiTuongPagedRequest | undefined): Observable<PagedResultDtoOfDoiTuongDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDoiTuongDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DoiTuongDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DoiTuongDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<DoituongServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DoituongServiceProxy>;
}
export declare class DoituongkhoduocnoitruServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    gettreedatadoituongkhoduocnoitru(body: DoiTuongNoiTruInput | undefined): Observable<KhoDuocTreeDto[]>;
    protected processGettreedatadoituongkhoduocnoitru(response: HttpResponseBase): Observable<KhoDuocTreeDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    createorupdatedoituongnoitru(body: ParamsCreateOrUpdateDoiTuongNoiTruDto | undefined): Observable<number>;
    protected processCreateorupdatedoituongnoitru(response: HttpResponseBase): Observable<number>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: DoiTuongKhoDuocNoiTruPagedRequestDto | undefined): Observable<PagedResultDtoOfDoiTuongKhoDuocNoiTruDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDoiTuongKhoDuocNoiTruDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DoiTuongKhoDuocNoiTruDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DoiTuongKhoDuocNoiTruDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DoiTuongKhoDuocNoiTruDto | undefined): Observable<DoiTuongKhoDuocNoiTruDto>;
    protected processCreate(response: HttpResponseBase): Observable<DoiTuongKhoDuocNoiTruDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DoiTuongKhoDuocNoiTruDto | undefined): Observable<DoiTuongKhoDuocNoiTruDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DoiTuongKhoDuocNoiTruDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<DoituongkhoduocnoitruServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DoituongkhoduocnoitruServiceProxy>;
}
export declare class DoituongloaigiaServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    gettreedatadoituongloaigia(body: Params | undefined): Observable<LoaiGiaTreeDto[]>;
    protected processGettreedatadoituongloaigia(response: HttpResponseBase): Observable<LoaiGiaTreeDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    createorupdate(body: ParamUpdateOrCreateDto | undefined): Observable<number>;
    protected processCreateorupdate(response: HttpResponseBase): Observable<number>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: DoiTuongLoaiGiaPagedRequestDto | undefined): Observable<PagedResultDtoOfDoiTuongLoaiGiaDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDoiTuongLoaiGiaDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DoiTuongLoaiGiaDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DoiTuongLoaiGiaDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DoiTuongLoaiGiaDto | undefined): Observable<DoiTuongLoaiGiaDto>;
    protected processCreate(response: HttpResponseBase): Observable<DoiTuongLoaiGiaDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DoiTuongLoaiGiaDto | undefined): Observable<DoiTuongLoaiGiaDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DoiTuongLoaiGiaDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<DoituongloaigiaServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DoituongloaigiaServiceProxy>;
}
export declare class DonvihanhchinhServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DonViHanhChinhDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DonViHanhChinhDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DonViHanhChinhDto | undefined): Observable<DonViHanhChinhDto>;
    protected processCreate(response: HttpResponseBase): Observable<DonViHanhChinhDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DonViHanhChinhDto | undefined): Observable<DonViHanhChinhDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DonViHanhChinhDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedRequestDonViHanhChinhDto | undefined): Observable<PagedResultDtoOfDonViHanhChinhDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDonViHanhChinhDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<DonvihanhchinhServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DonvihanhchinhServiceProxy>;
}
export declare class DonvitinhduocphamServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: DonViTinhPagedRequestDto | undefined): Observable<PagedResultDtoOfDonViTinhDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDonViTinhDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DonViTinhDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DonViTinhDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DonViTinhDto | undefined): Observable<DonViTinhDto>;
    protected processCreate(response: HttpResponseBase): Observable<DonViTinhDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DonViTinhDto | undefined): Observable<DonViTinhDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DonViTinhDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<DonvitinhduocphamServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DonvitinhduocphamServiceProxy>;
}
export declare class DuocbenhvienServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    bulkthongtinthaubyduocid(body: InsertBulkThongTinThauByDuocIdRequest | undefined): Observable<void>;
    protected processBulkthongtinthaubyduocid(response: HttpResponseBase): Observable<void>;
    /**
     * @return Success
     */
    thongtinthaubyduocid(id: number): Observable<DuocThongTinThauDto[]>;
    protected processThongtinthaubyduocid(response: HttpResponseBase): Observable<DuocThongTinThauDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    getpagedlistduocdungchung(body: DuocDungChungPagedListInputDto | undefined): Observable<PagedResultDtoOfDuocDungChungDto>;
    protected processGetpagedlistduocdungchung(response: HttpResponseBase): Observable<PagedResultDtoOfDuocDungChungDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    themthuoctudanhmucchung(body: ThemThuocTuDanhMucDungChungRequest | undefined): Observable<void>;
    protected processThemthuoctudanhmucchung(response: HttpResponseBase): Observable<void>;
    /**
     * @param body (optional)
     * @return Success
     */
    exportexcelmaumacdinh(body: DuocBenhVienPageListInputDto | undefined): Observable<FileDto>;
    protected processExportexcelmaumacdinh(response: HttpResponseBase): Observable<FileDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    exportexcelmau917(body: DuocBenhVienPageListInputDto | undefined): Observable<FileDto>;
    protected processExportexcelmau917(response: HttpResponseBase): Observable<FileDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DuocDto | undefined): Observable<DuocDto>;
    protected processCreate(response: HttpResponseBase): Observable<DuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DuocDto | undefined): Observable<DuocDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DuocDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DuocDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DuocDto>;
    /**
     * @param idUpdate (optional)
     * @return Success
     */
    checktrungvacxin(vacxinId: number, idUpdate: number | null | undefined): Observable<boolean>;
    protected processChecktrungvacxin(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: DuocBenhVienPageListInputDto | undefined): Observable<PagedResultDtoOfDuocDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDuocDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<DuocbenhvienServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DuocbenhvienServiceProxy>;
}
export declare class DuocthongtinthauServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfDuocThongTinThauDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDuocThongTinThauDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DuocThongTinThauDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DuocThongTinThauDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: DuocThongTinThauDto | undefined): Observable<DuocThongTinThauDto>;
    protected processCreate(response: HttpResponseBase): Observable<DuocThongTinThauDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: DuocThongTinThauDto | undefined): Observable<DuocThongTinThauDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DuocThongTinThauDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<DuocthongtinthauServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DuocthongtinthauServiceProxy>;
}
export declare class FileServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    downloadtempfile(token: string | null): Observable<void>;
    protected processDownloadtempfile(response: HttpResponseBase): Observable<void>;
    /**
     * @param contentType (optional)
     * @return Success
     */
    nhanvienimg(id: number, loai: number, contentType: string | null | undefined): Observable<void>;
    protected processNhanvienimg(response: HttpResponseBase): Observable<void>;
    /**
     * @param width (optional)
     * @param height (optional)
     * @return Success
     */
    uploadanh(width: number | null | undefined, height: number | null | undefined): Observable<FileDto>;
    protected processUploadanh(response: HttpResponseBase): Observable<FileDto>;
    /**
     * @return Success
     */
    uploaexcel(): Observable<FileDto>;
    protected processUploaexcel(response: HttpResponseBase): Observable<FileDto>;
    static ɵfac: i0.ɵɵFactoryDef<FileServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<FileServiceProxy>;
}
export declare class GetentitycommonServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getbyid(body: GetEntityByIdInputDto | undefined): Observable<GetEntityByIdOutDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<GetEntityByIdOutDto>;
    static ɵfac: i0.ɵɵFactoryDef<GetentitycommonServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<GetentitycommonServiceProxy>;
}
export declare class GiuongbenhServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: GiuongBenhDto | undefined): Observable<GiuongBenhDto>;
    protected processCreate(response: HttpResponseBase): Observable<GiuongBenhDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: GiuongBenhDto | undefined): Observable<GiuongBenhDto>;
    protected processUpdate(response: HttpResponseBase): Observable<GiuongBenhDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: GiuongBenhPagedRequestDto | undefined): Observable<PagedResultDtoOfGiuongBenhDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfGiuongBenhDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<GiuongBenhDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<GiuongBenhDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<GiuongbenhServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<GiuongbenhServiceProxy>;
}
export declare class HethongdanhmucServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: LstDictionaryDto | undefined): Observable<LstDictionaryDto>;
    protected processCreate(response: HttpResponseBase): Observable<LstDictionaryDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: LstDictionaryDto | undefined): Observable<LstDictionaryDto>;
    protected processUpdate(response: HttpResponseBase): Observable<LstDictionaryDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    getListDictionaryByListTypeCode(body: LstDictionaryGetByListCodePagedRequestDto | undefined): Observable<LstDictionaryDto[]>;
    protected processGetListDictionaryByListTypeCode(response: HttpResponseBase): Observable<LstDictionaryDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: LstDictionaryPagedRequestDto | undefined): Observable<PagedResultDtoOfLstDictionaryDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfLstDictionaryDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<LstDictionaryDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<LstDictionaryDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<HethongdanhmucServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<HethongdanhmucServiceProxy>;
}
export declare class HethongdanhmucdinhnghiaServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    gettreeview(): Observable<void>;
    protected processGettreeview(response: HttpResponseBase): Observable<void>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: LstDictionaryTypeDto | undefined): Observable<LstDictionaryTypeDto>;
    protected processCreate(response: HttpResponseBase): Observable<LstDictionaryTypeDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: LstDictionaryTypeDto | undefined): Observable<LstDictionaryTypeDto>;
    protected processUpdate(response: HttpResponseBase): Observable<LstDictionaryTypeDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    /**
     * @return Success
     */
    removebyids(id: number): Observable<void>;
    protected processRemovebyids(response: HttpResponseBase): Observable<void>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: LstDictionaryTypePagedRequestDto | undefined): Observable<PagedResultDtoOfLstDictionaryTypeDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfLstDictionaryTypeDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<LstDictionaryTypeDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<LstDictionaryTypeDto>;
    static ɵfac: i0.ɵɵFactoryDef<HethongdanhmucdinhnghiaServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<HethongdanhmucdinhnghiaServiceProxy>;
}
export declare class HoatchatServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: HoatChatPagedListInputDto | undefined): Observable<PagedResultDtoOfHoatChatDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfHoatChatDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<HoatChatDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<HoatChatDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: HoatChatDto | undefined): Observable<HoatChatDto>;
    protected processCreate(response: HttpResponseBase): Observable<HoatChatDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: HoatChatDto | undefined): Observable<HoatChatDto>;
    protected processUpdate(response: HttpResponseBase): Observable<HoatChatDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<HoatchatServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<HoatchatServiceProxy>;
}
export declare class ImportduocphamServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    kiemtrathuoc(body: KiemTraExcelThuocRequest | undefined): Observable<KiemTraExcelThuocDto>;
    protected processKiemtrathuoc(response: HttpResponseBase): Observable<KiemTraExcelThuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    insertthuochople(body: InsertThuocHopLeRequest | undefined): Observable<CommonResultDtoOfInt32>;
    protected processInsertthuochople(response: HttpResponseBase): Observable<CommonResultDtoOfInt32>;
    /**
     * @param body (optional)
     * @return Success
     */
    updatethuochople(body: UpdateThuocHopLeRequest | undefined): Observable<CommonResultDtoOfInt32>;
    protected processUpdatethuochople(response: HttpResponseBase): Observable<CommonResultDtoOfInt32>;
    static ɵfac: i0.ɵɵFactoryDef<ImportduocphamServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ImportduocphamServiceProxy>;
}
export declare class KhangnguyenServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: KhangNguyenDto | undefined): Observable<KhangNguyenDto>;
    protected processCreate(response: HttpResponseBase): Observable<KhangNguyenDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: KhangNguyenDto | undefined): Observable<KhangNguyenDto>;
    protected processUpdate(response: HttpResponseBase): Observable<KhangNguyenDto>;
    /**
     * @return Success
     */
    comboboxdata(): Observable<ComboBoxDto[]>;
    protected processComboboxdata(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    /**
     * @return Success
     */
    checktrungid(id: number): Observable<boolean>;
    protected processChecktrungid(response: HttpResponseBase): Observable<boolean>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    /**
     * @return Success
     */
    listkhangnguyencombo(): Observable<ComboBoxDto[]>;
    protected processListkhangnguyencombo(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<KhangNguyenDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<KhangNguyenDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfKhangNguyenDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfKhangNguyenDto>;
    static ɵfac: i0.ɵɵFactoryDef<KhangnguyenServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<KhangnguyenServiceProxy>;
}
export declare class KhoduocServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: KhoDuocPagedRequestDto | undefined): Observable<PagedResultDtoOfKhoDuocDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfKhoDuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: KhoDuocDto | undefined): Observable<KhoDuocDto>;
    protected processCreate(response: HttpResponseBase): Observable<KhoDuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: KhoDuocDto | undefined): Observable<KhoDuocDto>;
    protected processUpdate(response: HttpResponseBase): Observable<KhoDuocDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<KhoDuocDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<KhoDuocDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<KhoduocServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<KhoduocServiceProxy>;
}
export declare class LoaiduocServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: LoaiDuocPagedListInputDto | undefined): Observable<PagedResultDtoOfLoaiDuocDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfLoaiDuocDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<LoaiDuocDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<LoaiDuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: LoaiDuocDto | undefined): Observable<LoaiDuocDto>;
    protected processCreate(response: HttpResponseBase): Observable<LoaiDuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: LoaiDuocDto | undefined): Observable<LoaiDuocDto>;
    protected processUpdate(response: HttpResponseBase): Observable<LoaiDuocDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<LoaiduocServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<LoaiduocServiceProxy>;
}
export declare class LoaigiaServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: LoaiGiaDto | undefined): Observable<LoaiGiaDto>;
    protected processCreate(response: HttpResponseBase): Observable<LoaiGiaDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: LoaiGiaDto | undefined): Observable<LoaiGiaDto>;
    protected processUpdate(response: HttpResponseBase): Observable<LoaiGiaDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: LoaiGiaPagedRequestDto | undefined): Observable<PagedResultDtoOfLoaiGiaDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfLoaiGiaDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<LoaiGiaDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<LoaiGiaDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<LoaigiaServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<LoaigiaServiceProxy>;
}
export declare class LoaivattuServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfLoaiVatTuDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfLoaiVatTuDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<LoaiVatTuDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<LoaiVatTuDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: LoaiVatTuDto | undefined): Observable<LoaiVatTuDto>;
    protected processCreate(response: HttpResponseBase): Observable<LoaiVatTuDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: LoaiVatTuDto | undefined): Observable<LoaiVatTuDto>;
    protected processUpdate(response: HttpResponseBase): Observable<LoaiVatTuDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<LoaivattuServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<LoaivattuServiceProxy>;
}
export declare class NhacungcapServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: NhaCungCapDto | undefined): Observable<NhaCungCapDto>;
    protected processCreate(response: HttpResponseBase): Observable<NhaCungCapDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: NhaCungCapDto | undefined): Observable<NhaCungCapDto>;
    protected processUpdate(response: HttpResponseBase): Observable<NhaCungCapDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: NhaCungCapPagedRequestDto | undefined): Observable<PagedResultDtoOfNhaCungCapDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfNhaCungCapDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<NhaCungCapDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<NhaCungCapDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<NhacungcapServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<NhacungcapServiceProxy>;
}
export declare class NhanlucServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param fileToken (optional)
     * @return Success
     */
    uploadanh(nhanLucId: number, loai: NHAN_LUC_LOAI_HINH_ANH, fileToken: string | null | undefined): Observable<void>;
    protected processUploadanh(response: HttpResponseBase): Observable<void>;
    /**
     * @return Success
     */
    nhanlucbybenhvienid(benhVienId: number): Observable<ComboBoxDto[]>;
    protected processNhanlucbybenhvienid(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: NhanLucPagedRequestDto | undefined): Observable<PagedResultDtoOfNhanLucDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfNhanLucDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<NhanLucDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<NhanLucDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: NhanLucDto | undefined): Observable<NhanLucDto>;
    protected processCreate(response: HttpResponseBase): Observable<NhanLucDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: NhanLucDto | undefined): Observable<NhanLucDto>;
    protected processUpdate(response: HttpResponseBase): Observable<NhanLucDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<NhanlucServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<NhanlucServiceProxy>;
}
export declare class NhomduocServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: NhomDuocPagedListInputDto | undefined): Observable<PagedResultDtoOfNhomDuocDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfNhomDuocDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<NhomDuocDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<NhomDuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: NhomDuocDto | undefined): Observable<NhomDuocDto>;
    protected processCreate(response: HttpResponseBase): Observable<NhomDuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: NhomDuocDto | undefined): Observable<NhomDuocDto>;
    protected processUpdate(response: HttpResponseBase): Observable<NhomDuocDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<NhomduocServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<NhomduocServiceProxy>;
}
export declare class NhomdvktbhytServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: NhomDvktBhytPagedListInputDto | undefined): Observable<PagedResultDtoOfNhomDvktBhytDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfNhomDvktBhytDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<NhomDvktBhytDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<NhomDvktBhytDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: NhomDvktBhytDto | undefined): Observable<NhomDvktBhytDto>;
    protected processCreate(response: HttpResponseBase): Observable<NhomDvktBhytDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: NhomDvktBhytDto | undefined): Observable<NhomDvktBhytDto>;
    protected processUpdate(response: HttpResponseBase): Observable<NhomDvktBhytDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<NhomdvktbhytServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<NhomdvktbhytServiceProxy>;
}
export declare class PermissionmanagementServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getbyrole(body: GetPermissionInputDto | undefined): Observable<GetPermissionListResultDto>;
    protected processGetbyrole(response: HttpResponseBase): Observable<GetPermissionListResultDto>;
    static ɵfac: i0.ɵɵFactoryDef<PermissionmanagementServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<PermissionmanagementServiceProxy>;
}
export declare class PhacdodieutriServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PhacDoDieuTriPagedRequestDto | undefined): Observable<PagedResultDtoOfPhacDoDieuTriDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfPhacDoDieuTriDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<PhacDoDieuTriDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<PhacDoDieuTriDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: PhacDoDieuTriDto | undefined): Observable<PhacDoDieuTriDto>;
    protected processCreate(response: HttpResponseBase): Observable<PhacDoDieuTriDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: PhacDoDieuTriDto | undefined): Observable<PhacDoDieuTriDto>;
    protected processUpdate(response: HttpResponseBase): Observable<PhacDoDieuTriDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<PhacdodieutriServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<PhacdodieutriServiceProxy>;
}
export declare class PhannhomduocServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedFullRequestDto | undefined): Observable<PagedResultDtoOfPhanNhomDuocDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfPhanNhomDuocDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<PhanNhomDuocDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<PhanNhomDuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: PhanNhomDuocDto | undefined): Observable<PhanNhomDuocDto>;
    protected processCreate(response: HttpResponseBase): Observable<PhanNhomDuocDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: PhanNhomDuocDto | undefined): Observable<PhanNhomDuocDto>;
    protected processUpdate(response: HttpResponseBase): Observable<PhanNhomDuocDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<PhannhomduocServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<PhannhomduocServiceProxy>;
}
export declare class PhongbanServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    treesource(): Observable<PhongBanTreeDto[]>;
    protected processTreesource(response: HttpResponseBase): Observable<PhongBanTreeDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedRequestPhongBanDto | undefined): Observable<PagedResultDtoOfPhongBanDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfPhongBanDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<PhongBanDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<PhongBanDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: PhongBanDto | undefined): Observable<PhongBanDto>;
    protected processCreate(response: HttpResponseBase): Observable<PhongBanDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: PhongBanDto | undefined): Observable<PhongBanDto>;
    protected processUpdate(response: HttpResponseBase): Observable<PhongBanDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<PhongbanServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<PhongbanServiceProxy>;
}
export declare class SearchservercombodataServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    benhicdselect(body: FetchBenhIcdSearchRequest | undefined): Observable<PagedResultDtoOfComboBoxDto>;
    protected processBenhicdselect(response: HttpResponseBase): Observable<PagedResultDtoOfComboBoxDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    benhicdtable(body: FetchBenhIcdSearchRequest | undefined): Observable<PagedResultDtoOfBenhIcdSearchDto>;
    protected processBenhicdtable(response: HttpResponseBase): Observable<PagedResultDtoOfBenhIcdSearchDto>;
    static ɵfac: i0.ɵɵFactoryDef<SearchservercombodataServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<SearchservercombodataServiceProxy>;
}
export declare class SelectoptionServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getoptions(body: SelectOptionInputDto | undefined): Observable<ComboBoxDto[]>;
    protected processGetoptions(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    static ɵfac: i0.ɵɵFactoryDef<SelectoptionServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<SelectoptionServiceProxy>;
}
export declare class SelectsearchserverServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getoptions(body: SelectSearchServerDto | undefined): Observable<PagedResultDtoOfComboBoxDto>;
    protected processGetoptions(response: HttpResponseBase): Observable<PagedResultDtoOfComboBoxDto>;
    static ɵfac: i0.ɵɵFactoryDef<SelectsearchserverServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<SelectsearchserverServiceProxy>;
}
export declare class SokhamServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedRequestSoKhamDto | undefined): Observable<PagedResultDtoOfSoKhamDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfSoKhamDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<SoKhamDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<SoKhamDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: SoKhamDto | undefined): Observable<SoKhamDto>;
    protected processCreate(response: HttpResponseBase): Observable<SoKhamDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: SoKhamDto | undefined): Observable<SoKhamDto>;
    protected processUpdate(response: HttpResponseBase): Observable<SoKhamDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<SokhamServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<SokhamServiceProxy>;
}
export declare class StaticroleServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: StaticRolePagedInputDto | undefined): Observable<PagedResultDtoOfStaticRolePagedOutputDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfStaticRolePagedOutputDto>;
    /**
     * @param id (optional)
     * @return Success
     */
    getbyid(id: number | undefined): Observable<SysRoleDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<SysRoleDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    upsert(body: SysRoleDto | undefined): Observable<CommonResultDtoOfSysRoleDto>;
    protected processUpsert(response: HttpResponseBase): Observable<CommonResultDtoOfSysRoleDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    setpermissionableforadminrole(body: SetListPermissionAbleForAdminRoleRequest | undefined): Observable<number>;
    protected processSetpermissionableforadminrole(response: HttpResponseBase): Observable<number>;
    /**
     * @param id (optional)
     * @return Success
     */
    getpermissionableforadminrole(id: number | undefined): Observable<SysPermissionAdminDto[]>;
    protected processGetpermissionableforadminrole(response: HttpResponseBase): Observable<SysPermissionAdminDto[]>;
    /**
     * @param loaiBenhVien (optional)
     * @return Success
     */
    permissionloaibenhvien(loaiBenhVien: number | undefined): Observable<SysPermissionLoaiBenhVienEntity[]>;
    protected processPermissionloaibenhvien(response: HttpResponseBase): Observable<SysPermissionLoaiBenhVienEntity[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    setpermissionloaibenhvien(body: SetPermissionLoaiBenhVienRequest | undefined): Observable<number>;
    protected processSetpermissionloaibenhvien(response: HttpResponseBase): Observable<number>;
    static ɵfac: i0.ɵɵFactoryDef<StaticroleServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<StaticroleServiceProxy>;
}
export declare class SysroleServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    setpermissionforsysrole(body: SetPermissionForSysRoleRequest | undefined): Observable<number>;
    protected processSetpermissionforsysrole(response: HttpResponseBase): Observable<number>;
    /**
     * @param sysRoleId (optional)
     * @return Success
     */
    getpermissiongranted(sysRoleId: number | undefined): Observable<SysRolePermissionDto>;
    protected processGetpermissiongranted(response: HttpResponseBase): Observable<SysRolePermissionDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlistrolecoso(body: RoleCoSoPagedInputDto | undefined): Observable<PagedResultDtoOfSysRoleDto>;
    protected processGetlistrolecoso(response: HttpResponseBase): Observable<PagedResultDtoOfSysRoleDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    upsertrolecoso(body: SysRoleDto | undefined): Observable<CommonResultDtoOfSysRoleDto>;
    protected processUpsertrolecoso(response: HttpResponseBase): Observable<CommonResultDtoOfSysRoleDto>;
    /**
     * @param id (optional)
     * @return Success
     */
    getbyid(id: number | undefined): Observable<SysRoleDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<SysRoleDto>;
    /**
     * @return Success
     */
    xoarolecoso(sysRoleId: number): Observable<CommonResultDtoOfInt64>;
    protected processXoarolecoso(response: HttpResponseBase): Observable<CommonResultDtoOfInt64>;
    static ɵfac: i0.ɵɵFactoryDef<SysroleServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<SysroleServiceProxy>;
}
export declare class TaikhoanadminServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: GetListUserAdminCoSoRequest | undefined): Observable<PagedResultDtoOfSysUserDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfSysUserDto>;
    /**
     * @return Success
     */
    getsysroleadmincoso(): Observable<SysRoleDto[]>;
    protected processGetsysroleadmincoso(response: HttpResponseBase): Observable<SysRoleDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    taotaikhoanadmincoso(body: TaoTaiKhoanAdminCoSoInputDto | undefined): Observable<CommonResultDtoOfSysUserDto>;
    protected processTaotaikhoanadmincoso(response: HttpResponseBase): Observable<CommonResultDtoOfSysUserDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    capnhapthongtin(body: UpdateUserDto | undefined): Observable<CommonResultDtoOfSysUserDto>;
    protected processCapnhapthongtin(response: HttpResponseBase): Observable<CommonResultDtoOfSysUserDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    doimatkhau(body: DoiMatKhauRequest | undefined): Observable<boolean>;
    protected processDoimatkhau(response: HttpResponseBase): Observable<boolean>;
    /**
     * @return Success
     */
    xoataikhoan(userId: string): Observable<CommonResultDtoOfGuid>;
    protected processXoataikhoan(response: HttpResponseBase): Observable<CommonResultDtoOfGuid>;
    /**
     * @return Success
     */
    lock(userId: string): Observable<string>;
    protected processLock(response: HttpResponseBase): Observable<string>;
    /**
     * @return Success
     */
    unlock(userId: string): Observable<string>;
    protected processUnlock(response: HttpResponseBase): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDef<TaikhoanadminServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<TaikhoanadminServiceProxy>;
}
export declare class TaikhoancosoServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: GetListUserCoSoRequest | undefined): Observable<PagedResultDtoOfSysUserDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfSysUserDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    taotaikhoancoso(body: CreateSysUserDto | undefined): Observable<CommonResultDtoOfSysUserDto>;
    protected processTaotaikhoancoso(response: HttpResponseBase): Observable<CommonResultDtoOfSysUserDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    capnhapthongtin(body: UpdateUserDto | undefined): Observable<CommonResultDtoOfSysUserDto>;
    protected processCapnhapthongtin(response: HttpResponseBase): Observable<CommonResultDtoOfSysUserDto>;
    /**
     * @param id (optional)
     * @return Success
     */
    getbyid(id: number | undefined): Observable<SysUserDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<SysUserDto>;
    /**
     * @return Success
     */
    getdanhsachrole(): Observable<RoleAbleDto[]>;
    protected processGetdanhsachrole(response: HttpResponseBase): Observable<RoleAbleDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    setroleforuser(body: SetRoleForUserRequest | undefined): Observable<number>;
    protected processSetroleforuser(response: HttpResponseBase): Observable<number>;
    /**
     * @param userId (optional)
     * @return Success
     */
    getuserrole(userId: number | undefined): Observable<SysUserRoleEntity[]>;
    protected processGetuserrole(response: HttpResponseBase): Observable<SysUserRoleEntity[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    doimatkhau(body: DoiMatKhauRequest | undefined): Observable<boolean>;
    protected processDoimatkhau(response: HttpResponseBase): Observable<boolean>;
    /**
     * @return Success
     */
    getlistcauhinhsysappprivate(): Observable<DanhSachCauHinhSysAppPrivateRoleDto>;
    protected processGetlistcauhinhsysappprivate(response: HttpResponseBase): Observable<DanhSachCauHinhSysAppPrivateRoleDto>;
    /**
     * @param id (optional)
     * @return Success
     */
    getlistdacauhinhsysapp(id: number | undefined): Observable<SysAppPrivateRoleDto[]>;
    protected processGetlistdacauhinhsysapp(response: HttpResponseBase): Observable<SysAppPrivateRoleDto[]>;
    /**
     * @param body (optional)
     * @return Success
     */
    luusysappprivateroleuser(body: LuuSysAppPrivateRoleUserRequset | undefined): Observable<number>;
    protected processLuusysappprivateroleuser(response: HttpResponseBase): Observable<number>;
    /**
     * @return Success
     */
    xoataikhoan(userId: string): Observable<CommonResultDtoOfGuid>;
    protected processXoataikhoan(response: HttpResponseBase): Observable<CommonResultDtoOfGuid>;
    /**
     * @return Success
     */
    lock(userId: string): Observable<string>;
    protected processLock(response: HttpResponseBase): Observable<string>;
    /**
     * @return Success
     */
    unlock(userId: string): Observable<string>;
    protected processUnlock(response: HttpResponseBase): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDef<TaikhoancosoServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<TaikhoancosoServiceProxy>;
}
export declare class ThamsobenhvienServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    updatevalue(body: ParamUpdateValueThamSoBenhVien | undefined): Observable<void>;
    protected processUpdatevalue(response: HttpResponseBase): Observable<void>;
    /**
     * @param body (optional)
     * @return Success
     */
    updatechanged(body: ParamsUpdateChangedThamSoBenhVien | undefined): Observable<void>;
    protected processUpdatechanged(response: HttpResponseBase): Observable<void>;
    /**
     * @return Success
     */
    dongbothamsohethong(): Observable<boolean>;
    protected processDongbothamsohethong(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param id (optional)
     * @return Success
     */
    cauhinhthamsohethong(id: number | undefined): Observable<boolean>;
    protected processCauhinhthamsohethong(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: ThamSoBenhVienPagedRequestDto | undefined): Observable<PagedResultDtoOfSysAppSettingsDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfSysAppSettingsDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<SysAppSettingsDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<SysAppSettingsDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: SysAppSettingsDto | undefined): Observable<SysAppSettingsDto>;
    protected processCreate(response: HttpResponseBase): Observable<SysAppSettingsDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: SysAppSettingsDto | undefined): Observable<SysAppSettingsDto>;
    protected processUpdate(response: HttpResponseBase): Observable<SysAppSettingsDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<ThamsobenhvienServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ThamsobenhvienServiceProxy>;
}
export declare class ThamsohethongServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: ThamSoHeThongPagedRequest | undefined): Observable<PagedResultDtoOfThamSoHeThongDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfThamSoHeThongDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<ThamSoHeThongDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<ThamSoHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: ThamSoHeThongDto | undefined): Observable<ThamSoHeThongDto>;
    protected processCreate(response: HttpResponseBase): Observable<ThamSoHeThongDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: ThamSoHeThongDto | undefined): Observable<ThamSoHeThongDto>;
    protected processUpdate(response: HttpResponseBase): Observable<ThamSoHeThongDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<ThamsohethongServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ThamsohethongServiceProxy>;
}
export declare class ThietbiServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedRequestThietBiDto | undefined): Observable<PagedResultDtoOfThietBiDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfThietBiDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<ThietBiDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<ThietBiDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: ThietBiDto | undefined): Observable<ThietBiDto>;
    protected processCreate(response: HttpResponseBase): Observable<ThietBiDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: ThietBiDto | undefined): Observable<ThietBiDto>;
    protected processUpdate(response: HttpResponseBase): Observable<ThietBiDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<ThietbiServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ThietbiServiceProxy>;
}
export declare class TienteServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: TienTeDto | undefined): Observable<TienTeDto>;
    protected processCreate(response: HttpResponseBase): Observable<TienTeDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: TienTeDto | undefined): Observable<TienTeDto>;
    protected processUpdate(response: HttpResponseBase): Observable<TienTeDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: TienTePagedRequestDto | undefined): Observable<PagedResultDtoOfTienTeDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfTienTeDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<TienTeDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<TienTeDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<TienteServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<TienteServiceProxy>;
}
export declare class TientetygiaServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: TienTeTyGiaPagedRequestDto | undefined): Observable<PagedResultDtoOfTienTeTyGiaDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfTienTeTyGiaDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<TienTeTyGiaDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<TienTeTyGiaDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: TienTeTyGiaDto | undefined): Observable<TienTeTyGiaDto>;
    protected processCreate(response: HttpResponseBase): Observable<TienTeTyGiaDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: TienTeTyGiaDto | undefined): Observable<TienTeTyGiaDto>;
    protected processUpdate(response: HttpResponseBase): Observable<TienTeTyGiaDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<TientetygiaServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<TientetygiaServiceProxy>;
}
export declare class ToathuocmauServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedRequestToaThuocMauDto | undefined): Observable<PagedResultDtoOfDSToaThuocMauDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfDSToaThuocMauDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<DSToaThuocMauDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<DSToaThuocMauDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: ToaThuocMauDto | undefined): Observable<DSToaThuocMauDto>;
    protected processCreate(response: HttpResponseBase): Observable<DSToaThuocMauDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: ToaThuocMauDto | undefined): Observable<DSToaThuocMauDto>;
    protected processUpdate(response: HttpResponseBase): Observable<DSToaThuocMauDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<ToathuocmauServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ToathuocmauServiceProxy>;
}
export declare class ToathuocmauchitietServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    removebycode(ma: string | null): Observable<void>;
    protected processRemovebycode(response: HttpResponseBase): Observable<void>;
    /**
     * @return Success
     */
    checkcode(ma: string | null): Observable<boolean>;
    protected processCheckcode(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    savetoathuocmauchitiet(body: ToaThuocMauDto[] | null | undefined): Observable<boolean>;
    protected processSavetoathuocmauchitiet(response: HttpResponseBase): Observable<boolean>;
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedRequestToaThuocMauChiTietDto | undefined): Observable<PagedResultDtoOfToaThuocMauDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfToaThuocMauDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<ToaThuocMauDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<ToaThuocMauDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: ToaThuocMauDto | undefined): Observable<ToaThuocMauDto>;
    protected processCreate(response: HttpResponseBase): Observable<ToaThuocMauDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: ToaThuocMauDto | undefined): Observable<ToaThuocMauDto>;
    protected processUpdate(response: HttpResponseBase): Observable<ToaThuocMauDto>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<ToathuocmauchitietServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ToathuocmauchitietServiceProxy>;
}
export declare class UserextensionServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @return Success
     */
    usersession(): Observable<UserSessionDto>;
    protected processUsersession(response: HttpResponseBase): Observable<UserSessionDto>;
    /**
     * @return Success
     */
    clearusersessioncache(): Observable<void>;
    protected processClearusersessioncache(response: HttpResponseBase): Observable<void>;
    /**
     * @return Success
     */
    switchbenhvienid(benhVienId: number | null): Observable<void>;
    protected processSwitchbenhvienid(response: HttpResponseBase): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDef<UserextensionServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<UserextensionServiceProxy>;
}
export declare class VacxinServiceProxy {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    /**
     * @param body (optional)
     * @return Success
     */
    getlist(body: PagedVacXinInputDto | undefined): Observable<PagedResultDtoOfVacXinDto>;
    protected processGetlist(response: HttpResponseBase): Observable<PagedResultDtoOfVacXinDto>;
    /**
     * @return Success
     */
    getbyid(id: number): Observable<VacXinDto>;
    protected processGetbyid(response: HttpResponseBase): Observable<VacXinDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    create(body: VacXinDto | undefined): Observable<VacXinDto>;
    protected processCreate(response: HttpResponseBase): Observable<VacXinDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    update(id: number, body: VacXinDto | undefined): Observable<VacXinDto>;
    protected processUpdate(response: HttpResponseBase): Observable<VacXinDto>;
    /**
     * @param body (optional)
     * @return Success
     */
    editvacxinkhangnguyen(body: VacXinDto | undefined): Observable<void>;
    protected processEditvacxinkhangnguyen(response: HttpResponseBase): Observable<void>;
    /**
     * @return Success
     */
    checktrungid(id: number): Observable<boolean>;
    protected processChecktrungid(response: HttpResponseBase): Observable<boolean>;
    /**
     * @return Success
     */
    removebyid(id: number): Observable<void>;
    protected processRemovebyid(response: HttpResponseBase): Observable<void>;
    /**
     * @return Success
     */
    comboboxdata(): Observable<ComboBoxDto[]>;
    protected processComboboxdata(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    /**
     * @return Success
     */
    vacxinextend(): Observable<ComboBoxDto[]>;
    protected processVacxinextend(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    /**
     * @param tcmr (optional)
     * @return Success
     */
    vacxinlapkehoach(tcmr: boolean | undefined): Observable<ComboBoxDto[]>;
    protected processVacxinlapkehoach(response: HttpResponseBase): Observable<ComboBoxDto[]>;
    static ɵfac: i0.ɵɵFactoryDef<VacxinServiceProxy, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<VacxinServiceProxy>;
}
export declare class ControllerInterfaceApiDescriptionModel implements IControllerInterfaceApiDescriptionModel {
    type: string | undefined;
    constructor(data?: IControllerInterfaceApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): ControllerInterfaceApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface IControllerInterfaceApiDescriptionModel {
    type: string | undefined;
}
export declare class MethodParameterApiDescriptionModel implements IMethodParameterApiDescriptionModel {
    name: string | undefined;
    typeAsString: string | undefined;
    type: string | undefined;
    typeSimple: string | undefined;
    isOptional: boolean;
    defaultValue: any | undefined;
    constructor(data?: IMethodParameterApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): MethodParameterApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface IMethodParameterApiDescriptionModel {
    name: string | undefined;
    typeAsString: string | undefined;
    type: string | undefined;
    typeSimple: string | undefined;
    isOptional: boolean;
    defaultValue: any | undefined;
}
export declare class ParameterApiDescriptionModel implements IParameterApiDescriptionModel {
    nameOnMethod: string | undefined;
    name: string | undefined;
    type: string | undefined;
    typeSimple: string | undefined;
    isOptional: boolean;
    defaultValue: any | undefined;
    constraintTypes: string[] | undefined;
    bindingSourceId: string | undefined;
    descriptorName: string | undefined;
    constructor(data?: IParameterApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): ParameterApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface IParameterApiDescriptionModel {
    nameOnMethod: string | undefined;
    name: string | undefined;
    type: string | undefined;
    typeSimple: string | undefined;
    isOptional: boolean;
    defaultValue: any | undefined;
    constraintTypes: string[] | undefined;
    bindingSourceId: string | undefined;
    descriptorName: string | undefined;
}
export declare class ReturnValueApiDescriptionModel implements IReturnValueApiDescriptionModel {
    type: string | undefined;
    typeSimple: string | undefined;
    constructor(data?: IReturnValueApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): ReturnValueApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface IReturnValueApiDescriptionModel {
    type: string | undefined;
    typeSimple: string | undefined;
}
export declare class ActionApiDescriptionModel implements IActionApiDescriptionModel {
    uniqueName: string | undefined;
    name: string | undefined;
    httpMethod: string | undefined;
    url: string | undefined;
    supportedVersions: string[] | undefined;
    parametersOnMethod: MethodParameterApiDescriptionModel[] | undefined;
    parameters: ParameterApiDescriptionModel[] | undefined;
    returnValue: ReturnValueApiDescriptionModel;
    constructor(data?: IActionApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): ActionApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface IActionApiDescriptionModel {
    uniqueName: string | undefined;
    name: string | undefined;
    httpMethod: string | undefined;
    url: string | undefined;
    supportedVersions: string[] | undefined;
    parametersOnMethod: MethodParameterApiDescriptionModel[] | undefined;
    parameters: ParameterApiDescriptionModel[] | undefined;
    returnValue: ReturnValueApiDescriptionModel;
}
export declare class ControllerApiDescriptionModel implements IControllerApiDescriptionModel {
    controllerName: string | undefined;
    type: string | undefined;
    interfaces: ControllerInterfaceApiDescriptionModel[] | undefined;
    actions: {
        [key: string]: ActionApiDescriptionModel;
    } | undefined;
    constructor(data?: IControllerApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): ControllerApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface IControllerApiDescriptionModel {
    controllerName: string | undefined;
    type: string | undefined;
    interfaces: ControllerInterfaceApiDescriptionModel[] | undefined;
    actions: {
        [key: string]: ActionApiDescriptionModel;
    } | undefined;
}
export declare class ModuleApiDescriptionModel implements IModuleApiDescriptionModel {
    rootPath: string | undefined;
    remoteServiceName: string | undefined;
    controllers: {
        [key: string]: ControllerApiDescriptionModel;
    } | undefined;
    constructor(data?: IModuleApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): ModuleApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface IModuleApiDescriptionModel {
    rootPath: string | undefined;
    remoteServiceName: string | undefined;
    controllers: {
        [key: string]: ControllerApiDescriptionModel;
    } | undefined;
}
export declare class PropertyApiDescriptionModel implements IPropertyApiDescriptionModel {
    name: string | undefined;
    type: string | undefined;
    typeSimple: string | undefined;
    constructor(data?: IPropertyApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): PropertyApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface IPropertyApiDescriptionModel {
    name: string | undefined;
    type: string | undefined;
    typeSimple: string | undefined;
}
export declare class TypeApiDescriptionModel implements ITypeApiDescriptionModel {
    baseType: string | undefined;
    isEnum: boolean;
    enumNames: string[] | undefined;
    enumValues: any[] | undefined;
    genericArguments: string[] | undefined;
    properties: PropertyApiDescriptionModel[] | undefined;
    constructor(data?: ITypeApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): TypeApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface ITypeApiDescriptionModel {
    baseType: string | undefined;
    isEnum: boolean;
    enumNames: string[] | undefined;
    enumValues: any[] | undefined;
    genericArguments: string[] | undefined;
    properties: PropertyApiDescriptionModel[] | undefined;
}
export declare class ApplicationApiDescriptionModel implements IApplicationApiDescriptionModel {
    modules: {
        [key: string]: ModuleApiDescriptionModel;
    } | undefined;
    types: {
        [key: string]: TypeApiDescriptionModel;
    } | undefined;
    constructor(data?: IApplicationApiDescriptionModel);
    init(data?: any): void;
    static fromJS(data: any): ApplicationApiDescriptionModel;
    toJSON(data?: any): any;
}
export interface IApplicationApiDescriptionModel {
    modules: {
        [key: string]: ModuleApiDescriptionModel;
    } | undefined;
    types: {
        [key: string]: TypeApiDescriptionModel;
    } | undefined;
}
export declare class RemoteServiceValidationErrorInfo implements IRemoteServiceValidationErrorInfo {
    message: string | undefined;
    members: string[] | undefined;
    constructor(data?: IRemoteServiceValidationErrorInfo);
    init(data?: any): void;
    static fromJS(data: any): RemoteServiceValidationErrorInfo;
    toJSON(data?: any): any;
}
export interface IRemoteServiceValidationErrorInfo {
    message: string | undefined;
    members: string[] | undefined;
}
export declare class RemoteServiceErrorInfo implements IRemoteServiceErrorInfo {
    code: string | undefined;
    message: string | undefined;
    details: string | undefined;
    data: {
        [key: string]: any;
    } | undefined;
    validationErrors: RemoteServiceValidationErrorInfo[] | undefined;
    constructor(data?: IRemoteServiceErrorInfo);
    init(data?: any): void;
    static fromJS(data: any): RemoteServiceErrorInfo;
    toJSON(data?: any): any;
}
export interface IRemoteServiceErrorInfo {
    code: string | undefined;
    message: string | undefined;
    details: string | undefined;
    data: {
        [key: string]: any;
    } | undefined;
    validationErrors: RemoteServiceValidationErrorInfo[] | undefined;
}
export declare class RemoteServiceErrorResponse implements IRemoteServiceErrorResponse {
    error: RemoteServiceErrorInfo;
    constructor(data?: IRemoteServiceErrorResponse);
    init(data?: any): void;
    static fromJS(data: any): RemoteServiceErrorResponse;
    toJSON(data?: any): any;
}
export interface IRemoteServiceErrorResponse {
    error: RemoteServiceErrorInfo;
}
export declare class LanguageInfo implements ILanguageInfo {
    readonly cultureName: string | undefined;
    readonly uiCultureName: string | undefined;
    readonly displayName: string | undefined;
    flagIcon: string | undefined;
    constructor(data?: ILanguageInfo);
    init(data?: any): void;
    static fromJS(data: any): LanguageInfo;
    toJSON(data?: any): any;
}
export interface ILanguageInfo {
    cultureName: string | undefined;
    uiCultureName: string | undefined;
    displayName: string | undefined;
    flagIcon: string | undefined;
}
export declare class DateTimeFormatDto implements IDateTimeFormatDto {
    calendarAlgorithmType: string | undefined;
    dateTimeFormatLong: string | undefined;
    shortDatePattern: string | undefined;
    fullDateTimePattern: string | undefined;
    dateSeparator: string | undefined;
    shortTimePattern: string | undefined;
    longTimePattern: string | undefined;
    constructor(data?: IDateTimeFormatDto);
    init(data?: any): void;
    static fromJS(data: any): DateTimeFormatDto;
    toJSON(data?: any): any;
}
export interface IDateTimeFormatDto {
    calendarAlgorithmType: string | undefined;
    dateTimeFormatLong: string | undefined;
    shortDatePattern: string | undefined;
    fullDateTimePattern: string | undefined;
    dateSeparator: string | undefined;
    shortTimePattern: string | undefined;
    longTimePattern: string | undefined;
}
export declare class CurrentCultureDto implements ICurrentCultureDto {
    displayName: string | undefined;
    englishName: string | undefined;
    threeLetterIsoLanguageName: string | undefined;
    twoLetterIsoLanguageName: string | undefined;
    isRightToLeft: boolean;
    cultureName: string | undefined;
    name: string | undefined;
    nativeName: string | undefined;
    dateTimeFormat: DateTimeFormatDto;
    constructor(data?: ICurrentCultureDto);
    init(data?: any): void;
    static fromJS(data: any): CurrentCultureDto;
    toJSON(data?: any): any;
}
export interface ICurrentCultureDto {
    displayName: string | undefined;
    englishName: string | undefined;
    threeLetterIsoLanguageName: string | undefined;
    twoLetterIsoLanguageName: string | undefined;
    isRightToLeft: boolean;
    cultureName: string | undefined;
    name: string | undefined;
    nativeName: string | undefined;
    dateTimeFormat: DateTimeFormatDto;
}
export declare class NameValue implements INameValue {
    name: string | undefined;
    value: string | undefined;
    constructor(data?: INameValue);
    init(data?: any): void;
    static fromJS(data: any): NameValue;
    toJSON(data?: any): any;
}
export interface INameValue {
    name: string | undefined;
    value: string | undefined;
}
export declare class ApplicationLocalizationConfigurationDto implements IApplicationLocalizationConfigurationDto {
    values: {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    languages: LanguageInfo[] | undefined;
    currentCulture: CurrentCultureDto;
    defaultResourceName: string | undefined;
    languagesMap: {
        [key: string]: NameValue[];
    } | undefined;
    languageFilesMap: {
        [key: string]: NameValue[];
    } | undefined;
    constructor(data?: IApplicationLocalizationConfigurationDto);
    init(data?: any): void;
    static fromJS(data: any): ApplicationLocalizationConfigurationDto;
    toJSON(data?: any): any;
}
export interface IApplicationLocalizationConfigurationDto {
    values: {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    languages: LanguageInfo[] | undefined;
    currentCulture: CurrentCultureDto;
    defaultResourceName: string | undefined;
    languagesMap: {
        [key: string]: NameValue[];
    } | undefined;
    languageFilesMap: {
        [key: string]: NameValue[];
    } | undefined;
}
export declare class ApplicationAuthConfigurationDto implements IApplicationAuthConfigurationDto {
    policies: {
        [key: string]: boolean;
    } | undefined;
    grantedPolicies: {
        [key: string]: boolean;
    } | undefined;
    constructor(data?: IApplicationAuthConfigurationDto);
    init(data?: any): void;
    static fromJS(data: any): ApplicationAuthConfigurationDto;
    toJSON(data?: any): any;
}
export interface IApplicationAuthConfigurationDto {
    policies: {
        [key: string]: boolean;
    } | undefined;
    grantedPolicies: {
        [key: string]: boolean;
    } | undefined;
}
export declare class ApplicationSettingConfigurationDto implements IApplicationSettingConfigurationDto {
    values: {
        [key: string]: string;
    } | undefined;
    constructor(data?: IApplicationSettingConfigurationDto);
    init(data?: any): void;
    static fromJS(data: any): ApplicationSettingConfigurationDto;
    toJSON(data?: any): any;
}
export interface IApplicationSettingConfigurationDto {
    values: {
        [key: string]: string;
    } | undefined;
}
export declare class CurrentUserDto implements ICurrentUserDto {
    isAuthenticated: boolean;
    id: string | undefined;
    tenantId: string | undefined;
    userName: string | undefined;
    name: string | undefined;
    surName: string | undefined;
    email: string | undefined;
    emailVerified: boolean;
    phoneNumber: string | undefined;
    phoneNumberVerified: boolean;
    roles: string[] | undefined;
    constructor(data?: ICurrentUserDto);
    init(data?: any): void;
    static fromJS(data: any): CurrentUserDto;
    toJSON(data?: any): any;
}
export interface ICurrentUserDto {
    isAuthenticated: boolean;
    id: string | undefined;
    tenantId: string | undefined;
    userName: string | undefined;
    name: string | undefined;
    surName: string | undefined;
    email: string | undefined;
    emailVerified: boolean;
    phoneNumber: string | undefined;
    phoneNumberVerified: boolean;
    roles: string[] | undefined;
}
export declare class ApplicationFeatureConfigurationDto implements IApplicationFeatureConfigurationDto {
    values: {
        [key: string]: string;
    } | undefined;
    constructor(data?: IApplicationFeatureConfigurationDto);
    init(data?: any): void;
    static fromJS(data: any): ApplicationFeatureConfigurationDto;
    toJSON(data?: any): any;
}
export interface IApplicationFeatureConfigurationDto {
    values: {
        [key: string]: string;
    } | undefined;
}
export declare class MultiTenancyInfoDto implements IMultiTenancyInfoDto {
    isEnabled: boolean;
    constructor(data?: IMultiTenancyInfoDto);
    init(data?: any): void;
    static fromJS(data: any): MultiTenancyInfoDto;
    toJSON(data?: any): any;
}
export interface IMultiTenancyInfoDto {
    isEnabled: boolean;
}
export declare class CurrentTenantDto implements ICurrentTenantDto {
    id: string | undefined;
    name: string | undefined;
    isAvailable: boolean;
    constructor(data?: ICurrentTenantDto);
    init(data?: any): void;
    static fromJS(data: any): CurrentTenantDto;
    toJSON(data?: any): any;
}
export interface ICurrentTenantDto {
    id: string | undefined;
    name: string | undefined;
    isAvailable: boolean;
}
export declare class IanaTimeZone implements IIanaTimeZone {
    timeZoneName: string | undefined;
    constructor(data?: IIanaTimeZone);
    init(data?: any): void;
    static fromJS(data: any): IanaTimeZone;
    toJSON(data?: any): any;
}
export interface IIanaTimeZone {
    timeZoneName: string | undefined;
}
export declare class WindowsTimeZone implements IWindowsTimeZone {
    timeZoneId: string | undefined;
    constructor(data?: IWindowsTimeZone);
    init(data?: any): void;
    static fromJS(data: any): WindowsTimeZone;
    toJSON(data?: any): any;
}
export interface IWindowsTimeZone {
    timeZoneId: string | undefined;
}
export declare class TimeZone implements ITimeZone {
    iana: IanaTimeZone;
    windows: WindowsTimeZone;
    constructor(data?: ITimeZone);
    init(data?: any): void;
    static fromJS(data: any): TimeZone;
    toJSON(data?: any): any;
}
export interface ITimeZone {
    iana: IanaTimeZone;
    windows: WindowsTimeZone;
}
export declare class TimingDto implements ITimingDto {
    timeZone: TimeZone;
    constructor(data?: ITimingDto);
    init(data?: any): void;
    static fromJS(data: any): TimingDto;
    toJSON(data?: any): any;
}
export interface ITimingDto {
    timeZone: TimeZone;
}
export declare class ClockDto implements IClockDto {
    kind: string | undefined;
    constructor(data?: IClockDto);
    init(data?: any): void;
    static fromJS(data: any): ClockDto;
    toJSON(data?: any): any;
}
export interface IClockDto {
    kind: string | undefined;
}
export declare class LocalizableStringDto implements ILocalizableStringDto {
    readonly name: string | undefined;
    resource: string | undefined;
    constructor(data?: ILocalizableStringDto);
    init(data?: any): void;
    static fromJS(data: any): LocalizableStringDto;
    toJSON(data?: any): any;
}
export interface ILocalizableStringDto {
    name: string | undefined;
    resource: string | undefined;
}
export declare class ExtensionPropertyApiGetDto implements IExtensionPropertyApiGetDto {
    isAvailable: boolean;
    constructor(data?: IExtensionPropertyApiGetDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionPropertyApiGetDto;
    toJSON(data?: any): any;
}
export interface IExtensionPropertyApiGetDto {
    isAvailable: boolean;
}
export declare class ExtensionPropertyApiCreateDto implements IExtensionPropertyApiCreateDto {
    isAvailable: boolean;
    constructor(data?: IExtensionPropertyApiCreateDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionPropertyApiCreateDto;
    toJSON(data?: any): any;
}
export interface IExtensionPropertyApiCreateDto {
    isAvailable: boolean;
}
export declare class ExtensionPropertyApiUpdateDto implements IExtensionPropertyApiUpdateDto {
    isAvailable: boolean;
    constructor(data?: IExtensionPropertyApiUpdateDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionPropertyApiUpdateDto;
    toJSON(data?: any): any;
}
export interface IExtensionPropertyApiUpdateDto {
    isAvailable: boolean;
}
export declare class ExtensionPropertyApiDto implements IExtensionPropertyApiDto {
    onGet: ExtensionPropertyApiGetDto;
    onCreate: ExtensionPropertyApiCreateDto;
    onUpdate: ExtensionPropertyApiUpdateDto;
    constructor(data?: IExtensionPropertyApiDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionPropertyApiDto;
    toJSON(data?: any): any;
}
export interface IExtensionPropertyApiDto {
    onGet: ExtensionPropertyApiGetDto;
    onCreate: ExtensionPropertyApiCreateDto;
    onUpdate: ExtensionPropertyApiUpdateDto;
}
export declare class ExtensionPropertyUiTableDto implements IExtensionPropertyUiTableDto {
    isVisible: boolean;
    constructor(data?: IExtensionPropertyUiTableDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionPropertyUiTableDto;
    toJSON(data?: any): any;
}
export interface IExtensionPropertyUiTableDto {
    isVisible: boolean;
}
export declare class ExtensionPropertyUiFormDto implements IExtensionPropertyUiFormDto {
    isVisible: boolean;
    constructor(data?: IExtensionPropertyUiFormDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionPropertyUiFormDto;
    toJSON(data?: any): any;
}
export interface IExtensionPropertyUiFormDto {
    isVisible: boolean;
}
export declare class ExtensionPropertyUiDto implements IExtensionPropertyUiDto {
    onTable: ExtensionPropertyUiTableDto;
    onCreateForm: ExtensionPropertyUiFormDto;
    onEditForm: ExtensionPropertyUiFormDto;
    constructor(data?: IExtensionPropertyUiDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionPropertyUiDto;
    toJSON(data?: any): any;
}
export interface IExtensionPropertyUiDto {
    onTable: ExtensionPropertyUiTableDto;
    onCreateForm: ExtensionPropertyUiFormDto;
    onEditForm: ExtensionPropertyUiFormDto;
}
export declare class ExtensionPropertyAttributeDto implements IExtensionPropertyAttributeDto {
    typeSimple: string | undefined;
    config: {
        [key: string]: any;
    } | undefined;
    constructor(data?: IExtensionPropertyAttributeDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionPropertyAttributeDto;
    toJSON(data?: any): any;
}
export interface IExtensionPropertyAttributeDto {
    typeSimple: string | undefined;
    config: {
        [key: string]: any;
    } | undefined;
}
export declare class ExtensionPropertyDto implements IExtensionPropertyDto {
    type: string | undefined;
    typeSimple: string | undefined;
    displayName: LocalizableStringDto;
    api: ExtensionPropertyApiDto;
    ui: ExtensionPropertyUiDto;
    attributes: ExtensionPropertyAttributeDto[] | undefined;
    configuration: {
        [key: string]: any;
    } | undefined;
    defaultValue: any | undefined;
    constructor(data?: IExtensionPropertyDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionPropertyDto;
    toJSON(data?: any): any;
}
export interface IExtensionPropertyDto {
    type: string | undefined;
    typeSimple: string | undefined;
    displayName: LocalizableStringDto;
    api: ExtensionPropertyApiDto;
    ui: ExtensionPropertyUiDto;
    attributes: ExtensionPropertyAttributeDto[] | undefined;
    configuration: {
        [key: string]: any;
    } | undefined;
    defaultValue: any | undefined;
}
export declare class EntityExtensionDto implements IEntityExtensionDto {
    properties: {
        [key: string]: ExtensionPropertyDto;
    } | undefined;
    configuration: {
        [key: string]: any;
    } | undefined;
    constructor(data?: IEntityExtensionDto);
    init(data?: any): void;
    static fromJS(data: any): EntityExtensionDto;
    toJSON(data?: any): any;
}
export interface IEntityExtensionDto {
    properties: {
        [key: string]: ExtensionPropertyDto;
    } | undefined;
    configuration: {
        [key: string]: any;
    } | undefined;
}
export declare class ModuleExtensionDto implements IModuleExtensionDto {
    entities: {
        [key: string]: EntityExtensionDto;
    } | undefined;
    configuration: {
        [key: string]: any;
    } | undefined;
    constructor(data?: IModuleExtensionDto);
    init(data?: any): void;
    static fromJS(data: any): ModuleExtensionDto;
    toJSON(data?: any): any;
}
export interface IModuleExtensionDto {
    entities: {
        [key: string]: EntityExtensionDto;
    } | undefined;
    configuration: {
        [key: string]: any;
    } | undefined;
}
export declare class ExtensionEnumFieldDto implements IExtensionEnumFieldDto {
    name: string | undefined;
    value: any | undefined;
    constructor(data?: IExtensionEnumFieldDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionEnumFieldDto;
    toJSON(data?: any): any;
}
export interface IExtensionEnumFieldDto {
    name: string | undefined;
    value: any | undefined;
}
export declare class ExtensionEnumDto implements IExtensionEnumDto {
    fields: ExtensionEnumFieldDto[] | undefined;
    localizationResource: string | undefined;
    constructor(data?: IExtensionEnumDto);
    init(data?: any): void;
    static fromJS(data: any): ExtensionEnumDto;
    toJSON(data?: any): any;
}
export interface IExtensionEnumDto {
    fields: ExtensionEnumFieldDto[] | undefined;
    localizationResource: string | undefined;
}
export declare class ObjectExtensionsDto implements IObjectExtensionsDto {
    modules: {
        [key: string]: ModuleExtensionDto;
    } | undefined;
    enums: {
        [key: string]: ExtensionEnumDto;
    } | undefined;
    constructor(data?: IObjectExtensionsDto);
    init(data?: any): void;
    static fromJS(data: any): ObjectExtensionsDto;
    toJSON(data?: any): any;
}
export interface IObjectExtensionsDto {
    modules: {
        [key: string]: ModuleExtensionDto;
    } | undefined;
    enums: {
        [key: string]: ExtensionEnumDto;
    } | undefined;
}
export declare class ApplicationConfigurationDto implements IApplicationConfigurationDto {
    localization: ApplicationLocalizationConfigurationDto;
    auth: ApplicationAuthConfigurationDto;
    setting: ApplicationSettingConfigurationDto;
    currentUser: CurrentUserDto;
    features: ApplicationFeatureConfigurationDto;
    multiTenancy: MultiTenancyInfoDto;
    currentTenant: CurrentTenantDto;
    timing: TimingDto;
    clock: ClockDto;
    objectExtensions: ObjectExtensionsDto;
    constructor(data?: IApplicationConfigurationDto);
    init(data?: any): void;
    static fromJS(data: any): ApplicationConfigurationDto;
    toJSON(data?: any): any;
}
export interface IApplicationConfigurationDto {
    localization: ApplicationLocalizationConfigurationDto;
    auth: ApplicationAuthConfigurationDto;
    setting: ApplicationSettingConfigurationDto;
    currentUser: CurrentUserDto;
    features: ApplicationFeatureConfigurationDto;
    multiTenancy: MultiTenancyInfoDto;
    currentTenant: CurrentTenantDto;
    timing: TimingDto;
    clock: ClockDto;
    objectExtensions: ObjectExtensionsDto;
}
export declare class FindTenantResultDto implements IFindTenantResultDto {
    success: boolean;
    tenantId: string | undefined;
    name: string | undefined;
    constructor(data?: IFindTenantResultDto);
    init(data?: any): void;
    static fromJS(data: any): FindTenantResultDto;
    toJSON(data?: any): any;
}
export interface IFindTenantResultDto {
    success: boolean;
    tenantId: string | undefined;
    name: string | undefined;
}
export declare enum ExportModel {
    Default = 0,
    TrangHienTai = 1,
    ToanBo = 2
}
export declare enum OutputFileExtension {
    Excel = 1,
    Pdf = 2,
    Word = 3,
    Excel2003 = 4,
    PdfAllSheet = 5
}
export declare class BenhVienPagedRequestDto implements IBenhVienPagedRequestDto {
    loaiBenhVien: number | undefined;
    tuyenBenhVien: number | undefined;
    hangBenhVien: string | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    benhVienChaId: number | undefined;
    coQuanChuQuanId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IBenhVienPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): BenhVienPagedRequestDto;
    toJSON(data?: any): any;
}
export interface IBenhVienPagedRequestDto {
    loaiBenhVien: number | undefined;
    tuyenBenhVien: number | undefined;
    hangBenhVien: string | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    benhVienChaId: number | undefined;
    coQuanChuQuanId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class BenhVienDtoMinify implements IBenhVienDtoMinify {
    ma: string | undefined;
    ten: string | undefined;
    diaChi: string | undefined;
    id: number;
    constructor(data?: IBenhVienDtoMinify);
    init(data?: any): void;
    static fromJS(data: any): BenhVienDtoMinify;
    toJSON(data?: any): any;
}
export interface IBenhVienDtoMinify {
    ma: string | undefined;
    ten: string | undefined;
    diaChi: string | undefined;
    id: number;
}
export declare class BenhVienDto implements IBenhVienDto {
    ma: string | undefined;
    ten: string | undefined;
    loaiBenhVien: number | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    diaChi: string | undefined;
    benhVienChaId: number | undefined;
    tuyenBenhVien: number | undefined;
    hangBenhVien: string | undefined;
    soDienThoai: string | undefined;
    email: string | undefined;
    fax: string | undefined;
    coQuanChuQuanId: number | undefined;
    isActive: boolean;
    tenTinh: string | undefined;
    tenHuyen: string | undefined;
    tenXa: string | undefined;
    benhVienChaDto: BenhVienDtoMinify;
    coQuanChuQuanDto: BenhVienDtoMinify;
    id: number;
    constructor(data?: IBenhVienDto);
    init(data?: any): void;
    static fromJS(data: any): BenhVienDto;
    toJSON(data?: any): any;
}
export interface IBenhVienDto {
    ma: string | undefined;
    ten: string | undefined;
    loaiBenhVien: number | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    diaChi: string | undefined;
    benhVienChaId: number | undefined;
    tuyenBenhVien: number | undefined;
    hangBenhVien: string | undefined;
    soDienThoai: string | undefined;
    email: string | undefined;
    fax: string | undefined;
    coQuanChuQuanId: number | undefined;
    isActive: boolean;
    tenTinh: string | undefined;
    tenHuyen: string | undefined;
    tenXa: string | undefined;
    benhVienChaDto: BenhVienDtoMinify;
    coQuanChuQuanDto: BenhVienDtoMinify;
    id: number;
}
export declare class PagedResultDtoOfBenhVienDto implements IPagedResultDtoOfBenhVienDto {
    totalCount: number;
    items: BenhVienDto[] | undefined;
    constructor(data?: IPagedResultDtoOfBenhVienDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfBenhVienDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfBenhVienDto {
    totalCount: number;
    items: BenhVienDto[] | undefined;
}
export declare class CoSoYTeAutoDataSourceRequest implements ICoSoYTeAutoDataSourceRequest {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: ICoSoYTeAutoDataSourceRequest);
    init(data?: any): void;
    static fromJS(data: any): CoSoYTeAutoDataSourceRequest;
    toJSON(data?: any): any;
}
export interface ICoSoYTeAutoDataSourceRequest {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class CoSoYTeAutoDataSourceDto implements ICoSoYTeAutoDataSourceDto {
    ma: string | undefined;
    ten: string | undefined;
    diaChi: string | undefined;
    id: number;
    constructor(data?: ICoSoYTeAutoDataSourceDto);
    init(data?: any): void;
    static fromJS(data: any): CoSoYTeAutoDataSourceDto;
    toJSON(data?: any): any;
}
export interface ICoSoYTeAutoDataSourceDto {
    ma: string | undefined;
    ten: string | undefined;
    diaChi: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfCoSoYTeAutoDataSourceDto implements IPagedResultDtoOfCoSoYTeAutoDataSourceDto {
    totalCount: number;
    items: CoSoYTeAutoDataSourceDto[] | undefined;
    constructor(data?: IPagedResultDtoOfCoSoYTeAutoDataSourceDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfCoSoYTeAutoDataSourceDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfCoSoYTeAutoDataSourceDto {
    totalCount: number;
    items: CoSoYTeAutoDataSourceDto[] | undefined;
}
export declare class CoSoYTeDaCoDaiLyAutoDataSourceRequest implements ICoSoYTeDaCoDaiLyAutoDataSourceRequest {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: ICoSoYTeDaCoDaiLyAutoDataSourceRequest);
    init(data?: any): void;
    static fromJS(data: any): CoSoYTeDaCoDaiLyAutoDataSourceRequest;
    toJSON(data?: any): any;
}
export interface ICoSoYTeDaCoDaiLyAutoDataSourceRequest {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class ComboBoxDto implements IComboBoxDto {
    value: string | undefined;
    displayText: string | undefined;
    data: any | undefined;
    isActive: boolean;
    constructor(data?: IComboBoxDto);
    init(data?: any): void;
    static fromJS(data: any): ComboBoxDto;
    toJSON(data?: any): any;
}
export interface IComboBoxDto {
    value: string | undefined;
    displayText: string | undefined;
    data: any | undefined;
    isActive: boolean;
}
export declare class DichVuSoKhamOutputDto implements IDichVuSoKhamOutputDto {
    dichVuId: number;
    tenDichVu: string | undefined;
    maDichVu: string | undefined;
    isChecked: boolean;
    soKhamId: number;
    id: number;
    constructor(data?: IDichVuSoKhamOutputDto);
    init(data?: any): void;
    static fromJS(data: any): DichVuSoKhamOutputDto;
    toJSON(data?: any): any;
}
export interface IDichVuSoKhamOutputDto {
    dichVuId: number;
    tenDichVu: string | undefined;
    maDichVu: string | undefined;
    isChecked: boolean;
    soKhamId: number;
    id: number;
}
export declare class PagedRequestDichVuSoKhamDto implements IPagedRequestDichVuSoKhamDto {
    nhomDichVuId: number | undefined;
    soKhamId: number;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedRequestDichVuSoKhamDto);
    init(data?: any): void;
    static fromJS(data: any): PagedRequestDichVuSoKhamDto;
    toJSON(data?: any): any;
}
export interface IPagedRequestDichVuSoKhamDto {
    nhomDichVuId: number | undefined;
    soKhamId: number;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfDichVuSoKhamOutputDto implements IPagedResultDtoOfDichVuSoKhamOutputDto {
    totalCount: number;
    items: DichVuSoKhamOutputDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDichVuSoKhamOutputDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDichVuSoKhamOutputDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDichVuSoKhamOutputDto {
    totalCount: number;
    items: DichVuSoKhamOutputDto[] | undefined;
}
export declare class DichVuSoKhamDto implements IDichVuSoKhamDto {
    dichVuId: number;
    soKhamBenhId: number;
    benhVienId: number;
    isActive: boolean;
    id: number;
    constructor(data?: IDichVuSoKhamDto);
    init(data?: any): void;
    static fromJS(data: any): DichVuSoKhamDto;
    toJSON(data?: any): any;
}
export interface IDichVuSoKhamDto {
    dichVuId: number;
    soKhamBenhId: number;
    benhVienId: number;
    isActive: boolean;
    id: number;
}
export declare class KhoDoiTuongDto implements IKhoDoiTuongDto {
    khoId: number;
    listDoiTuongId: number[] | undefined;
    constructor(data?: IKhoDoiTuongDto);
    init(data?: any): void;
    static fromJS(data: any): KhoDoiTuongDto;
    toJSON(data?: any): any;
}
export interface IKhoDoiTuongDto {
    khoId: number;
    listDoiTuongId: number[] | undefined;
}
export declare class DichVuPagedRequestDto implements IDichVuPagedRequestDto {
    isExportDefault: boolean | undefined;
    lv: number | undefined;
    type: string | undefined;
    loaiNhomId: number | undefined;
    isDichVuDungChung: number | undefined;
    hieuLucTuNgay: string | undefined;
    hieuLucToiNgay: string | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IDichVuPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): DichVuPagedRequestDto;
    toJSON(data?: any): any;
}
export interface IDichVuPagedRequestDto {
    isExportDefault: boolean | undefined;
    lv: number | undefined;
    type: string | undefined;
    loaiNhomId: number | undefined;
    isDichVuDungChung: number | undefined;
    hieuLucTuNgay: string | undefined;
    hieuLucToiNgay: string | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class DichVuDto implements IDichVuDto {
    stt: number;
    nhomDichVuId: number;
    loaiDichVuId: number;
    dichVuDonGiaId: number;
    ma: string | undefined;
    maDvkt: string | undefined;
    ten: string | undefined;
    tenDvkt: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    cap: number | undefined;
    parentId: number | undefined;
    donViTinh: string | undefined;
    sttDmByt: string | undefined;
    sttPheDuyet: string | undefined;
    maTT37: string | undefined;
    maDmdc: string | undefined;
    dmdcDichVuId: number | undefined;
    tyLeThanhToanBHYT: number | undefined;
    goi: boolean | undefined;
    coGiaDichVu: boolean | undefined;
    coGiaTriChuan: boolean | undefined;
    tenNhomDichVu: string | undefined;
    tenLoaiDichVu: string | undefined;
    benhVienId: number;
    counter: number;
    donGiaBHYT: number | undefined;
    donGiaQuanNhan: number | undefined;
    maGia: string | undefined;
    donGiaBenhVien: number | undefined;
    quyetDinh: string | undefined;
    congBo: string | undefined;
    maCoSoKCB: string | undefined;
    isActive: boolean;
    tamNgung: number;
    isExists: boolean;
    isDeleted: boolean;
    id: number;
    constructor(data?: IDichVuDto);
    init(data?: any): void;
    static fromJS(data: any): DichVuDto;
    toJSON(data?: any): any;
}
export interface IDichVuDto {
    stt: number;
    nhomDichVuId: number;
    loaiDichVuId: number;
    dichVuDonGiaId: number;
    ma: string | undefined;
    maDvkt: string | undefined;
    ten: string | undefined;
    tenDvkt: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    cap: number | undefined;
    parentId: number | undefined;
    donViTinh: string | undefined;
    sttDmByt: string | undefined;
    sttPheDuyet: string | undefined;
    maTT37: string | undefined;
    maDmdc: string | undefined;
    dmdcDichVuId: number | undefined;
    tyLeThanhToanBHYT: number | undefined;
    goi: boolean | undefined;
    coGiaDichVu: boolean | undefined;
    coGiaTriChuan: boolean | undefined;
    tenNhomDichVu: string | undefined;
    tenLoaiDichVu: string | undefined;
    benhVienId: number;
    counter: number;
    donGiaBHYT: number | undefined;
    donGiaQuanNhan: number | undefined;
    maGia: string | undefined;
    donGiaBenhVien: number | undefined;
    quyetDinh: string | undefined;
    congBo: string | undefined;
    maCoSoKCB: string | undefined;
    isActive: boolean;
    tamNgung: number;
    isExists: boolean;
    isDeleted: boolean;
    id: number;
}
export declare class PagedResultDtoOfDichVuDto implements IPagedResultDtoOfDichVuDto {
    totalCount: number;
    items: DichVuDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDichVuDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDichVuDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDichVuDto {
    totalCount: number;
    items: DichVuDto[] | undefined;
}
export declare class DichVuDonGiaRequestDto implements IDichVuDonGiaRequestDto {
    id: number;
    benhVienId: number;
    donGiaBHYT: number;
    donGiaQuanNhan: number;
    donGiaBenhVien: number;
    constructor(data?: IDichVuDonGiaRequestDto);
    init(data?: any): void;
    static fromJS(data: any): DichVuDonGiaRequestDto;
    toJSON(data?: any): any;
}
export interface IDichVuDonGiaRequestDto {
    id: number;
    benhVienId: number;
    donGiaBHYT: number;
    donGiaQuanNhan: number;
    donGiaBenhVien: number;
}
export declare class ListDichVuDonGiaRequestDto implements IListDichVuDonGiaRequestDto {
    input: DichVuDonGiaRequestDto[] | undefined;
    isExportDefault: boolean | undefined;
    lv: number | undefined;
    type: string | undefined;
    loaiNhomId: number | undefined;
    isDichVuDungChung: number | undefined;
    hieuLucTuNgay: string | undefined;
    hieuLucToiNgay: string | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IListDichVuDonGiaRequestDto);
    init(data?: any): void;
    static fromJS(data: any): ListDichVuDonGiaRequestDto;
    toJSON(data?: any): any;
}
export interface IListDichVuDonGiaRequestDto {
    input: DichVuDonGiaRequestDto[] | undefined;
    isExportDefault: boolean | undefined;
    lv: number | undefined;
    type: string | undefined;
    loaiNhomId: number | undefined;
    isDichVuDungChung: number | undefined;
    hieuLucTuNgay: string | undefined;
    hieuLucToiNgay: string | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class ItemExistsPagedResultDtoOfDichVuDto implements IItemExistsPagedResultDtoOfDichVuDto {
    isExists: boolean;
    isSuccess: boolean;
    totalCount: number;
    items: DichVuDto[] | undefined;
    constructor(data?: IItemExistsPagedResultDtoOfDichVuDto);
    init(data?: any): void;
    static fromJS(data: any): ItemExistsPagedResultDtoOfDichVuDto;
    toJSON(data?: any): any;
}
export interface IItemExistsPagedResultDtoOfDichVuDto {
    isExists: boolean;
    isSuccess: boolean;
    totalCount: number;
    items: DichVuDto[] | undefined;
}
export declare class UpdateEffectiveDateRequestDto implements IUpdateEffectiveDateRequestDto {
    hieuLucTuNgay: string | undefined;
    hieuLucToiNgay: string | undefined;
    hieuLucTuNgayOld: string | undefined;
    hieuLucToiNgayOld: string | undefined;
    constructor(data?: IUpdateEffectiveDateRequestDto);
    init(data?: any): void;
    static fromJS(data: any): UpdateEffectiveDateRequestDto;
    toJSON(data?: any): any;
}
export interface IUpdateEffectiveDateRequestDto {
    hieuLucTuNgay: string | undefined;
    hieuLucToiNgay: string | undefined;
    hieuLucTuNgayOld: string | undefined;
    hieuLucToiNgayOld: string | undefined;
}
export declare class DichVuRequestDto implements IDichVuRequestDto {
    ten: string | undefined;
    ma: string | undefined;
    donGiaBenhVien: number | undefined;
    donGiaBHYT: number | undefined;
    donGiaQuanNhan: number | undefined;
    phuThu: number;
    trangThai: number;
    id: number;
    constructor(data?: IDichVuRequestDto);
    init(data?: any): void;
    static fromJS(data: any): DichVuRequestDto;
    toJSON(data?: any): any;
}
export interface IDichVuRequestDto {
    ten: string | undefined;
    ma: string | undefined;
    donGiaBenhVien: number | undefined;
    donGiaBHYT: number | undefined;
    donGiaQuanNhan: number | undefined;
    phuThu: number;
    trangThai: number;
    id: number;
}
export declare class ImportDichVuRequestDto implements IImportDichVuRequestDto {
    items: DichVuRequestDto[] | undefined;
    loaiDichVuId: number | undefined;
    nhomDichVuId: number | undefined;
    constructor(data?: IImportDichVuRequestDto);
    init(data?: any): void;
    static fromJS(data: any): ImportDichVuRequestDto;
    toJSON(data?: any): any;
}
export interface IImportDichVuRequestDto {
    items: DichVuRequestDto[] | undefined;
    loaiDichVuId: number | undefined;
    nhomDichVuId: number | undefined;
}
export declare class ImportDichVuResultDto implements IImportDichVuResultDto {
    ma: string | undefined;
    constructor(data?: IImportDichVuResultDto);
    init(data?: any): void;
    static fromJS(data: any): ImportDichVuResultDto;
    toJSON(data?: any): any;
}
export interface IImportDichVuResultDto {
    ma: string | undefined;
}
export declare class FileDto implements IFileDto {
    fileName: string;
    fileType: string | undefined;
    fileToken: string;
    fileBytes: string | undefined;
    fileBase64: string | undefined;
    constructor(data?: IFileDto);
    init(data?: any): void;
    static fromJS(data: any): FileDto;
    toJSON(data?: any): any;
}
export interface IFileDto {
    fileName: string;
    fileType: string | undefined;
    fileToken: string;
    fileBytes: string | undefined;
    fileBase64: string | undefined;
}
export declare class CauHinhHeThongDto implements ICauHinhHeThongDto {
    loaiTaiKhoan: string | undefined;
    strLoaiTaiKhoan: string | undefined;
    settingId: string | undefined;
    url: string | undefined;
    id: number;
    constructor(data?: ICauHinhHeThongDto);
    init(data?: any): void;
    static fromJS(data: any): CauHinhHeThongDto;
    toJSON(data?: any): any;
}
export interface ICauHinhHeThongDto {
    loaiTaiKhoan: string | undefined;
    strLoaiTaiKhoan: string | undefined;
    settingId: string | undefined;
    url: string | undefined;
    id: number;
}
export declare class PagedFullRequestDto implements IPagedFullRequestDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedFullRequestDto);
    init(data?: any): void;
    static fromJS(data: any): PagedFullRequestDto;
    toJSON(data?: any): any;
}
export interface IPagedFullRequestDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfCauHinhHeThongDto implements IPagedResultDtoOfCauHinhHeThongDto {
    totalCount: number;
    items: CauHinhHeThongDto[] | undefined;
    constructor(data?: IPagedResultDtoOfCauHinhHeThongDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfCauHinhHeThongDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfCauHinhHeThongDto {
    totalCount: number;
    items: CauHinhHeThongDto[] | undefined;
}
export declare class PhongBanDichVuOutputDto implements IPhongBanDichVuOutputDto {
    dichVuId: number;
    phongBanId: number;
    benhVienId: number;
    tenDichVu: string | undefined;
    maDichVu: string | undefined;
    isChecked: boolean;
    pbdvId: number;
    id: number;
    constructor(data?: IPhongBanDichVuOutputDto);
    init(data?: any): void;
    static fromJS(data: any): PhongBanDichVuOutputDto;
    toJSON(data?: any): any;
}
export interface IPhongBanDichVuOutputDto {
    dichVuId: number;
    phongBanId: number;
    benhVienId: number;
    tenDichVu: string | undefined;
    maDichVu: string | undefined;
    isChecked: boolean;
    pbdvId: number;
    id: number;
}
export declare class PagedRequestPhongBanDichVuDto implements IPagedRequestPhongBanDichVuDto {
    nhomDichVuId: number | undefined;
    phongBanId: number;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedRequestPhongBanDichVuDto);
    init(data?: any): void;
    static fromJS(data: any): PagedRequestPhongBanDichVuDto;
    toJSON(data?: any): any;
}
export interface IPagedRequestPhongBanDichVuDto {
    nhomDichVuId: number | undefined;
    phongBanId: number;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfPhongBanDichVuOutputDto implements IPagedResultDtoOfPhongBanDichVuOutputDto {
    totalCount: number;
    items: PhongBanDichVuOutputDto[] | undefined;
    constructor(data?: IPagedResultDtoOfPhongBanDichVuOutputDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfPhongBanDichVuOutputDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfPhongBanDichVuOutputDto {
    totalCount: number;
    items: PhongBanDichVuOutputDto[] | undefined;
}
export declare class PhongBanDichVuDto implements IPhongBanDichVuDto {
    dichVuId: number;
    phongBanId: number;
    benhVienId: number;
    id: number;
    constructor(data?: IPhongBanDichVuDto);
    init(data?: any): void;
    static fromJS(data: any): PhongBanDichVuDto;
    toJSON(data?: any): any;
}
export interface IPhongBanDichVuDto {
    dichVuId: number;
    phongBanId: number;
    benhVienId: number;
    id: number;
}
export declare class CauHinhTaiKhoanLienThongDto implements ICauHinhTaiKhoanLienThongDto {
    loaiTaiKhoan: string | undefined;
    tenDangNhap: string | undefined;
    matKhauMaHoa: string | undefined;
    benhVienId: number;
    settingId: string | undefined;
    url: string | undefined;
    id: number;
    constructor(data?: ICauHinhTaiKhoanLienThongDto);
    init(data?: any): void;
    static fromJS(data: any): CauHinhTaiKhoanLienThongDto;
    toJSON(data?: any): any;
}
export interface ICauHinhTaiKhoanLienThongDto {
    loaiTaiKhoan: string | undefined;
    tenDangNhap: string | undefined;
    matKhauMaHoa: string | undefined;
    benhVienId: number;
    settingId: string | undefined;
    url: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfCauHinhTaiKhoanLienThongDto implements IPagedResultDtoOfCauHinhTaiKhoanLienThongDto {
    totalCount: number;
    items: CauHinhTaiKhoanLienThongDto[] | undefined;
    constructor(data?: IPagedResultDtoOfCauHinhTaiKhoanLienThongDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfCauHinhTaiKhoanLienThongDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfCauHinhTaiKhoanLienThongDto {
    totalCount: number;
    items: CauHinhTaiKhoanLienThongDto[] | undefined;
}
export declare class ChuongTrinhDto implements IChuongTrinhDto {
    ma: string | undefined;
    ten: string | undefined;
    benhVienId: number;
    isActive: boolean;
    id: number;
    constructor(data?: IChuongTrinhDto);
    init(data?: any): void;
    static fromJS(data: any): ChuongTrinhDto;
    toJSON(data?: any): any;
}
export interface IChuongTrinhDto {
    ma: string | undefined;
    ten: string | undefined;
    benhVienId: number;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfChuongTrinhDto implements IPagedResultDtoOfChuongTrinhDto {
    totalCount: number;
    items: ChuongTrinhDto[] | undefined;
    constructor(data?: IPagedResultDtoOfChuongTrinhDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfChuongTrinhDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfChuongTrinhDto {
    totalCount: number;
    items: ChuongTrinhDto[] | undefined;
}
export declare class GetComboDataFromDataBaseInputDto implements IGetComboDataFromDataBaseInputDto {
    tableName: string | undefined;
    cascaderId: number | undefined;
    cascaderMa: string | undefined;
    benhVienId: number;
    constructor(data?: IGetComboDataFromDataBaseInputDto);
    init(data?: any): void;
    static fromJS(data: any): GetComboDataFromDataBaseInputDto;
    toJSON(data?: any): any;
}
export interface IGetComboDataFromDataBaseInputDto {
    tableName: string | undefined;
    cascaderId: number | undefined;
    cascaderMa: string | undefined;
    benhVienId: number;
}
export declare class ChildrenDataDto implements IChildrenDataDto {
    id: number;
    ma: string | undefined;
    title: string | undefined;
    readonly isLeaf: boolean;
    constructor(data?: IChildrenDataDto);
    init(data?: any): void;
    static fromJS(data: any): ChildrenDataDto;
    toJSON(data?: any): any;
}
export interface IChildrenDataDto {
    id: number;
    ma: string | undefined;
    title: string | undefined;
    isLeaf: boolean;
}
export declare class DoiTuongTreeDto implements IDoiTuongTreeDto {
    nhomDoiTuongId: number;
    title: string | undefined;
    readonly isExpanded: boolean;
    children: ChildrenDataDto[] | undefined;
    constructor(data?: IDoiTuongTreeDto);
    init(data?: any): void;
    static fromJS(data: any): DoiTuongTreeDto;
    toJSON(data?: any): any;
}
export interface IDoiTuongTreeDto {
    nhomDoiTuongId: number;
    title: string | undefined;
    isExpanded: boolean;
    children: ChildrenDataDto[] | undefined;
}
export declare class DoiTuongDto implements IDoiTuongDto {
    nhomDoiTuongId: number;
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    ngayHieuLuc: moment.Moment | undefined;
    ngayHetHieuLuc: moment.Moment | undefined;
    tyLeGiam: number | undefined;
    gioiHan1: number | undefined;
    tyLe1: number | undefined;
    gioiHan2: number | undefined;
    tyLe2: number | undefined;
    gioiHan3: number | undefined;
    tyLe3: number | undefined;
    gioiHan4: number | undefined;
    tyLe4: number | undefined;
    gioiHan5: number | undefined;
    tyLe5: number | undefined;
    ghiChu: string | undefined;
    hangBenhVien: number | undefined;
    maQuyenLoiBHYT: number | undefined;
    gioiHan1Cu: number | undefined;
    gioiHan2Cu: number | undefined;
    isExists: boolean;
    tenNhomDoiTuong: string | undefined;
    id: number;
    constructor(data?: IDoiTuongDto);
    init(data?: any): void;
    static fromJS(data: any): DoiTuongDto;
    toJSON(data?: any): any;
}
export interface IDoiTuongDto {
    nhomDoiTuongId: number;
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    ngayHieuLuc: moment.Moment | undefined;
    ngayHetHieuLuc: moment.Moment | undefined;
    tyLeGiam: number | undefined;
    gioiHan1: number | undefined;
    tyLe1: number | undefined;
    gioiHan2: number | undefined;
    tyLe2: number | undefined;
    gioiHan3: number | undefined;
    tyLe3: number | undefined;
    gioiHan4: number | undefined;
    tyLe4: number | undefined;
    gioiHan5: number | undefined;
    tyLe5: number | undefined;
    ghiChu: string | undefined;
    hangBenhVien: number | undefined;
    maQuyenLoiBHYT: number | undefined;
    gioiHan1Cu: number | undefined;
    gioiHan2Cu: number | undefined;
    isExists: boolean;
    tenNhomDoiTuong: string | undefined;
    id: number;
}
export declare class DoiTuongPagedRequest implements IDoiTuongPagedRequest {
    nhomDoiTuongId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IDoiTuongPagedRequest);
    init(data?: any): void;
    static fromJS(data: any): DoiTuongPagedRequest;
    toJSON(data?: any): any;
}
export interface IDoiTuongPagedRequest {
    nhomDoiTuongId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfDoiTuongDto implements IPagedResultDtoOfDoiTuongDto {
    totalCount: number;
    items: DoiTuongDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDoiTuongDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDoiTuongDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDoiTuongDto {
    totalCount: number;
    items: DoiTuongDto[] | undefined;
}
export declare class DoiTuongNoiTruInput implements IDoiTuongNoiTruInput {
    doiTuongId: number | undefined;
    filter: string | undefined;
    loaiKhoId: number | undefined;
    constructor(data?: IDoiTuongNoiTruInput);
    init(data?: any): void;
    static fromJS(data: any): DoiTuongNoiTruInput;
    toJSON(data?: any): any;
}
export interface IDoiTuongNoiTruInput {
    doiTuongId: number | undefined;
    filter: string | undefined;
    loaiKhoId: number | undefined;
}
export declare class KhoDuocDataTree implements IKhoDuocDataTree {
    readonly expand: boolean;
    key: number;
    name: string | undefined;
    checked: boolean;
    ma: string | undefined;
    ngayTao: moment.Moment;
    isActive: boolean;
    doiTuongKhoDuocNoiTruId: number;
    constructor(data?: IKhoDuocDataTree);
    init(data?: any): void;
    static fromJS(data: any): KhoDuocDataTree;
    toJSON(data?: any): any;
}
export interface IKhoDuocDataTree {
    expand: boolean;
    key: number;
    name: string | undefined;
    checked: boolean;
    ma: string | undefined;
    ngayTao: moment.Moment;
    isActive: boolean;
    doiTuongKhoDuocNoiTruId: number;
}
export declare class KhoDuocTreeDto implements IKhoDuocTreeDto {
    name: string | undefined;
    key: number;
    readonly expand: boolean;
    readonly allChecked: boolean;
    children: KhoDuocDataTree[] | undefined;
    constructor(data?: IKhoDuocTreeDto);
    init(data?: any): void;
    static fromJS(data: any): KhoDuocTreeDto;
    toJSON(data?: any): any;
}
export interface IKhoDuocTreeDto {
    name: string | undefined;
    key: number;
    expand: boolean;
    allChecked: boolean;
    children: KhoDuocDataTree[] | undefined;
}
export declare class ListLoaiGiaIdDto implements IListLoaiGiaIdDto {
    khoDuocId: number;
    checked: boolean;
    doiTuongKhoDuocNoiTruId: number;
    constructor(data?: IListLoaiGiaIdDto);
    init(data?: any): void;
    static fromJS(data: any): ListLoaiGiaIdDto;
    toJSON(data?: any): any;
}
export interface IListLoaiGiaIdDto {
    khoDuocId: number;
    checked: boolean;
    doiTuongKhoDuocNoiTruId: number;
}
export declare class ParamsCreateOrUpdateDoiTuongNoiTruDto implements IParamsCreateOrUpdateDoiTuongNoiTruDto {
    doiTuongId: number;
    lstData: ListLoaiGiaIdDto[] | undefined;
    constructor(data?: IParamsCreateOrUpdateDoiTuongNoiTruDto);
    init(data?: any): void;
    static fromJS(data: any): ParamsCreateOrUpdateDoiTuongNoiTruDto;
    toJSON(data?: any): any;
}
export interface IParamsCreateOrUpdateDoiTuongNoiTruDto {
    doiTuongId: number;
    lstData: ListLoaiGiaIdDto[] | undefined;
}
export declare class DoiTuongKhoDuocNoiTruPagedRequestDto implements IDoiTuongKhoDuocNoiTruPagedRequestDto {
    doiTuongId: number | undefined;
    loaiGiaId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IDoiTuongKhoDuocNoiTruPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): DoiTuongKhoDuocNoiTruPagedRequestDto;
    toJSON(data?: any): any;
}
export interface IDoiTuongKhoDuocNoiTruPagedRequestDto {
    doiTuongId: number | undefined;
    loaiGiaId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class DoiTuongKhoDuocNoiTruDto implements IDoiTuongKhoDuocNoiTruDto {
    doiTuongId: number;
    khoDuocId: number;
    benhVienId: number;
    isActive: boolean;
    id: number;
    constructor(data?: IDoiTuongKhoDuocNoiTruDto);
    init(data?: any): void;
    static fromJS(data: any): DoiTuongKhoDuocNoiTruDto;
    toJSON(data?: any): any;
}
export interface IDoiTuongKhoDuocNoiTruDto {
    doiTuongId: number;
    khoDuocId: number;
    benhVienId: number;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfDoiTuongKhoDuocNoiTruDto implements IPagedResultDtoOfDoiTuongKhoDuocNoiTruDto {
    totalCount: number;
    items: DoiTuongKhoDuocNoiTruDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDoiTuongKhoDuocNoiTruDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDoiTuongKhoDuocNoiTruDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDoiTuongKhoDuocNoiTruDto {
    totalCount: number;
    items: DoiTuongKhoDuocNoiTruDto[] | undefined;
}
export declare class Params implements IParams {
    doiTuongId: number | undefined;
    filter: string | undefined;
    nhomGiaId: number | undefined;
    constructor(data?: IParams);
    init(data?: any): void;
    static fromJS(data: any): Params;
    toJSON(data?: any): any;
}
export interface IParams {
    doiTuongId: number | undefined;
    filter: string | undefined;
    nhomGiaId: number | undefined;
}
export declare class DataTree implements IDataTree {
    readonly expand: boolean;
    key: number;
    name: string | undefined;
    doUuTien: number | undefined;
    giaHoTro: number | undefined;
    checked: boolean;
    doiTuongLoaiGiaId: number;
    constructor(data?: IDataTree);
    init(data?: any): void;
    static fromJS(data: any): DataTree;
    toJSON(data?: any): any;
}
export interface IDataTree {
    expand: boolean;
    key: number;
    name: string | undefined;
    doUuTien: number | undefined;
    giaHoTro: number | undefined;
    checked: boolean;
    doiTuongLoaiGiaId: number;
}
export declare class LoaiGiaTreeDto implements ILoaiGiaTreeDto {
    name: string | undefined;
    key: number;
    readonly expand: boolean;
    readonly allChecked: boolean;
    children: DataTree[] | undefined;
    constructor(data?: ILoaiGiaTreeDto);
    init(data?: any): void;
    static fromJS(data: any): LoaiGiaTreeDto;
    toJSON(data?: any): any;
}
export interface ILoaiGiaTreeDto {
    name: string | undefined;
    key: number;
    expand: boolean;
    allChecked: boolean;
    children: DataTree[] | undefined;
}
export declare class Dto implements IDto {
    doUuTien: number | undefined;
    loaiGiaId: number;
    checked: boolean;
    doiTuongLoaiGiaId: number;
    constructor(data?: IDto);
    init(data?: any): void;
    static fromJS(data: any): Dto;
    toJSON(data?: any): any;
}
export interface IDto {
    doUuTien: number | undefined;
    loaiGiaId: number;
    checked: boolean;
    doiTuongLoaiGiaId: number;
}
export declare class ParamUpdateOrCreateDto implements IParamUpdateOrCreateDto {
    doiTuongId: number;
    lstData: Dto[] | undefined;
    constructor(data?: IParamUpdateOrCreateDto);
    init(data?: any): void;
    static fromJS(data: any): ParamUpdateOrCreateDto;
    toJSON(data?: any): any;
}
export interface IParamUpdateOrCreateDto {
    doiTuongId: number;
    lstData: Dto[] | undefined;
}
export declare class DoiTuongLoaiGiaPagedRequestDto implements IDoiTuongLoaiGiaPagedRequestDto {
    doiTuongId: number | undefined;
    loaiGiaId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IDoiTuongLoaiGiaPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): DoiTuongLoaiGiaPagedRequestDto;
    toJSON(data?: any): any;
}
export interface IDoiTuongLoaiGiaPagedRequestDto {
    doiTuongId: number | undefined;
    loaiGiaId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class DoiTuongLoaiGiaDto implements IDoiTuongLoaiGiaDto {
    doiTuongId: number;
    loaiGiaId: number;
    doUuTien: number | undefined;
    isActive: boolean;
    benhVienId: number;
    tenDoiTuong: string | undefined;
    id: number;
    constructor(data?: IDoiTuongLoaiGiaDto);
    init(data?: any): void;
    static fromJS(data: any): DoiTuongLoaiGiaDto;
    toJSON(data?: any): any;
}
export interface IDoiTuongLoaiGiaDto {
    doiTuongId: number;
    loaiGiaId: number;
    doUuTien: number | undefined;
    isActive: boolean;
    benhVienId: number;
    tenDoiTuong: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfDoiTuongLoaiGiaDto implements IPagedResultDtoOfDoiTuongLoaiGiaDto {
    totalCount: number;
    items: DoiTuongLoaiGiaDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDoiTuongLoaiGiaDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDoiTuongLoaiGiaDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDoiTuongLoaiGiaDto {
    totalCount: number;
    items: DoiTuongLoaiGiaDto[] | undefined;
}
export declare class DonViHanhChinhDto implements IDonViHanhChinhDto {
    ma: string | undefined;
    parentId: number | undefined;
    ten: string | undefined;
    tenVietTat: string | undefined;
    tenDayDu: string | undefined;
    tenDayDuKhongDau: string | undefined;
    capDo: number | undefined;
    isActive: boolean;
    isExists: boolean;
    readonly capDoStr: string | undefined;
    parentStr: string | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    id: number;
    constructor(data?: IDonViHanhChinhDto);
    init(data?: any): void;
    static fromJS(data: any): DonViHanhChinhDto;
    toJSON(data?: any): any;
}
export interface IDonViHanhChinhDto {
    ma: string | undefined;
    parentId: number | undefined;
    ten: string | undefined;
    tenVietTat: string | undefined;
    tenDayDu: string | undefined;
    tenDayDuKhongDau: string | undefined;
    capDo: number | undefined;
    isActive: boolean;
    isExists: boolean;
    capDoStr: string | undefined;
    parentStr: string | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    id: number;
}
export declare class PagedRequestDonViHanhChinhDto implements IPagedRequestDonViHanhChinhDto {
    capDo: number | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    thonId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedRequestDonViHanhChinhDto);
    init(data?: any): void;
    static fromJS(data: any): PagedRequestDonViHanhChinhDto;
    toJSON(data?: any): any;
}
export interface IPagedRequestDonViHanhChinhDto {
    capDo: number | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    thonId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfDonViHanhChinhDto implements IPagedResultDtoOfDonViHanhChinhDto {
    totalCount: number;
    items: DonViHanhChinhDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDonViHanhChinhDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDonViHanhChinhDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDonViHanhChinhDto {
    totalCount: number;
    items: DonViHanhChinhDto[] | undefined;
}
export declare class DonViTinhPagedRequestDto implements IDonViTinhPagedRequestDto {
    loaiVatTuId: number | undefined;
    isDonViCoBan: boolean | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IDonViTinhPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): DonViTinhPagedRequestDto;
    toJSON(data?: any): any;
}
export interface IDonViTinhPagedRequestDto {
    loaiVatTuId: number | undefined;
    isDonViCoBan: boolean | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class DonViTinhDto implements IDonViTinhDto {
    loaiVatTuId: number;
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    donViCoBanId: number | undefined;
    donViCoBan: boolean;
    giaTriQuyDoi: number;
    isActive: boolean;
    id: number;
    constructor(data?: IDonViTinhDto);
    init(data?: any): void;
    static fromJS(data: any): DonViTinhDto;
    toJSON(data?: any): any;
}
export interface IDonViTinhDto {
    loaiVatTuId: number;
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    donViCoBanId: number | undefined;
    donViCoBan: boolean;
    giaTriQuyDoi: number;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfDonViTinhDto implements IPagedResultDtoOfDonViTinhDto {
    totalCount: number;
    items: DonViTinhDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDonViTinhDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDonViTinhDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDonViTinhDto {
    totalCount: number;
    items: DonViTinhDto[] | undefined;
}
export declare class DuocThongTinThauDto implements IDuocThongTinThauDto {
    duocId: number;
    tenBhyt: string | undefined;
    maHoatChat: string | undefined;
    sttPheDuyet: string | undefined;
    nuocSanXuat: string | undefined;
    hangSanXuat: string | undefined;
    nhaThau: string | undefined;
    soDK: string | undefined;
    donGiaThau: number | undefined;
    goiThau: string | undefined;
    nhomThau: string | undefined;
    soQDThau: string | undefined;
    ngayTrungThau: moment.Moment | undefined;
    uuTien: boolean | undefined;
    benhVienId: number;
    isActive: boolean;
    id: number;
    constructor(data?: IDuocThongTinThauDto);
    init(data?: any): void;
    static fromJS(data: any): DuocThongTinThauDto;
    toJSON(data?: any): any;
}
export interface IDuocThongTinThauDto {
    duocId: number;
    tenBhyt: string | undefined;
    maHoatChat: string | undefined;
    sttPheDuyet: string | undefined;
    nuocSanXuat: string | undefined;
    hangSanXuat: string | undefined;
    nhaThau: string | undefined;
    soDK: string | undefined;
    donGiaThau: number | undefined;
    goiThau: string | undefined;
    nhomThau: string | undefined;
    soQDThau: string | undefined;
    ngayTrungThau: moment.Moment | undefined;
    uuTien: boolean | undefined;
    benhVienId: number;
    isActive: boolean;
    id: number;
}
export declare class InsertBulkThongTinThauByDuocIdRequest implements IInsertBulkThongTinThauByDuocIdRequest {
    listOfThongTinThau: DuocThongTinThauDto[] | undefined;
    constructor(data?: IInsertBulkThongTinThauByDuocIdRequest);
    init(data?: any): void;
    static fromJS(data: any): InsertBulkThongTinThauByDuocIdRequest;
    toJSON(data?: any): any;
}
export interface IInsertBulkThongTinThauByDuocIdRequest {
    listOfThongTinThau: DuocThongTinThauDto[] | undefined;
}
export declare enum DuocDungChungTimTheoEnum {
    MaThuoc = 1,
    TenThuoc = 2,
    HoatChat = 3,
    SoDangKy = 4
}
export declare class DuocDungChungPagedListInputDto implements IDuocDungChungPagedListInputDto {
    timTheo: DuocDungChungTimTheoEnum;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IDuocDungChungPagedListInputDto);
    init(data?: any): void;
    static fromJS(data: any): DuocDungChungPagedListInputDto;
    toJSON(data?: any): any;
}
export interface IDuocDungChungPagedListInputDto {
    timTheo: DuocDungChungTimTheoEnum;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class DuocDungChungDto implements IDuocDungChungDto {
    ma: string | undefined;
    ten: string | undefined;
    hamLuong: string | undefined;
    duongDung: string | undefined;
    hoatChat: string | undefined;
    soDK: string | undefined;
    loaiThuoc: string | undefined;
    id: number;
    constructor(data?: IDuocDungChungDto);
    init(data?: any): void;
    static fromJS(data: any): DuocDungChungDto;
    toJSON(data?: any): any;
}
export interface IDuocDungChungDto {
    ma: string | undefined;
    ten: string | undefined;
    hamLuong: string | undefined;
    duongDung: string | undefined;
    hoatChat: string | undefined;
    soDK: string | undefined;
    loaiThuoc: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfDuocDungChungDto implements IPagedResultDtoOfDuocDungChungDto {
    totalCount: number;
    items: DuocDungChungDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDuocDungChungDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDuocDungChungDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDuocDungChungDto {
    totalCount: number;
    items: DuocDungChungDto[] | undefined;
}
export declare class ThemThuocTuDanhMucChungDto implements IThemThuocTuDanhMucChungDto {
    id: number;
    maDuoc: string | undefined;
    donViTinh: string | undefined;
    duongDung: string | undefined;
    constructor(data?: IThemThuocTuDanhMucChungDto);
    init(data?: any): void;
    static fromJS(data: any): ThemThuocTuDanhMucChungDto;
    toJSON(data?: any): any;
}
export interface IThemThuocTuDanhMucChungDto {
    id: number;
    maDuoc: string | undefined;
    donViTinh: string | undefined;
    duongDung: string | undefined;
}
export declare class ThemThuocTuDanhMucDungChungRequest implements IThemThuocTuDanhMucDungChungRequest {
    listOfThuocCanThem: ThemThuocTuDanhMucChungDto[] | undefined;
    constructor(data?: IThemThuocTuDanhMucDungChungRequest);
    init(data?: any): void;
    static fromJS(data: any): ThemThuocTuDanhMucDungChungRequest;
    toJSON(data?: any): any;
}
export interface IThemThuocTuDanhMucDungChungRequest {
    listOfThuocCanThem: ThemThuocTuDanhMucChungDto[] | undefined;
}
export declare class DuocBenhVienPageListInputDto implements IDuocBenhVienPageListInputDto {
    loaiVatTuId: number | undefined;
    chuongTrinhId: number | undefined;
    soDangKy: string | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IDuocBenhVienPageListInputDto);
    init(data?: any): void;
    static fromJS(data: any): DuocBenhVienPageListInputDto;
    toJSON(data?: any): any;
}
export interface IDuocBenhVienPageListInputDto {
    loaiVatTuId: number | undefined;
    chuongTrinhId: number | undefined;
    soDangKy: string | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare enum LOAI_THUOC {
    TayY = 1,
    ChePhamYHocCoTruyen = 2,
    ViThuocYHocCoTruyen = 3
}
export declare enum LOAI_VAT_TU_Y_TE {
    Thuoc = 0,
    VatTu = 1,
    HoaChat = 4
}
export declare class DuocDto implements IDuocDto {
    loaiVatTuId: number;
    loaiThuoc: LOAI_THUOC;
    loaiDuocId: number | undefined;
    nhomDuocId: number | undefined;
    ma: string | undefined;
    ten: string | undefined;
    tenDayDu: string | undefined;
    donViTinhId: number | undefined;
    donViTinh: string | undefined;
    quyCach: string | undefined;
    hoatChat: string | undefined;
    duongDungId: number | undefined;
    duongDung: string | undefined;
    congDung: string | undefined;
    hamLuong: string | undefined;
    vtyt: LOAI_VAT_TU_Y_TE;
    soDangKy: string | undefined;
    tamNgungSuDung: boolean | undefined;
    bhyt: boolean | undefined;
    quanNhan: boolean | undefined;
    loaiDieuTri: string | undefined;
    nhomDvktBhytId: number | undefined;
    bhytTyLeThanhToanDungTuyen: number | undefined;
    mienPhi: boolean | undefined;
    tamNgungDuTru: boolean | undefined;
    phamVi: string | undefined;
    quanTamDacDiet: boolean | undefined;
    duocDcId: number | undefined;
    maDuocChung: string | undefined;
    phanNhomDuocId: number | undefined;
    phanLoaiDuocId: number | undefined;
    daChat: boolean | undefined;
    maDmdc: string | undefined;
    donViTinhToaThuocId: number | undefined;
    donViTinhToaThuoc: string | undefined;
    chuongTrinhId: number | undefined;
    nuocSanXuat: string | undefined;
    vacxinId: number | undefined;
    benhVienId: number;
    isActive: boolean;
    id: number;
    constructor(data?: IDuocDto);
    init(data?: any): void;
    static fromJS(data: any): DuocDto;
    toJSON(data?: any): any;
}
export interface IDuocDto {
    loaiVatTuId: number;
    loaiThuoc: LOAI_THUOC;
    loaiDuocId: number | undefined;
    nhomDuocId: number | undefined;
    ma: string | undefined;
    ten: string | undefined;
    tenDayDu: string | undefined;
    donViTinhId: number | undefined;
    donViTinh: string | undefined;
    quyCach: string | undefined;
    hoatChat: string | undefined;
    duongDungId: number | undefined;
    duongDung: string | undefined;
    congDung: string | undefined;
    hamLuong: string | undefined;
    vtyt: LOAI_VAT_TU_Y_TE;
    soDangKy: string | undefined;
    tamNgungSuDung: boolean | undefined;
    bhyt: boolean | undefined;
    quanNhan: boolean | undefined;
    loaiDieuTri: string | undefined;
    nhomDvktBhytId: number | undefined;
    bhytTyLeThanhToanDungTuyen: number | undefined;
    mienPhi: boolean | undefined;
    tamNgungDuTru: boolean | undefined;
    phamVi: string | undefined;
    quanTamDacDiet: boolean | undefined;
    duocDcId: number | undefined;
    maDuocChung: string | undefined;
    phanNhomDuocId: number | undefined;
    phanLoaiDuocId: number | undefined;
    daChat: boolean | undefined;
    maDmdc: string | undefined;
    donViTinhToaThuocId: number | undefined;
    donViTinhToaThuoc: string | undefined;
    chuongTrinhId: number | undefined;
    nuocSanXuat: string | undefined;
    vacxinId: number | undefined;
    benhVienId: number;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfDuocDto implements IPagedResultDtoOfDuocDto {
    totalCount: number;
    items: DuocDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDuocDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDuocDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDuocDto {
    totalCount: number;
    items: DuocDto[] | undefined;
}
export declare class PagedResultDtoOfDuocThongTinThauDto implements IPagedResultDtoOfDuocThongTinThauDto {
    totalCount: number;
    items: DuocThongTinThauDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDuocThongTinThauDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDuocThongTinThauDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDuocThongTinThauDto {
    totalCount: number;
    items: DuocThongTinThauDto[] | undefined;
}
export declare enum GetEntityByIdMap {
    BenhNhan = 1,
    TiepNhan = 2,
    NgoaiTruKhamBenh = 3,
    TiepNhanBenhNhanBHYT = 4,
    DMDoiTuong = 5,
    BenhNhanDiaChi = 6,
    BenhVien = 7
}
export declare class GetEntityByIdInputDto implements IGetEntityByIdInputDto {
    map: GetEntityByIdMap;
    propertyOfDto: string[] | undefined;
    propertyId: string | undefined;
    id: number;
    isGetOne: boolean;
    isSoftDelete: boolean;
    constructor(data?: IGetEntityByIdInputDto);
    init(data?: any): void;
    static fromJS(data: any): GetEntityByIdInputDto;
    toJSON(data?: any): any;
}
export interface IGetEntityByIdInputDto {
    map: GetEntityByIdMap;
    propertyOfDto: string[] | undefined;
    propertyId: string | undefined;
    id: number;
    isGetOne: boolean;
    isSoftDelete: boolean;
}
export declare class GetEntityByIdOutDto implements IGetEntityByIdOutDto {
    id: number;
    dto: any | undefined;
    isSuccessful: boolean;
    constructor(data?: IGetEntityByIdOutDto);
    init(data?: any): void;
    static fromJS(data: any): GetEntityByIdOutDto;
    toJSON(data?: any): any;
}
export interface IGetEntityByIdOutDto {
    id: number;
    dto: any | undefined;
    isSuccessful: boolean;
}
export declare class GiuongBenhDto implements IGiuongBenhDto {
    benhVienId: number;
    ma: string | undefined;
    moTa: string | undefined;
    khoaDieuTriId: number;
    phongBenhId: number;
    tang: number | undefined;
    vatDungKemTheo: string | undefined;
    isActive: boolean;
    isExists: boolean;
    tenKhoaDieuTri: string | undefined;
    tenPhongBenh: string | undefined;
    id: number;
    constructor(data?: IGiuongBenhDto);
    init(data?: any): void;
    static fromJS(data: any): GiuongBenhDto;
    toJSON(data?: any): any;
}
export interface IGiuongBenhDto {
    benhVienId: number;
    ma: string | undefined;
    moTa: string | undefined;
    khoaDieuTriId: number;
    phongBenhId: number;
    tang: number | undefined;
    vatDungKemTheo: string | undefined;
    isActive: boolean;
    isExists: boolean;
    tenKhoaDieuTri: string | undefined;
    tenPhongBenh: string | undefined;
    id: number;
}
export declare class GiuongBenhPagedRequestDto implements IGiuongBenhPagedRequestDto {
    khoaDieuTriId: number | undefined;
    phongBenhId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IGiuongBenhPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): GiuongBenhPagedRequestDto;
    toJSON(data?: any): any;
}
export interface IGiuongBenhPagedRequestDto {
    khoaDieuTriId: number | undefined;
    phongBenhId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfGiuongBenhDto implements IPagedResultDtoOfGiuongBenhDto {
    totalCount: number;
    items: GiuongBenhDto[] | undefined;
    constructor(data?: IPagedResultDtoOfGiuongBenhDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfGiuongBenhDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfGiuongBenhDto {
    totalCount: number;
    items: GiuongBenhDto[] | undefined;
}
export declare class LstDictionaryDto implements ILstDictionaryDto {
    lstDictionaryTypeId: number;
    lstDictionaryTypeCode: string | undefined;
    code: string | undefined;
    name: string | undefined;
    nameEn: string | undefined;
    parentId: number | undefined;
    isActive: boolean;
    isExists: boolean;
    id: number;
    constructor(data?: ILstDictionaryDto);
    init(data?: any): void;
    static fromJS(data: any): LstDictionaryDto;
    toJSON(data?: any): any;
}
export interface ILstDictionaryDto {
    lstDictionaryTypeId: number;
    lstDictionaryTypeCode: string | undefined;
    code: string | undefined;
    name: string | undefined;
    nameEn: string | undefined;
    parentId: number | undefined;
    isActive: boolean;
    isExists: boolean;
    id: number;
}
export declare class LstDictionaryGetByListCodePagedRequestDto implements ILstDictionaryGetByListCodePagedRequestDto {
    lstDictionaryTypeCodes: string[] | undefined;
    constructor(data?: ILstDictionaryGetByListCodePagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): LstDictionaryGetByListCodePagedRequestDto;
    toJSON(data?: any): any;
}
export interface ILstDictionaryGetByListCodePagedRequestDto {
    lstDictionaryTypeCodes: string[] | undefined;
}
export declare class LstDictionaryPagedRequestDto implements ILstDictionaryPagedRequestDto {
    lstDictionaryTypeId: number | undefined;
    parentId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: ILstDictionaryPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): LstDictionaryPagedRequestDto;
    toJSON(data?: any): any;
}
export interface ILstDictionaryPagedRequestDto {
    lstDictionaryTypeId: number | undefined;
    parentId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfLstDictionaryDto implements IPagedResultDtoOfLstDictionaryDto {
    totalCount: number;
    items: LstDictionaryDto[] | undefined;
    constructor(data?: IPagedResultDtoOfLstDictionaryDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfLstDictionaryDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfLstDictionaryDto {
    totalCount: number;
    items: LstDictionaryDto[] | undefined;
}
export declare class LstDictionaryTypeDto implements ILstDictionaryTypeDto {
    code: string | undefined;
    name: string | undefined;
    nameEn: string | undefined;
    level: number | undefined;
    parentId: number | undefined;
    isActive: boolean | undefined;
    isExists: boolean;
    id: number;
    constructor(data?: ILstDictionaryTypeDto);
    init(data?: any): void;
    static fromJS(data: any): LstDictionaryTypeDto;
    toJSON(data?: any): any;
}
export interface ILstDictionaryTypeDto {
    code: string | undefined;
    name: string | undefined;
    nameEn: string | undefined;
    level: number | undefined;
    parentId: number | undefined;
    isActive: boolean | undefined;
    isExists: boolean;
    id: number;
}
export declare class LstDictionaryTypePagedRequestDto implements ILstDictionaryTypePagedRequestDto {
    parentId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: ILstDictionaryTypePagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): LstDictionaryTypePagedRequestDto;
    toJSON(data?: any): any;
}
export interface ILstDictionaryTypePagedRequestDto {
    parentId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfLstDictionaryTypeDto implements IPagedResultDtoOfLstDictionaryTypeDto {
    totalCount: number;
    items: LstDictionaryTypeDto[] | undefined;
    constructor(data?: IPagedResultDtoOfLstDictionaryTypeDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfLstDictionaryTypeDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfLstDictionaryTypeDto {
    totalCount: number;
    items: LstDictionaryTypeDto[] | undefined;
}
export declare class HoatChatPagedListInputDto implements IHoatChatPagedListInputDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IHoatChatPagedListInputDto);
    init(data?: any): void;
    static fromJS(data: any): HoatChatPagedListInputDto;
    toJSON(data?: any): any;
}
export interface IHoatChatPagedListInputDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class HoatChatDto implements IHoatChatDto {
    ma: string | undefined;
    ten: string | undefined;
    cap: number | undefined;
    parentId: number | undefined;
    stt: number | undefined;
    sttThuoc: number | undefined;
    duongDung: string | undefined;
    maDuongDung: string | undefined;
    ma1282: string | undefined;
    tuyen: number | undefined;
    loaiDuocId: number | undefined;
    isActive: boolean;
    id: number;
    constructor(data?: IHoatChatDto);
    init(data?: any): void;
    static fromJS(data: any): HoatChatDto;
    toJSON(data?: any): any;
}
export interface IHoatChatDto {
    ma: string | undefined;
    ten: string | undefined;
    cap: number | undefined;
    parentId: number | undefined;
    stt: number | undefined;
    sttThuoc: number | undefined;
    duongDung: string | undefined;
    maDuongDung: string | undefined;
    ma1282: string | undefined;
    tuyen: number | undefined;
    loaiDuocId: number | undefined;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfHoatChatDto implements IPagedResultDtoOfHoatChatDto {
    totalCount: number;
    items: HoatChatDto[] | undefined;
    constructor(data?: IPagedResultDtoOfHoatChatDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfHoatChatDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfHoatChatDto {
    totalCount: number;
    items: HoatChatDto[] | undefined;
}
export declare class KiemTraExcelThuocRequest implements IKiemTraExcelThuocRequest {
    fileDto: FileDto;
    hamLuongVaoTenDayDu: boolean;
    isUpdate: boolean;
    isThuoc: boolean;
    constructor(data?: IKiemTraExcelThuocRequest);
    init(data?: any): void;
    static fromJS(data: any): KiemTraExcelThuocRequest;
    toJSON(data?: any): any;
}
export interface IKiemTraExcelThuocRequest {
    fileDto: FileDto;
    hamLuongVaoTenDayDu: boolean;
    isUpdate: boolean;
    isThuoc: boolean;
}
export declare class ReadExcelThuocDto implements IReadExcelThuocDto {
    stt: string | undefined;
    maduoc: string | undefined;
    mA_DMDC: string | undefined;
    tenduoc: string | undefined;
    hoatchat: string | undefined;
    donvitinh: string | undefined;
    hamluong: string | undefined;
    quycach: string | undefined;
    duongdung: string | undefined;
    stT_DMBYT: string | undefined;
    stT_PHEDUYET: string | undefined;
    nuocsanxuat: string | undefined;
    hangsanxuat: string | undefined;
    sodk: string | undefined;
    loaithuoc: string | undefined;
    dachat: string | undefined;
    dongiathau: string | undefined;
    soqdthau: string | undefined;
    nhomthau: string | undefined;
    goithau: string | undefined;
    ngaytrungthau: string | undefined;
    donViTinhId: number | undefined;
    duongDungId: number | undefined;
    nhomDuocId: number | undefined;
    phanNhomDuocId: number | undefined;
    loaiThuoc: number | undefined;
    bDaChat: boolean;
    ngayTrungThau: moment.Moment | undefined;
    donGiaThau: number | undefined;
    readonly tenThuocSdkSttPheDuyet: string | undefined;
    readonly tenSttPheDuyet: string | undefined;
    duocId: number | undefined;
    constructor(data?: IReadExcelThuocDto);
    init(data?: any): void;
    static fromJS(data: any): ReadExcelThuocDto;
    toJSON(data?: any): any;
}
export interface IReadExcelThuocDto {
    stt: string | undefined;
    maduoc: string | undefined;
    mA_DMDC: string | undefined;
    tenduoc: string | undefined;
    hoatchat: string | undefined;
    donvitinh: string | undefined;
    hamluong: string | undefined;
    quycach: string | undefined;
    duongdung: string | undefined;
    stT_DMBYT: string | undefined;
    stT_PHEDUYET: string | undefined;
    nuocsanxuat: string | undefined;
    hangsanxuat: string | undefined;
    sodk: string | undefined;
    loaithuoc: string | undefined;
    dachat: string | undefined;
    dongiathau: string | undefined;
    soqdthau: string | undefined;
    nhomthau: string | undefined;
    goithau: string | undefined;
    ngaytrungthau: string | undefined;
    donViTinhId: number | undefined;
    duongDungId: number | undefined;
    nhomDuocId: number | undefined;
    phanNhomDuocId: number | undefined;
    loaiThuoc: number | undefined;
    bDaChat: boolean;
    ngayTrungThau: moment.Moment | undefined;
    donGiaThau: number | undefined;
    tenThuocSdkSttPheDuyet: string | undefined;
    tenSttPheDuyet: string | undefined;
    duocId: number | undefined;
}
export declare class KiemTraThuocOutputDto implements IKiemTraThuocOutputDto {
    excelDto: ReadExcelThuocDto;
    messageError: string[] | undefined;
    readonly isSuccessful: boolean;
    constructor(data?: IKiemTraThuocOutputDto);
    init(data?: any): void;
    static fromJS(data: any): KiemTraThuocOutputDto;
    toJSON(data?: any): any;
}
export interface IKiemTraThuocOutputDto {
    excelDto: ReadExcelThuocDto;
    messageError: string[] | undefined;
    isSuccessful: boolean;
}
export declare class KiemTraExcelThuocDto implements IKiemTraExcelThuocDto {
    danhSachHopLe: KiemTraThuocOutputDto[] | undefined;
    danhSachLoi: KiemTraThuocOutputDto[] | undefined;
    isSuccessful: boolean;
    messageError: string | undefined;
    tokenListSuccess: string;
    constructor(data?: IKiemTraExcelThuocDto);
    init(data?: any): void;
    static fromJS(data: any): KiemTraExcelThuocDto;
    toJSON(data?: any): any;
}
export interface IKiemTraExcelThuocDto {
    danhSachHopLe: KiemTraThuocOutputDto[] | undefined;
    danhSachLoi: KiemTraThuocOutputDto[] | undefined;
    isSuccessful: boolean;
    messageError: string | undefined;
    tokenListSuccess: string;
}
export declare class InsertThuocHopLeRequest implements IInsertThuocHopLeRequest {
    token: string;
    constructor(data?: IInsertThuocHopLeRequest);
    init(data?: any): void;
    static fromJS(data: any): InsertThuocHopLeRequest;
    toJSON(data?: any): any;
}
export interface IInsertThuocHopLeRequest {
    token: string;
}
export declare class CommonResultDtoOfInt32 implements ICommonResultDtoOfInt32 {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: number;
    constructor(data?: ICommonResultDtoOfInt32);
    init(data?: any): void;
    static fromJS(data: any): CommonResultDtoOfInt32;
    toJSON(data?: any): any;
}
export interface ICommonResultDtoOfInt32 {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: number;
}
export declare class UpdateThuocHopLeRequest implements IUpdateThuocHopLeRequest {
    token: string;
    constructor(data?: IUpdateThuocHopLeRequest);
    init(data?: any): void;
    static fromJS(data: any): UpdateThuocHopLeRequest;
    toJSON(data?: any): any;
}
export interface IUpdateThuocHopLeRequest {
    token: string;
}
export declare class KhangNguyenDto implements IKhangNguyenDto {
    ten: string | undefined;
    moTa: string | undefined;
    listVacXin: ComboBoxDto[] | undefined;
    id: number;
    constructor(data?: IKhangNguyenDto);
    init(data?: any): void;
    static fromJS(data: any): KhangNguyenDto;
    toJSON(data?: any): any;
}
export interface IKhangNguyenDto {
    ten: string | undefined;
    moTa: string | undefined;
    listVacXin: ComboBoxDto[] | undefined;
    id: number;
}
export declare class PagedResultDtoOfKhangNguyenDto implements IPagedResultDtoOfKhangNguyenDto {
    totalCount: number;
    items: KhangNguyenDto[] | undefined;
    constructor(data?: IPagedResultDtoOfKhangNguyenDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfKhangNguyenDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfKhangNguyenDto {
    totalCount: number;
    items: KhangNguyenDto[] | undefined;
}
export declare class KhoDuocPagedRequestDto implements IKhoDuocPagedRequestDto {
    loaiKhoId: number | undefined;
    phongBanId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IKhoDuocPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): KhoDuocPagedRequestDto;
    toJSON(data?: any): any;
}
export interface IKhoDuocPagedRequestDto {
    loaiKhoId: number | undefined;
    phongBanId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class KhoDuocDto implements IKhoDuocDto {
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    phongBanName: string | undefined;
    loaiKhoName: string | undefined;
    phongBanId: number;
    loaiKhoId: number;
    khoDuoc: boolean;
    benhVienId: number;
    creationTime: moment.Moment;
    totalCount: number;
    isActive: boolean;
    isExists: boolean;
    id: number;
    constructor(data?: IKhoDuocDto);
    init(data?: any): void;
    static fromJS(data: any): KhoDuocDto;
    toJSON(data?: any): any;
}
export interface IKhoDuocDto {
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    phongBanName: string | undefined;
    loaiKhoName: string | undefined;
    phongBanId: number;
    loaiKhoId: number;
    khoDuoc: boolean;
    benhVienId: number;
    creationTime: moment.Moment;
    totalCount: number;
    isActive: boolean;
    isExists: boolean;
    id: number;
}
export declare class PagedResultDtoOfKhoDuocDto implements IPagedResultDtoOfKhoDuocDto {
    totalCount: number;
    items: KhoDuocDto[] | undefined;
    constructor(data?: IPagedResultDtoOfKhoDuocDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfKhoDuocDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfKhoDuocDto {
    totalCount: number;
    items: KhoDuocDto[] | undefined;
}
export declare class LoaiDuocPagedListInputDto implements ILoaiDuocPagedListInputDto {
    loaiVatTuId: number | undefined;
    nhomLoaiDuocId: number | undefined;
    parentId: number | undefined;
    cap: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: ILoaiDuocPagedListInputDto);
    init(data?: any): void;
    static fromJS(data: any): LoaiDuocPagedListInputDto;
    toJSON(data?: any): any;
}
export interface ILoaiDuocPagedListInputDto {
    loaiVatTuId: number | undefined;
    nhomLoaiDuocId: number | undefined;
    parentId: number | undefined;
    cap: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class LoaiDuocDto implements ILoaiDuocDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    loaiVatTuId: number | undefined;
    nhomLoaiDuocId: number | undefined;
    parentId: number | undefined;
    cap: number | undefined;
    isActive: boolean;
    id: number;
    constructor(data?: ILoaiDuocDto);
    init(data?: any): void;
    static fromJS(data: any): LoaiDuocDto;
    toJSON(data?: any): any;
}
export interface ILoaiDuocDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    loaiVatTuId: number | undefined;
    nhomLoaiDuocId: number | undefined;
    parentId: number | undefined;
    cap: number | undefined;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfLoaiDuocDto implements IPagedResultDtoOfLoaiDuocDto {
    totalCount: number;
    items: LoaiDuocDto[] | undefined;
    constructor(data?: IPagedResultDtoOfLoaiDuocDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfLoaiDuocDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfLoaiDuocDto {
    totalCount: number;
    items: LoaiDuocDto[] | undefined;
}
export declare class LoaiGiaDto implements ILoaiGiaDto {
    nhomGiaId: number;
    ma: string | undefined;
    ten: string | undefined;
    ghiChu: string | undefined;
    giaHoTro: number | undefined;
    fieldName: string | undefined;
    loaiIdRef: string | undefined;
    tienTeId: number | undefined;
    benhVienId: number;
    isActive: boolean;
    isExists: boolean;
    tenTienTe: string | undefined;
    tenNhomGia: string | undefined;
    readonly loaiIdRefShow: string | undefined;
    id: number;
    constructor(data?: ILoaiGiaDto);
    init(data?: any): void;
    static fromJS(data: any): LoaiGiaDto;
    toJSON(data?: any): any;
}
export interface ILoaiGiaDto {
    nhomGiaId: number;
    ma: string | undefined;
    ten: string | undefined;
    ghiChu: string | undefined;
    giaHoTro: number | undefined;
    fieldName: string | undefined;
    loaiIdRef: string | undefined;
    tienTeId: number | undefined;
    benhVienId: number;
    isActive: boolean;
    isExists: boolean;
    tenTienTe: string | undefined;
    tenNhomGia: string | undefined;
    loaiIdRefShow: string | undefined;
    id: number;
}
export declare class LoaiGiaPagedRequestDto implements ILoaiGiaPagedRequestDto {
    tienTeId: number | undefined;
    nhomGiaId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: ILoaiGiaPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): LoaiGiaPagedRequestDto;
    toJSON(data?: any): any;
}
export interface ILoaiGiaPagedRequestDto {
    tienTeId: number | undefined;
    nhomGiaId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfLoaiGiaDto implements IPagedResultDtoOfLoaiGiaDto {
    totalCount: number;
    items: LoaiGiaDto[] | undefined;
    constructor(data?: IPagedResultDtoOfLoaiGiaDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfLoaiGiaDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfLoaiGiaDto {
    totalCount: number;
    items: LoaiGiaDto[] | undefined;
}
export declare class LoaiVatTuDto implements ILoaiVatTuDto {
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    isActive: boolean;
    id: number;
    constructor(data?: ILoaiVatTuDto);
    init(data?: any): void;
    static fromJS(data: any): LoaiVatTuDto;
    toJSON(data?: any): any;
}
export interface ILoaiVatTuDto {
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfLoaiVatTuDto implements IPagedResultDtoOfLoaiVatTuDto {
    totalCount: number;
    items: LoaiVatTuDto[] | undefined;
    constructor(data?: IPagedResultDtoOfLoaiVatTuDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfLoaiVatTuDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfLoaiVatTuDto {
    totalCount: number;
    items: LoaiVatTuDto[] | undefined;
}
export declare class NhaCungCapDto implements INhaCungCapDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    diaChi: string | undefined;
    dienThoai: string | undefined;
    fax: string | undefined;
    email: string | undefined;
    maSoThue: string | undefined;
    giamDoc: string | undefined;
    nguoiLienHe: string | undefined;
    loaiHinhCty: number;
    isActive: boolean;
    benhVienId: number;
    isExists: boolean;
    id: number;
    constructor(data?: INhaCungCapDto);
    init(data?: any): void;
    static fromJS(data: any): NhaCungCapDto;
    toJSON(data?: any): any;
}
export interface INhaCungCapDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    diaChi: string | undefined;
    dienThoai: string | undefined;
    fax: string | undefined;
    email: string | undefined;
    maSoThue: string | undefined;
    giamDoc: string | undefined;
    nguoiLienHe: string | undefined;
    loaiHinhCty: number;
    isActive: boolean;
    benhVienId: number;
    isExists: boolean;
    id: number;
}
export declare class NhaCungCapPagedRequestDto implements INhaCungCapPagedRequestDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: INhaCungCapPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): NhaCungCapPagedRequestDto;
    toJSON(data?: any): any;
}
export interface INhaCungCapPagedRequestDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfNhaCungCapDto implements IPagedResultDtoOfNhaCungCapDto {
    totalCount: number;
    items: NhaCungCapDto[] | undefined;
    constructor(data?: IPagedResultDtoOfNhaCungCapDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfNhaCungCapDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfNhaCungCapDto {
    totalCount: number;
    items: NhaCungCapDto[] | undefined;
}
export declare enum NHAN_LUC_LOAI_HINH_ANH {
    AnhDaiDien = 1,
    ChuKy = 2
}
export declare class NhanLucPagedRequestDto implements INhanLucPagedRequestDto {
    benhVienId: number | undefined;
    phongBanId: number | undefined;
    tinhTrang: number | undefined;
    chucVuId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: INhanLucPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): NhanLucPagedRequestDto;
    toJSON(data?: any): any;
}
export interface INhanLucPagedRequestDto {
    benhVienId: number | undefined;
    phongBanId: number | undefined;
    tinhTrang: number | undefined;
    chucVuId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class NhanLucDto implements INhanLucDto {
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    ngaySinh: moment.Moment | undefined;
    gioiTinh: number;
    dienThoai: string | undefined;
    cmnd: string | undefined;
    ngayCap: moment.Moment | undefined;
    noiCapCmnd: number | undefined;
    phongBanId: number | undefined;
    quocTichId: number | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    diaChi: string | undefined;
    danTocId: number | undefined;
    tinhTrang: number | undefined;
    chucVuId: number | undefined;
    chucDanhId: number | undefined;
    loaiNhanLucId: number | undefined;
    trinhDoChuyenMonId: number | undefined;
    chuyenNganhChinhId: number | undefined;
    chuyenNganhPhuId: number | undefined;
    soChungChiHanhNghe: string | undefined;
    ngayCapChinhChiHanhNghe: moment.Moment | undefined;
    benhVienId: number;
    isActive: boolean;
    id: number;
    constructor(data?: INhanLucDto);
    init(data?: any): void;
    static fromJS(data: any): NhanLucDto;
    toJSON(data?: any): any;
}
export interface INhanLucDto {
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    ngaySinh: moment.Moment | undefined;
    gioiTinh: number;
    dienThoai: string | undefined;
    cmnd: string | undefined;
    ngayCap: moment.Moment | undefined;
    noiCapCmnd: number | undefined;
    phongBanId: number | undefined;
    quocTichId: number | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    diaChi: string | undefined;
    danTocId: number | undefined;
    tinhTrang: number | undefined;
    chucVuId: number | undefined;
    chucDanhId: number | undefined;
    loaiNhanLucId: number | undefined;
    trinhDoChuyenMonId: number | undefined;
    chuyenNganhChinhId: number | undefined;
    chuyenNganhPhuId: number | undefined;
    soChungChiHanhNghe: string | undefined;
    ngayCapChinhChiHanhNghe: moment.Moment | undefined;
    benhVienId: number;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfNhanLucDto implements IPagedResultDtoOfNhanLucDto {
    totalCount: number;
    items: NhanLucDto[] | undefined;
    constructor(data?: IPagedResultDtoOfNhanLucDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfNhanLucDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfNhanLucDto {
    totalCount: number;
    items: NhanLucDto[] | undefined;
}
export declare class NhomDuocPagedListInputDto implements INhomDuocPagedListInputDto {
    phanNhomDuocId: number | undefined;
    loaiThuoc: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: INhomDuocPagedListInputDto);
    init(data?: any): void;
    static fromJS(data: any): NhomDuocPagedListInputDto;
    toJSON(data?: any): any;
}
export interface INhomDuocPagedListInputDto {
    phanNhomDuocId: number | undefined;
    loaiThuoc: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class NhomDuocDto implements INhomDuocDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    phanNhomDuocId: number | undefined;
    loaiThuoc: number | undefined;
    isActive: boolean;
    id: number;
    constructor(data?: INhomDuocDto);
    init(data?: any): void;
    static fromJS(data: any): NhomDuocDto;
    toJSON(data?: any): any;
}
export interface INhomDuocDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    tenKhongDau: string | undefined;
    phanNhomDuocId: number | undefined;
    loaiThuoc: number | undefined;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfNhomDuocDto implements IPagedResultDtoOfNhomDuocDto {
    totalCount: number;
    items: NhomDuocDto[] | undefined;
    constructor(data?: IPagedResultDtoOfNhomDuocDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfNhomDuocDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfNhomDuocDto {
    totalCount: number;
    items: NhomDuocDto[] | undefined;
}
export declare enum NhomDvktBhyt_ThuocVtyt {
    DichVuKyThuat = 0,
    Thuoc = 1,
    VatTuYTe = 2
}
export declare class NhomDvktBhytPagedListInputDto implements INhomDvktBhytPagedListInputDto {
    thuocVtyt: NhomDvktBhyt_ThuocVtyt;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: INhomDvktBhytPagedListInputDto);
    init(data?: any): void;
    static fromJS(data: any): NhomDvktBhytPagedListInputDto;
    toJSON(data?: any): any;
}
export interface INhomDvktBhytPagedListInputDto {
    thuocVtyt: NhomDvktBhyt_ThuocVtyt;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class NhomDvktBhytDto implements INhomDvktBhytDto {
    ma: string | undefined;
    ten: string | undefined;
    thuocVtyt: NhomDvktBhyt_ThuocVtyt;
    isActive: boolean;
    id: number;
    constructor(data?: INhomDvktBhytDto);
    init(data?: any): void;
    static fromJS(data: any): NhomDvktBhytDto;
    toJSON(data?: any): any;
}
export interface INhomDvktBhytDto {
    ma: string | undefined;
    ten: string | undefined;
    thuocVtyt: NhomDvktBhyt_ThuocVtyt;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfNhomDvktBhytDto implements IPagedResultDtoOfNhomDvktBhytDto {
    totalCount: number;
    items: NhomDvktBhytDto[] | undefined;
    constructor(data?: IPagedResultDtoOfNhomDvktBhytDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfNhomDvktBhytDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfNhomDvktBhytDto {
    totalCount: number;
    items: NhomDvktBhytDto[] | undefined;
}
export declare class GetPermissionInputDto implements IGetPermissionInputDto {
    benhVienId: number | undefined;
    isRoleStatic: boolean;
    constructor(data?: IGetPermissionInputDto);
    init(data?: any): void;
    static fromJS(data: any): GetPermissionInputDto;
    toJSON(data?: any): any;
}
export interface IGetPermissionInputDto {
    benhVienId: number | undefined;
    isRoleStatic: boolean;
}
export declare class ProviderInfoDto implements IProviderInfoDto {
    providerName: string | undefined;
    providerKey: string | undefined;
    constructor(data?: IProviderInfoDto);
    init(data?: any): void;
    static fromJS(data: any): ProviderInfoDto;
    toJSON(data?: any): any;
}
export interface IProviderInfoDto {
    providerName: string | undefined;
    providerKey: string | undefined;
}
export declare class PermissionGrantInfoDto implements IPermissionGrantInfoDto {
    name: string | undefined;
    displayName: string | undefined;
    parentName: string | undefined;
    isGranted: boolean;
    allowedProviders: string[] | undefined;
    grantedProviders: ProviderInfoDto[] | undefined;
    constructor(data?: IPermissionGrantInfoDto);
    init(data?: any): void;
    static fromJS(data: any): PermissionGrantInfoDto;
    toJSON(data?: any): any;
}
export interface IPermissionGrantInfoDto {
    name: string | undefined;
    displayName: string | undefined;
    parentName: string | undefined;
    isGranted: boolean;
    allowedProviders: string[] | undefined;
    grantedProviders: ProviderInfoDto[] | undefined;
}
export declare class PermissionGroupDto implements IPermissionGroupDto {
    name: string | undefined;
    displayName: string | undefined;
    permissions: PermissionGrantInfoDto[] | undefined;
    constructor(data?: IPermissionGroupDto);
    init(data?: any): void;
    static fromJS(data: any): PermissionGroupDto;
    toJSON(data?: any): any;
}
export interface IPermissionGroupDto {
    name: string | undefined;
    displayName: string | undefined;
    permissions: PermissionGrantInfoDto[] | undefined;
}
export declare class GetPermissionListResultDto implements IGetPermissionListResultDto {
    entityDisplayName: string | undefined;
    groups: PermissionGroupDto[] | undefined;
    constructor(data?: IGetPermissionListResultDto);
    init(data?: any): void;
    static fromJS(data: any): GetPermissionListResultDto;
    toJSON(data?: any): any;
}
export interface IGetPermissionListResultDto {
    entityDisplayName: string | undefined;
    groups: PermissionGroupDto[] | undefined;
}
export declare enum LOAI_PHAC_DO {
    PhacDoBac1 = 1,
    PhacDoBac2 = 2
}
export declare class PhacDoDieuTriPagedRequestDto implements IPhacDoDieuTriPagedRequestDto {
    loaiPhacDo: LOAI_PHAC_DO;
    isActive: boolean | undefined;
    filter: string | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPhacDoDieuTriPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): PhacDoDieuTriPagedRequestDto;
    toJSON(data?: any): any;
}
export interface IPhacDoDieuTriPagedRequestDto {
    loaiPhacDo: LOAI_PHAC_DO;
    isActive: boolean | undefined;
    filter: string | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PhacDoDieuTriDto implements IPhacDoDieuTriDto {
    ma: string | undefined;
    ten: string | undefined;
    loaiPhacDo: LOAI_PHAC_DO;
    isActive: boolean;
    readonly trangThaiShow: string | undefined;
    readonly loaiPhacDoShow: string | undefined;
    id: number;
    constructor(data?: IPhacDoDieuTriDto);
    init(data?: any): void;
    static fromJS(data: any): PhacDoDieuTriDto;
    toJSON(data?: any): any;
}
export interface IPhacDoDieuTriDto {
    ma: string | undefined;
    ten: string | undefined;
    loaiPhacDo: LOAI_PHAC_DO;
    isActive: boolean;
    trangThaiShow: string | undefined;
    loaiPhacDoShow: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfPhacDoDieuTriDto implements IPagedResultDtoOfPhacDoDieuTriDto {
    totalCount: number;
    items: PhacDoDieuTriDto[] | undefined;
    constructor(data?: IPagedResultDtoOfPhacDoDieuTriDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfPhacDoDieuTriDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfPhacDoDieuTriDto {
    totalCount: number;
    items: PhacDoDieuTriDto[] | undefined;
}
export declare class PhanNhomDuocDto implements IPhanNhomDuocDto {
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    isActive: boolean;
    id: number;
    constructor(data?: IPhanNhomDuocDto);
    init(data?: any): void;
    static fromJS(data: any): PhanNhomDuocDto;
    toJSON(data?: any): any;
}
export interface IPhanNhomDuocDto {
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    isActive: boolean;
    id: number;
}
export declare class PagedResultDtoOfPhanNhomDuocDto implements IPagedResultDtoOfPhanNhomDuocDto {
    totalCount: number;
    items: PhanNhomDuocDto[] | undefined;
    constructor(data?: IPagedResultDtoOfPhanNhomDuocDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfPhanNhomDuocDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfPhanNhomDuocDto {
    totalCount: number;
    items: PhanNhomDuocDto[] | undefined;
}
export declare class PhongBanTreeDto implements IPhongBanTreeDto {
    ma: string | undefined;
    ten: string | undefined;
    parentId: number | undefined;
    benhVienId: number;
    readonly id: number;
    constructor(data?: IPhongBanTreeDto);
    init(data?: any): void;
    static fromJS(data: any): PhongBanTreeDto;
    toJSON(data?: any): any;
}
export interface IPhongBanTreeDto {
    ma: string | undefined;
    ten: string | undefined;
    parentId: number | undefined;
    benhVienId: number;
    id: number;
}
export declare class PagedRequestPhongBanDto implements IPagedRequestPhongBanDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedRequestPhongBanDto);
    init(data?: any): void;
    static fromJS(data: any): PagedRequestPhongBanDto;
    toJSON(data?: any): any;
}
export interface IPagedRequestPhongBanDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PhongBanDto implements IPhongBanDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    loaiPhongBanId: number | undefined;
    cap: number;
    parentId: number | undefined;
    loaiPhongBenhId: number | undefined;
    benhVienId: number;
    isActive: boolean;
    loaiPhongBan: string | undefined;
    parentName: string | undefined;
    id: number;
    constructor(data?: IPhongBanDto);
    init(data?: any): void;
    static fromJS(data: any): PhongBanDto;
    toJSON(data?: any): any;
}
export interface IPhongBanDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    loaiPhongBanId: number | undefined;
    cap: number;
    parentId: number | undefined;
    loaiPhongBenhId: number | undefined;
    benhVienId: number;
    isActive: boolean;
    loaiPhongBan: string | undefined;
    parentName: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfPhongBanDto implements IPagedResultDtoOfPhongBanDto {
    totalCount: number;
    items: PhongBanDto[] | undefined;
    constructor(data?: IPagedResultDtoOfPhongBanDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfPhongBanDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfPhongBanDto {
    totalCount: number;
    items: PhongBanDto[] | undefined;
}
export declare class FetchBenhIcdSearchRequest implements IFetchBenhIcdSearchRequest {
    id: number | undefined;
    chuongId: number | undefined;
    nhomId: number | undefined;
    isSelect: boolean;
    maBenh: string | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IFetchBenhIcdSearchRequest);
    init(data?: any): void;
    static fromJS(data: any): FetchBenhIcdSearchRequest;
    toJSON(data?: any): any;
}
export interface IFetchBenhIcdSearchRequest {
    id: number | undefined;
    chuongId: number | undefined;
    nhomId: number | undefined;
    isSelect: boolean;
    maBenh: string | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfComboBoxDto implements IPagedResultDtoOfComboBoxDto {
    totalCount: number;
    items: ComboBoxDto[] | undefined;
    constructor(data?: IPagedResultDtoOfComboBoxDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfComboBoxDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfComboBoxDto {
    totalCount: number;
    items: ComboBoxDto[] | undefined;
}
export declare class BenhIcdSearchDto implements IBenhIcdSearchDto {
    ma: string | undefined;
    ten: string | undefined;
    tenNhom: string | undefined;
    tenChuong: string | undefined;
    id: number;
    constructor(data?: IBenhIcdSearchDto);
    init(data?: any): void;
    static fromJS(data: any): BenhIcdSearchDto;
    toJSON(data?: any): any;
}
export interface IBenhIcdSearchDto {
    ma: string | undefined;
    ten: string | undefined;
    tenNhom: string | undefined;
    tenChuong: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfBenhIcdSearchDto implements IPagedResultDtoOfBenhIcdSearchDto {
    totalCount: number;
    items: BenhIcdSearchDto[] | undefined;
    constructor(data?: IPagedResultDtoOfBenhIcdSearchDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfBenhIcdSearchDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfBenhIcdSearchDto {
    totalCount: number;
    items: BenhIcdSearchDto[] | undefined;
}
export declare enum SelectOptionType {
    GioiTinh = 0,
    GioiTinhCon = 1,
    CapDoDonViHanhChinh = 2,
    LoaiBenhVien = 3,
    NhanLucTinhTrang = 4,
    LoaiThuoc = 5,
    DonViThoiGianSuDung = 6,
    ToaThuocMauLoai = 7,
    NhomDvktBhytThuocVtyt = 8,
    BenhNhanLoaiDiaChi = 9,
    NoiTuVong = 10,
    CapCoSo = 11,
    LoaiPhacDo = 12,
    MucDoDapUng = 13,
    LoaiPhieu = 14,
    BHYTTuyen = 15,
    KyBaoCao3081 = 16,
    TrangThaiBaoCao3081 = 17,
    KhamBenhNgoaiTruKetQuaKham = 18,
    BenhTruyenNhiemPhanLoaiChanDoan = 19,
    BenhTruyenNhiemTiemChung = 20,
    BenhTruyenNhiemTinhTrangTruongHopBenh = 21,
    BenhTruyenNhiemLoaiXetNghiem = 22,
    BenhTruyenNhiemLoaiCoSoDieuTri = 23,
    BenhTruyenNhiemKetQuaXetNghiem = 24,
    DoiTuongXetNghiem = 25,
    TrangThaiXetNghiem = 26,
    Tinh = 27,
    TinhSession = 28,
    Huyen = 29,
    HuyenSesion = 30,
    Xa = 31,
    Thon = 32,
    XaHuyenTinh = 33,
    HoatChat = 34,
    LoaiVatTu = 35,
    NhomDuoc = 36,
    DonViTinh = 37,
    DonViTinhCoBan = 38,
    LoaiDuoc = 39,
    PhanNhomDuoc = 40,
    ChuongTrinh = 41,
    NhomDichVuKyThuatBaoHiem = 42,
    NhomDvktBhytThuoc = 43,
    PhongBan = 44,
    PhongBanByDichVu = 45,
    NhomThamSoHeThong = 46,
    BenhVienHienTaiVaCapCon = 47,
    TienTe = 48,
    BacSiToaThuocMau = 49,
    LoaiGia = 50,
    NhomGia = 51,
    DuocToaThuocMau = 52,
    ICD = 53,
    ICDMAVN = 54,
    ChuongICD = 55,
    NhomICD = 56,
    NhomDichVu = 57,
    DichVu = 58,
    DichVuDaCauHinhPhongBan = 59,
    DichVuTiepDon = 60,
    NhomDichVuXetNghiem = 61,
    NhomDichVuCDHA = 62,
    NhanLuc = 63,
    LoaiKhuyetTat = 64,
    BienPhapPhaThai = 65,
    BenhNhan = 66,
    KhoDuoc = 67,
    HoGiaDinh = 68,
    BenhTruyenNhiem = 69,
    BenhTruyenNhiemBaoCaoThang = 70,
    AttpCoSoSXKDThucPham = 71,
    DoiTuongBaoHiemYTe = 72,
    NhaCungCap = 73,
    DichVuKyThuat = 74,
    DichVuTheoNhomDichVu = 75,
    MaDichVuKyThuat = 76,
    ChungTuSoLoNhap = 77,
    LoaiGiaByDoiTuong = 78,
    ChungTuSoLoNhapView = 79,
    ThietBi = 80,
    MauKetQuaChanDoanHinhAnh = 81,
    KhoaNoiTru = 82,
    KhangNguyen = 83,
    VacXin = 84,
    PhongBenhTrucThuocKhoa = 85,
    GiuongBenhTrongPhongBenh = 86,
    BenhVienCon = 87,
    GoiCuoc = 88,
    GoiCuocCascader = 89,
    KhuVucLuuTru = 90,
    NhomDoiTuong = 91,
    LoaiPhongBan = 92,
    NhomTSHeThong = 93,
    LoaiDichVu = 94,
    DanToc = 95,
    ChucVu = 96,
    ChucDanh = 97,
    LoaiNhanLuc = 98,
    TrinhDoChuyenMon = 99,
    LoaiChuyenNganh = 100,
    QuocGia = 101,
    LoaiPhongBenh = 102,
    GD_HINHTHUC = 103,
    GD_PHUONGTIEN = 104,
    LoaiBenhAnNgoaiTru = 105,
    KhoaDieuTri = 106,
    DuocPhamNguonNhapHang = 107,
    DuocPhamNguonNhapHangDuTruThuoc = 108,
    PhongBenh = 109,
    NoiCapCanCuoc = 110,
    DonViTaiSan = 111,
    LoaiTaiSan = 112,
    TrangThaiTaiSan = 113,
    LyDoGiamTaiSan = 114,
    DuongDung = 115,
    KieuHo = 116,
    XetNghiemLamQueThu = 117,
    KetQuaDieuTri = 118,
    PhamLoaiBenhNhan = 119,
    TonGiao = 120,
    NgheNghiep = 121,
    QuanHeChuHo = 122,
    QuanHeChuHoVaChuHo = 123,
    TinhTrangHonNhan = 124,
    TinhTrangLamViec = 125,
    TrinhDoHocVan = 126,
    BienPhapTranhThai = 127,
    LoaiBenh = 128,
    LoaiKhoDuoc = 129,
    TinhTrangHienTai = 130,
    LoaiNha = 131,
    NguonNuoc = 132,
    LoaiNhaVeSinh = 133,
    XuLyRac = 134,
    LyDoPhieuThu = 135,
    LyDoPhieuChi = 136,
    DiaDiemAnUong = 137,
    TrieuChung = 138,
    LayMau = 139,
    LoaiBienLai = 140,
    HinhThucThanhToan = 141
}
export declare class SelectOptionInputDto implements ISelectOptionInputDto {
    type: SelectOptionType;
    cascader: string | undefined;
    benhVienId: number;
    readonly cascaderId: number | undefined;
    readonly keyCache: string | undefined;
    constructor(data?: ISelectOptionInputDto);
    init(data?: any): void;
    static fromJS(data: any): SelectOptionInputDto;
    toJSON(data?: any): any;
}
export interface ISelectOptionInputDto {
    type: SelectOptionType;
    cascader: string | undefined;
    benhVienId: number;
    cascaderId: number | undefined;
    keyCache: string | undefined;
}
export declare enum SelectSearchServerType {
    Huyen = 0,
    Xa = 1
}
export declare class SelectSearchServerDto implements ISelectSearchServerDto {
    value: string | undefined;
    readonly valueId: number | undefined;
    type: SelectSearchServerType;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: ISelectSearchServerDto);
    init(data?: any): void;
    static fromJS(data: any): SelectSearchServerDto;
    toJSON(data?: any): any;
}
export interface ISelectSearchServerDto {
    value: string | undefined;
    valueId: number | undefined;
    type: SelectSearchServerType;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedRequestSoKhamDto implements IPagedRequestSoKhamDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedRequestSoKhamDto);
    init(data?: any): void;
    static fromJS(data: any): PagedRequestSoKhamDto;
    toJSON(data?: any): any;
}
export interface IPagedRequestSoKhamDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class SoKhamDto implements ISoKhamDto {
    ma: string | undefined;
    ten: string | undefined;
    id: number;
    constructor(data?: ISoKhamDto);
    init(data?: any): void;
    static fromJS(data: any): SoKhamDto;
    toJSON(data?: any): any;
}
export interface ISoKhamDto {
    ma: string | undefined;
    ten: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfSoKhamDto implements IPagedResultDtoOfSoKhamDto {
    totalCount: number;
    items: SoKhamDto[] | undefined;
    constructor(data?: IPagedResultDtoOfSoKhamDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfSoKhamDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfSoKhamDto {
    totalCount: number;
    items: SoKhamDto[] | undefined;
}
export declare class StaticRolePagedInputDto implements IStaticRolePagedInputDto {
    loaiBenhVien: number | undefined;
    isAdminTuyen: boolean | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IStaticRolePagedInputDto);
    init(data?: any): void;
    static fromJS(data: any): StaticRolePagedInputDto;
    toJSON(data?: any): any;
}
export interface IStaticRolePagedInputDto {
    loaiBenhVien: number | undefined;
    isAdminTuyen: boolean | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class StaticRolePagedOutputDto implements IStaticRolePagedOutputDto {
    ma: string | undefined;
    ten: string | undefined;
    isAdminTuyen: boolean;
    listLoaiCoSo: string | undefined;
    loaiBenhVien: number[] | undefined;
    readonly listTenLoaiCoSo: string[] | undefined;
    id: number;
    constructor(data?: IStaticRolePagedOutputDto);
    init(data?: any): void;
    static fromJS(data: any): StaticRolePagedOutputDto;
    toJSON(data?: any): any;
}
export interface IStaticRolePagedOutputDto {
    ma: string | undefined;
    ten: string | undefined;
    isAdminTuyen: boolean;
    listLoaiCoSo: string | undefined;
    loaiBenhVien: number[] | undefined;
    listTenLoaiCoSo: string[] | undefined;
    id: number;
}
export declare class PagedResultDtoOfStaticRolePagedOutputDto implements IPagedResultDtoOfStaticRolePagedOutputDto {
    totalCount: number;
    items: StaticRolePagedOutputDto[] | undefined;
    constructor(data?: IPagedResultDtoOfStaticRolePagedOutputDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfStaticRolePagedOutputDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfStaticRolePagedOutputDto {
    totalCount: number;
    items: StaticRolePagedOutputDto[] | undefined;
}
export declare class SysRoleDto implements ISysRoleDto {
    roleId: string;
    ma: string | undefined;
    ten: string | undefined;
    isAdminTuyen: boolean;
    isStatic: boolean;
    listLoaiCoSo: string | undefined;
    loaiBenhVien: string[] | undefined;
    benhVienId: number | undefined;
    id: number;
    constructor(data?: ISysRoleDto);
    init(data?: any): void;
    static fromJS(data: any): SysRoleDto;
    toJSON(data?: any): any;
}
export interface ISysRoleDto {
    roleId: string;
    ma: string | undefined;
    ten: string | undefined;
    isAdminTuyen: boolean;
    isStatic: boolean;
    listLoaiCoSo: string | undefined;
    loaiBenhVien: string[] | undefined;
    benhVienId: number | undefined;
    id: number;
}
export declare class CommonResultDtoOfSysRoleDto implements ICommonResultDtoOfSysRoleDto {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: SysRoleDto;
    constructor(data?: ICommonResultDtoOfSysRoleDto);
    init(data?: any): void;
    static fromJS(data: any): CommonResultDtoOfSysRoleDto;
    toJSON(data?: any): any;
}
export interface ICommonResultDtoOfSysRoleDto {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: SysRoleDto;
}
export declare class SetListPermissionAbleForAdminRoleRequest implements ISetListPermissionAbleForAdminRoleRequest {
    sysRoleId: number;
    permissionNames: string[] | undefined;
    constructor(data?: ISetListPermissionAbleForAdminRoleRequest);
    init(data?: any): void;
    static fromJS(data: any): SetListPermissionAbleForAdminRoleRequest;
    toJSON(data?: any): any;
}
export interface ISetListPermissionAbleForAdminRoleRequest {
    sysRoleId: number;
    permissionNames: string[] | undefined;
}
export declare class SysPermissionAdminDto implements ISysPermissionAdminDto {
    sysRoleId: number;
    name: string | undefined;
    id: number;
    constructor(data?: ISysPermissionAdminDto);
    init(data?: any): void;
    static fromJS(data: any): SysPermissionAdminDto;
    toJSON(data?: any): any;
}
export interface ISysPermissionAdminDto {
    sysRoleId: number;
    name: string | undefined;
    id: number;
}
export declare class SysPermissionLoaiBenhVienEntity implements ISysPermissionLoaiBenhVienEntity {
    loaiBenhVien: number;
    name: string | undefined;
    readonly id: number;
    constructor(data?: ISysPermissionLoaiBenhVienEntity);
    init(data?: any): void;
    static fromJS(data: any): SysPermissionLoaiBenhVienEntity;
    toJSON(data?: any): any;
}
export interface ISysPermissionLoaiBenhVienEntity {
    loaiBenhVien: number;
    name: string | undefined;
    id: number;
}
export declare class SetPermissionLoaiBenhVienRequest implements ISetPermissionLoaiBenhVienRequest {
    loaiBenhVien: number;
    permissionNames: string[] | undefined;
    constructor(data?: ISetPermissionLoaiBenhVienRequest);
    init(data?: any): void;
    static fromJS(data: any): SetPermissionLoaiBenhVienRequest;
    toJSON(data?: any): any;
}
export interface ISetPermissionLoaiBenhVienRequest {
    loaiBenhVien: number;
    permissionNames: string[] | undefined;
}
export declare class SetPermissionForSysRoleRequest implements ISetPermissionForSysRoleRequest {
    sysRoleId: number;
    permissionNames: string[] | undefined;
    constructor(data?: ISetPermissionForSysRoleRequest);
    init(data?: any): void;
    static fromJS(data: any): SetPermissionForSysRoleRequest;
    toJSON(data?: any): any;
}
export interface ISetPermissionForSysRoleRequest {
    sysRoleId: number;
    permissionNames: string[] | undefined;
}
export declare class SysRolePermissionDto implements ISysRolePermissionDto {
    sysRoleId: number;
    permissionNames: string[] | undefined;
    constructor(data?: ISysRolePermissionDto);
    init(data?: any): void;
    static fromJS(data: any): SysRolePermissionDto;
    toJSON(data?: any): any;
}
export interface ISysRolePermissionDto {
    sysRoleId: number;
    permissionNames: string[] | undefined;
}
export declare class RoleCoSoPagedInputDto implements IRoleCoSoPagedInputDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IRoleCoSoPagedInputDto);
    init(data?: any): void;
    static fromJS(data: any): RoleCoSoPagedInputDto;
    toJSON(data?: any): any;
}
export interface IRoleCoSoPagedInputDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfSysRoleDto implements IPagedResultDtoOfSysRoleDto {
    totalCount: number;
    items: SysRoleDto[] | undefined;
    constructor(data?: IPagedResultDtoOfSysRoleDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfSysRoleDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfSysRoleDto {
    totalCount: number;
    items: SysRoleDto[] | undefined;
}
export declare class CommonResultDtoOfInt64 implements ICommonResultDtoOfInt64 {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: number;
    constructor(data?: ICommonResultDtoOfInt64);
    init(data?: any): void;
    static fromJS(data: any): CommonResultDtoOfInt64;
    toJSON(data?: any): any;
}
export interface ICommonResultDtoOfInt64 {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: number;
}
export declare class GetListUserAdminCoSoRequest implements IGetListUserAdminCoSoRequest {
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    benhVienId: number | undefined;
    id: number | undefined;
    sysRoleId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IGetListUserAdminCoSoRequest);
    init(data?: any): void;
    static fromJS(data: any): GetListUserAdminCoSoRequest;
    toJSON(data?: any): any;
}
export interface IGetListUserAdminCoSoRequest {
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    benhVienId: number | undefined;
    id: number | undefined;
    sysRoleId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class SysUserDto implements ISysUserDto {
    userId: string;
    userName: string | undefined;
    ma: string | undefined;
    hoTen: string | undefined;
    hoTenKhongDau: string | undefined;
    email: string | undefined;
    soDienThoai: string | undefined;
    nhanLucId: number | undefined;
    benhVienId: number | undefined;
    phongBanId: number | undefined;
    listRoleName: string | undefined;
    tenBenhVien: string | undefined;
    sysRoleAdminId: number | undefined;
    tenQuyen: string | undefined;
    isCreator: boolean;
    isLock: boolean;
    tinhId: number | undefined;
    huyenId: number | undefined;
    id: number;
    constructor(data?: ISysUserDto);
    init(data?: any): void;
    static fromJS(data: any): SysUserDto;
    toJSON(data?: any): any;
}
export interface ISysUserDto {
    userId: string;
    userName: string | undefined;
    ma: string | undefined;
    hoTen: string | undefined;
    hoTenKhongDau: string | undefined;
    email: string | undefined;
    soDienThoai: string | undefined;
    nhanLucId: number | undefined;
    benhVienId: number | undefined;
    phongBanId: number | undefined;
    listRoleName: string | undefined;
    tenBenhVien: string | undefined;
    sysRoleAdminId: number | undefined;
    tenQuyen: string | undefined;
    isCreator: boolean;
    isLock: boolean;
    tinhId: number | undefined;
    huyenId: number | undefined;
    id: number;
}
export declare class PagedResultDtoOfSysUserDto implements IPagedResultDtoOfSysUserDto {
    totalCount: number;
    items: SysUserDto[] | undefined;
    constructor(data?: IPagedResultDtoOfSysUserDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfSysUserDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfSysUserDto {
    totalCount: number;
    items: SysUserDto[] | undefined;
}
export declare class CreateSysUserDto implements ICreateSysUserDto {
    ma: string | undefined;
    hoTen: string | undefined;
    nhanLucId: number | undefined;
    email: string | undefined;
    soDienThoai: string | undefined;
    matKhau: string | undefined;
    benhVienId: number;
    constructor(data?: ICreateSysUserDto);
    init(data?: any): void;
    static fromJS(data: any): CreateSysUserDto;
    toJSON(data?: any): any;
}
export interface ICreateSysUserDto {
    ma: string | undefined;
    hoTen: string | undefined;
    nhanLucId: number | undefined;
    email: string | undefined;
    soDienThoai: string | undefined;
    matKhau: string | undefined;
    benhVienId: number;
}
export declare class TaoTaiKhoanAdminCoSoInputDto implements ITaoTaiKhoanAdminCoSoInputDto {
    benhVienId: number;
    sysRoleId: number;
    userDto: CreateSysUserDto;
    constructor(data?: ITaoTaiKhoanAdminCoSoInputDto);
    init(data?: any): void;
    static fromJS(data: any): TaoTaiKhoanAdminCoSoInputDto;
    toJSON(data?: any): any;
}
export interface ITaoTaiKhoanAdminCoSoInputDto {
    benhVienId: number;
    sysRoleId: number;
    userDto: CreateSysUserDto;
}
export declare class CommonResultDtoOfSysUserDto implements ICommonResultDtoOfSysUserDto {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: SysUserDto;
    constructor(data?: ICommonResultDtoOfSysUserDto);
    init(data?: any): void;
    static fromJS(data: any): CommonResultDtoOfSysUserDto;
    toJSON(data?: any): any;
}
export interface ICommonResultDtoOfSysUserDto {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: SysUserDto;
}
export declare class UpdateUserDto implements IUpdateUserDto {
    id: number;
    hoTen: string | undefined;
    nhanLucId: number | undefined;
    email: string | undefined;
    soDienThoai: string | undefined;
    constructor(data?: IUpdateUserDto);
    init(data?: any): void;
    static fromJS(data: any): UpdateUserDto;
    toJSON(data?: any): any;
}
export interface IUpdateUserDto {
    id: number;
    hoTen: string | undefined;
    nhanLucId: number | undefined;
    email: string | undefined;
    soDienThoai: string | undefined;
}
export declare class DoiMatKhauRequest implements IDoiMatKhauRequest {
    userExtensionId: number;
    matKhauMoi: string | undefined;
    constructor(data?: IDoiMatKhauRequest);
    init(data?: any): void;
    static fromJS(data: any): DoiMatKhauRequest;
    toJSON(data?: any): any;
}
export interface IDoiMatKhauRequest {
    userExtensionId: number;
    matKhauMoi: string | undefined;
}
export declare class CommonResultDtoOfGuid implements ICommonResultDtoOfGuid {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: string;
    constructor(data?: ICommonResultDtoOfGuid);
    init(data?: any): void;
    static fromJS(data: any): CommonResultDtoOfGuid;
    toJSON(data?: any): any;
}
export interface ICommonResultDtoOfGuid {
    isSuccessful: boolean;
    errorCode: string | undefined;
    errorMessage: string | undefined;
    dataResult: string;
}
export declare class GetListUserCoSoRequest implements IGetListUserCoSoRequest {
    sysRoleId: number | undefined;
    id: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IGetListUserCoSoRequest);
    init(data?: any): void;
    static fromJS(data: any): GetListUserCoSoRequest;
    toJSON(data?: any): any;
}
export interface IGetListUserCoSoRequest {
    sysRoleId: number | undefined;
    id: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class RoleAbleDto implements IRoleAbleDto {
    sysRoleId: number;
    ma: string | undefined;
    ten: string | undefined;
    isCheck: boolean;
    isStatic: boolean;
    isAdminTuyen: boolean;
    constructor(data?: IRoleAbleDto);
    init(data?: any): void;
    static fromJS(data: any): RoleAbleDto;
    toJSON(data?: any): any;
}
export interface IRoleAbleDto {
    sysRoleId: number;
    ma: string | undefined;
    ten: string | undefined;
    isCheck: boolean;
    isStatic: boolean;
    isAdminTuyen: boolean;
}
export declare class SetRoleForUserRequest implements ISetRoleForUserRequest {
    userExtensionId: number;
    listSysRoleId: number[] | undefined;
    constructor(data?: ISetRoleForUserRequest);
    init(data?: any): void;
    static fromJS(data: any): SetRoleForUserRequest;
    toJSON(data?: any): any;
}
export interface ISetRoleForUserRequest {
    userExtensionId: number;
    listSysRoleId: number[] | undefined;
}
export declare class SysUserRoleEntity implements ISysUserRoleEntity {
    sysRoleId: number;
    userExtensionId: number;
    readonly id: number;
    constructor(data?: ISysUserRoleEntity);
    init(data?: any): void;
    static fromJS(data: any): SysUserRoleEntity;
    toJSON(data?: any): any;
}
export interface ISysUserRoleEntity {
    sysRoleId: number;
    userExtensionId: number;
    id: number;
}
export declare class CauHinhSysAppPrivateRoleItemDto implements ICauHinhSysAppPrivateRoleItemDto {
    id: number;
    ma: string | undefined;
    ten: string | undefined;
    isCheck: boolean;
    constructor(data?: ICauHinhSysAppPrivateRoleItemDto);
    init(data?: any): void;
    static fromJS(data: any): CauHinhSysAppPrivateRoleItemDto;
    toJSON(data?: any): any;
}
export interface ICauHinhSysAppPrivateRoleItemDto {
    id: number;
    ma: string | undefined;
    ten: string | undefined;
    isCheck: boolean;
}
export declare class DanhSachCauHinhSysAppPrivateRoleDto implements IDanhSachCauHinhSysAppPrivateRoleDto {
    listOfPhongBan: CauHinhSysAppPrivateRoleItemDto[] | undefined;
    listOfKhoDuoc: CauHinhSysAppPrivateRoleItemDto[] | undefined;
    listOfCanLamSang: CauHinhSysAppPrivateRoleItemDto[] | undefined;
    constructor(data?: IDanhSachCauHinhSysAppPrivateRoleDto);
    init(data?: any): void;
    static fromJS(data: any): DanhSachCauHinhSysAppPrivateRoleDto;
    toJSON(data?: any): any;
}
export interface IDanhSachCauHinhSysAppPrivateRoleDto {
    listOfPhongBan: CauHinhSysAppPrivateRoleItemDto[] | undefined;
    listOfKhoDuoc: CauHinhSysAppPrivateRoleItemDto[] | undefined;
    listOfCanLamSang: CauHinhSysAppPrivateRoleItemDto[] | undefined;
}
export declare class SysAppPrivateRoleDto implements ISysAppPrivateRoleDto {
    groupCode: string | undefined;
    code: string | undefined;
    userId: string;
    userV1Id: number | undefined;
    benhVienId: number;
    valueId: number | undefined;
    valueCode: string | undefined;
    valueName: string | undefined;
    id: number;
    constructor(data?: ISysAppPrivateRoleDto);
    init(data?: any): void;
    static fromJS(data: any): SysAppPrivateRoleDto;
    toJSON(data?: any): any;
}
export interface ISysAppPrivateRoleDto {
    groupCode: string | undefined;
    code: string | undefined;
    userId: string;
    userV1Id: number | undefined;
    benhVienId: number;
    valueId: number | undefined;
    valueCode: string | undefined;
    valueName: string | undefined;
    id: number;
}
export declare class LuuSysAppPrivateRoleUserRequset implements ILuuSysAppPrivateRoleUserRequset {
    userExtensionId: number;
    code: string | undefined;
    dtos: SysAppPrivateRoleDto[] | undefined;
    constructor(data?: ILuuSysAppPrivateRoleUserRequset);
    init(data?: any): void;
    static fromJS(data: any): LuuSysAppPrivateRoleUserRequset;
    toJSON(data?: any): any;
}
export interface ILuuSysAppPrivateRoleUserRequset {
    userExtensionId: number;
    code: string | undefined;
    dtos: SysAppPrivateRoleDto[] | undefined;
}
export declare class ParamUpdateValueThamSoBenhVien implements IParamUpdateValueThamSoBenhVien {
    id: number;
    value: string | undefined;
    constructor(data?: IParamUpdateValueThamSoBenhVien);
    init(data?: any): void;
    static fromJS(data: any): ParamUpdateValueThamSoBenhVien;
    toJSON(data?: any): any;
}
export interface IParamUpdateValueThamSoBenhVien {
    id: number;
    value: string | undefined;
}
export declare class ParamsUpdateChangedThamSoBenhVien implements IParamsUpdateChangedThamSoBenhVien {
    id: number;
    value: boolean;
    dataFieldChanged: string | undefined;
    constructor(data?: IParamsUpdateChangedThamSoBenhVien);
    init(data?: any): void;
    static fromJS(data: any): ParamsUpdateChangedThamSoBenhVien;
    toJSON(data?: any): any;
}
export interface IParamsUpdateChangedThamSoBenhVien {
    id: number;
    value: boolean;
    dataFieldChanged: string | undefined;
}
export declare class ThamSoBenhVienPagedRequestDto implements IThamSoBenhVienPagedRequestDto {
    groupCodeId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IThamSoBenhVienPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): ThamSoBenhVienPagedRequestDto;
    toJSON(data?: any): any;
}
export interface IThamSoBenhVienPagedRequestDto {
    groupCodeId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class SysAppSettingsDto implements ISysAppSettingsDto {
    code: string | undefined;
    value: string | undefined;
    description: string | undefined;
    locked: boolean;
    systemEditonOnly: boolean;
    groupCode: string | undefined;
    dataType: string | undefined;
    language: string | undefined;
    benhVienId: number;
    isActive: boolean;
    tenNhom: string | undefined;
    groupCodeId: number;
    tuyenBenhVien: string | undefined;
    id: number;
    constructor(data?: ISysAppSettingsDto);
    init(data?: any): void;
    static fromJS(data: any): SysAppSettingsDto;
    toJSON(data?: any): any;
}
export interface ISysAppSettingsDto {
    code: string | undefined;
    value: string | undefined;
    description: string | undefined;
    locked: boolean;
    systemEditonOnly: boolean;
    groupCode: string | undefined;
    dataType: string | undefined;
    language: string | undefined;
    benhVienId: number;
    isActive: boolean;
    tenNhom: string | undefined;
    groupCodeId: number;
    tuyenBenhVien: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfSysAppSettingsDto implements IPagedResultDtoOfSysAppSettingsDto {
    totalCount: number;
    items: SysAppSettingsDto[] | undefined;
    constructor(data?: IPagedResultDtoOfSysAppSettingsDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfSysAppSettingsDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfSysAppSettingsDto {
    totalCount: number;
    items: SysAppSettingsDto[] | undefined;
}
export declare class ThamSoHeThongPagedRequest implements IThamSoHeThongPagedRequest {
    nhomThamSoId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IThamSoHeThongPagedRequest);
    init(data?: any): void;
    static fromJS(data: any): ThamSoHeThongPagedRequest;
    toJSON(data?: any): any;
}
export interface IThamSoHeThongPagedRequest {
    nhomThamSoId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class ThamSoHeThongDto implements IThamSoHeThongDto {
    code: string | undefined;
    value: string | undefined;
    description: string | undefined;
    locked: boolean;
    systemEditonOnly: boolean;
    groupCode: string | undefined;
    dataType: string | undefined;
    language: string | undefined;
    isActive: boolean;
    nhomThamSoId: number;
    nhomThamSo: string | undefined;
    id: number;
    constructor(data?: IThamSoHeThongDto);
    init(data?: any): void;
    static fromJS(data: any): ThamSoHeThongDto;
    toJSON(data?: any): any;
}
export interface IThamSoHeThongDto {
    code: string | undefined;
    value: string | undefined;
    description: string | undefined;
    locked: boolean;
    systemEditonOnly: boolean;
    groupCode: string | undefined;
    dataType: string | undefined;
    language: string | undefined;
    isActive: boolean;
    nhomThamSoId: number;
    nhomThamSo: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfThamSoHeThongDto implements IPagedResultDtoOfThamSoHeThongDto {
    totalCount: number;
    items: ThamSoHeThongDto[] | undefined;
    constructor(data?: IPagedResultDtoOfThamSoHeThongDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfThamSoHeThongDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfThamSoHeThongDto {
    totalCount: number;
    items: ThamSoHeThongDto[] | undefined;
}
export declare class PagedRequestThietBiDto implements IPagedRequestThietBiDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedRequestThietBiDto);
    init(data?: any): void;
    static fromJS(data: any): PagedRequestThietBiDto;
    toJSON(data?: any): any;
}
export interface IPagedRequestThietBiDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class ThietBiDto implements IThietBiDto {
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    nhomThietBiId: number | undefined;
    phongBanId: number | undefined;
    isActive: boolean;
    benhVienId: number;
    tenPhongBan: string | undefined;
    id: number;
    constructor(data?: IThietBiDto);
    init(data?: any): void;
    static fromJS(data: any): ThietBiDto;
    toJSON(data?: any): any;
}
export interface IThietBiDto {
    ma: string | undefined;
    ten: string | undefined;
    tenKhongDau: string | undefined;
    nhomThietBiId: number | undefined;
    phongBanId: number | undefined;
    isActive: boolean;
    benhVienId: number;
    tenPhongBan: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfThietBiDto implements IPagedResultDtoOfThietBiDto {
    totalCount: number;
    items: ThietBiDto[] | undefined;
    constructor(data?: IPagedResultDtoOfThietBiDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfThietBiDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfThietBiDto {
    totalCount: number;
    items: ThietBiDto[] | undefined;
}
export declare class TienTeDto implements ITienTeDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    isActive: boolean;
    isExists: boolean;
    id: number;
    constructor(data?: ITienTeDto);
    init(data?: any): void;
    static fromJS(data: any): TienTeDto;
    toJSON(data?: any): any;
}
export interface ITienTeDto {
    ma: string | undefined;
    ten: string | undefined;
    tenEn: string | undefined;
    isActive: boolean;
    isExists: boolean;
    id: number;
}
export declare class TienTePagedRequestDto implements ITienTePagedRequestDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: ITienTePagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): TienTePagedRequestDto;
    toJSON(data?: any): any;
}
export interface ITienTePagedRequestDto {
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfTienTeDto implements IPagedResultDtoOfTienTeDto {
    totalCount: number;
    items: TienTeDto[] | undefined;
    constructor(data?: IPagedResultDtoOfTienTeDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfTienTeDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfTienTeDto {
    totalCount: number;
    items: TienTeDto[] | undefined;
}
export declare class TienTeTyGiaPagedRequestDto implements ITienTeTyGiaPagedRequestDto {
    tienTeId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: ITienTeTyGiaPagedRequestDto);
    init(data?: any): void;
    static fromJS(data: any): TienTeTyGiaPagedRequestDto;
    toJSON(data?: any): any;
}
export interface ITienTeTyGiaPagedRequestDto {
    tienTeId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class TienTeTyGiaDto implements ITienTeTyGiaDto {
    tienTeId: number;
    tyGiaVND: number | undefined;
    tyGiaUSD: number | undefined;
    benhVienId: number;
    isActive: boolean;
    tenTienTe: string | undefined;
    id: number;
    constructor(data?: ITienTeTyGiaDto);
    init(data?: any): void;
    static fromJS(data: any): TienTeTyGiaDto;
    toJSON(data?: any): any;
}
export interface ITienTeTyGiaDto {
    tienTeId: number;
    tyGiaVND: number | undefined;
    tyGiaUSD: number | undefined;
    benhVienId: number;
    isActive: boolean;
    tenTienTe: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfTienTeTyGiaDto implements IPagedResultDtoOfTienTeTyGiaDto {
    totalCount: number;
    items: TienTeTyGiaDto[] | undefined;
    constructor(data?: IPagedResultDtoOfTienTeTyGiaDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfTienTeTyGiaDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfTienTeTyGiaDto {
    totalCount: number;
    items: TienTeTyGiaDto[] | undefined;
}
export declare class PagedRequestToaThuocMauDto implements IPagedRequestToaThuocMauDto {
    loai: string | undefined;
    bacSiId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedRequestToaThuocMauDto);
    init(data?: any): void;
    static fromJS(data: any): PagedRequestToaThuocMauDto;
    toJSON(data?: any): any;
}
export interface IPagedRequestToaThuocMauDto {
    loai: string | undefined;
    bacSiId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class DSToaThuocMauDto implements IDSToaThuocMauDto {
    bacSiId: number | undefined;
    ma: string | undefined;
    ten: string | undefined;
    maICD: string | undefined;
    id: number;
    constructor(data?: IDSToaThuocMauDto);
    init(data?: any): void;
    static fromJS(data: any): DSToaThuocMauDto;
    toJSON(data?: any): any;
}
export interface IDSToaThuocMauDto {
    bacSiId: number | undefined;
    ma: string | undefined;
    ten: string | undefined;
    maICD: string | undefined;
    id: number;
}
export declare class PagedResultDtoOfDSToaThuocMauDto implements IPagedResultDtoOfDSToaThuocMauDto {
    totalCount: number;
    items: DSToaThuocMauDto[] | undefined;
    constructor(data?: IPagedResultDtoOfDSToaThuocMauDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfDSToaThuocMauDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfDSToaThuocMauDto {
    totalCount: number;
    items: DSToaThuocMauDto[] | undefined;
}
export declare class ToaThuocMauDto implements IToaThuocMauDto {
    bacSiId: number | undefined;
    ma: string | undefined;
    ten: string | undefined;
    duocId: number | undefined;
    sang: number | undefined;
    trua: number | undefined;
    chieu: number | undefined;
    toi: number | undefined;
    soNgay: number | undefined;
    soLuong: number | undefined;
    duongDungId: number | undefined;
    loai: string | undefined;
    maICD: string | undefined;
    benhVienId: number;
    maDuoc: string | undefined;
    tenDuoc: string | undefined;
    id: number;
    constructor(data?: IToaThuocMauDto);
    init(data?: any): void;
    static fromJS(data: any): ToaThuocMauDto;
    toJSON(data?: any): any;
}
export interface IToaThuocMauDto {
    bacSiId: number | undefined;
    ma: string | undefined;
    ten: string | undefined;
    duocId: number | undefined;
    sang: number | undefined;
    trua: number | undefined;
    chieu: number | undefined;
    toi: number | undefined;
    soNgay: number | undefined;
    soLuong: number | undefined;
    duongDungId: number | undefined;
    loai: string | undefined;
    maICD: string | undefined;
    benhVienId: number;
    maDuoc: string | undefined;
    tenDuoc: string | undefined;
    id: number;
}
export declare class PagedRequestToaThuocMauChiTietDto implements IPagedRequestToaThuocMauChiTietDto {
    ma: string | undefined;
    bacSiId: number;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedRequestToaThuocMauChiTietDto);
    init(data?: any): void;
    static fromJS(data: any): PagedRequestToaThuocMauChiTietDto;
    toJSON(data?: any): any;
}
export interface IPagedRequestToaThuocMauChiTietDto {
    ma: string | undefined;
    bacSiId: number;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class PagedResultDtoOfToaThuocMauDto implements IPagedResultDtoOfToaThuocMauDto {
    totalCount: number;
    items: ToaThuocMauDto[] | undefined;
    constructor(data?: IPagedResultDtoOfToaThuocMauDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfToaThuocMauDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfToaThuocMauDto {
    totalCount: number;
    items: ToaThuocMauDto[] | undefined;
}
export declare class BenhVienSessionDto implements IBenhVienSessionDto {
    ma: string | undefined;
    ten: string | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    tuyenBenhVien: number | undefined;
    loaiBenhVien: number | undefined;
    benhVienChaId: number | undefined;
    diaChi: string | undefined;
    coQuanChuQuanId: number | undefined;
    constructor(data?: IBenhVienSessionDto);
    init(data?: any): void;
    static fromJS(data: any): BenhVienSessionDto;
    toJSON(data?: any): any;
}
export interface IBenhVienSessionDto {
    ma: string | undefined;
    ten: string | undefined;
    tinhId: number | undefined;
    huyenId: number | undefined;
    xaId: number | undefined;
    tuyenBenhVien: number | undefined;
    loaiBenhVien: number | undefined;
    benhVienChaId: number | undefined;
    diaChi: string | undefined;
    coQuanChuQuanId: number | undefined;
}
export declare class NhanLucSessionDto implements INhanLucSessionDto {
    id: number;
    ma: string | undefined;
    ten: string | undefined;
    ngaySinh: moment.Moment | undefined;
    gioiTinh: number;
    phongBanId: number | undefined;
    chucVuId: number | undefined;
    chucDanhId: number | undefined;
    loaiNhanLucId: number | undefined;
    constructor(data?: INhanLucSessionDto);
    init(data?: any): void;
    static fromJS(data: any): NhanLucSessionDto;
    toJSON(data?: any): any;
}
export interface INhanLucSessionDto {
    id: number;
    ma: string | undefined;
    ten: string | undefined;
    ngaySinh: moment.Moment | undefined;
    gioiTinh: number;
    phongBanId: number | undefined;
    chucVuId: number | undefined;
    chucDanhId: number | undefined;
    loaiNhanLucId: number | undefined;
}
export declare class UserSessionDto implements IUserSessionDto {
    userId: string;
    benhVienId: number | undefined;
    nhanLucId: number | undefined;
    benhVienDto: BenhVienSessionDto;
    nhanLucDto: NhanLucSessionDto;
    constructor(data?: IUserSessionDto);
    init(data?: any): void;
    static fromJS(data: any): UserSessionDto;
    toJSON(data?: any): any;
}
export interface IUserSessionDto {
    userId: string;
    benhVienId: number | undefined;
    nhanLucId: number | undefined;
    benhVienDto: BenhVienSessionDto;
    nhanLucDto: NhanLucSessionDto;
}
export declare class PagedVacXinInputDto implements IPagedVacXinInputDto {
    nhomVacXinId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
    constructor(data?: IPagedVacXinInputDto);
    init(data?: any): void;
    static fromJS(data: any): PagedVacXinInputDto;
    toJSON(data?: any): any;
}
export interface IPagedVacXinInputDto {
    nhomVacXinId: number | undefined;
    filter: string | undefined;
    isActive: boolean | undefined;
    exportMode: ExportModel;
    outputFileExtension: OutputFileExtension;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}
export declare class VacXinDto implements IVacXinDto {
    ten: string | undefined;
    tenDayDu: string | undefined;
    cvx: string | undefined;
    strLoai: string | undefined;
    loai: number;
    tcmr: boolean;
    duongDung: number | undefined;
    vacXinKhangNguyenId: number;
    tenKhangNguyen: string | undefined;
    listKhangNguyen: string[] | undefined;
    id: number;
    constructor(data?: IVacXinDto);
    init(data?: any): void;
    static fromJS(data: any): VacXinDto;
    toJSON(data?: any): any;
}
export interface IVacXinDto {
    ten: string | undefined;
    tenDayDu: string | undefined;
    cvx: string | undefined;
    strLoai: string | undefined;
    loai: number;
    tcmr: boolean;
    duongDung: number | undefined;
    vacXinKhangNguyenId: number;
    tenKhangNguyen: string | undefined;
    listKhangNguyen: string[] | undefined;
    id: number;
}
export declare class PagedResultDtoOfVacXinDto implements IPagedResultDtoOfVacXinDto {
    totalCount: number;
    items: VacXinDto[] | undefined;
    constructor(data?: IPagedResultDtoOfVacXinDto);
    init(data?: any): void;
    static fromJS(data: any): PagedResultDtoOfVacXinDto;
    toJSON(data?: any): any;
}
export interface IPagedResultDtoOfVacXinDto {
    totalCount: number;
    items: VacXinDto[] | undefined;
}
export declare class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: {
        [key: string]: any;
    };
    result: any;
    constructor(message: string, status: number, response: string, headers: {
        [key: string]: any;
    }, result: any);
    protected isApiException: boolean;
    static isApiException(obj: any): obj is ApiException;
}
//# sourceMappingURL=danh-muc-service-proxies.d.ts.map