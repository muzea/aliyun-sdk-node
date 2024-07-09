export interface ChatappEmbedSignUpResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误提示信息。
     * @example `无`
     */
    Message: string;
    /**
     * Waba列表。
     */
    Wabas: {
        /**
         * Waba Id。
         * @example `2939933992****`
         */
        Id: string;
        /**
         * Waba名称。
         * @example `Alibaba`
         */
        Name: string;
        /**
         * 币种。
         * @example `USD`
         */
        Currency: string;
        /**
         * Waba审核状态。
         * @example `VERIFIED`
         */
        AccountReviewStatus: string;
        /**
         * 消息模板命名空间。
         * @example `alals-lsslls-slslsos-****`
         */
        MessageTemplateNamespace: string;
    }[];
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
