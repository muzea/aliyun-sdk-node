export interface DeleteProfileCatalogRequest {
    /**
     * 区域id
     * @example `区域id`
     */
    "CorpId"?: string;
    /**
     * 区域中对人员数据隔离
     * @example `区域中对人员数据隔离`
     */
    "IsvSubId": string;
    /**
     * 人员分组id
     * @example `1`
     */
    "CatalogId": string;
}
