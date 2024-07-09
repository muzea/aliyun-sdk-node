export interface GetCatalogResponse {
    /**
     * Code
     * @example `OK`
     */
    Code: string;
    /**
     * Message
     * @example `.`
     */
    Message: string;
    /**
     * RequestId
     * @example `DB07AAE9-4B88-5DEA-8F1D-4D1A9A864A85`
     */
    RequestId: string;
    /**
     * Success
     * @example `true`
     */
    Success: boolean;
    /**
     * catalog详情
     * @example `参考Catalog实体`
     */
    Catalog: any;
}
