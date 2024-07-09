export interface DeleteCatalogRequest {
    /**
     * CatalogId
     * @example `catalog_test`
     */
    "CatalogId": string;
    /**
     * 是否异步，默认同步
     * @example `true`
     */
    "IsAsync"?: boolean;
}
