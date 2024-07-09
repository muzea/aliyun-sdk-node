export interface GetWhatsappConnectionCatalogResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2O`
     */
    RequestId: string;
    /**
     * 错误提示信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回结果。
     * @example `{"id":"200292992","name":"Alibaba_catalog"}`
     */
    Model: any;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `false`
     */
    Success: boolean;
}
