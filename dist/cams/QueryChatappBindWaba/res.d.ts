export interface QueryChatappBindWabaResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 错误提示信息。
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * WABA相关信息。
         */
        AuthInternationalRateEligibility: any;
        /**
         * 币种。
         * @example `USD`
         */
        Currency: string;
        /**
         * WABA账户ID。
         * @example `20393988393993***`
         */
        Id: string;
        /**
         * Waba审核状态。取值：
         *  - PENDING ：待审核
         *  - APPROVED ：审核通过
         *  - REJECTED  ：审核不通过
         *  - DISABLED：禁用
         * @example `APPROVED`
         */
        AccountReviewStatus: string;
        /**
         * 模板命名空间。
         * @example `93e6b26e_8a67_4163_a093_ebfe645a66b0`
         */
        MessageTemplateNamespace: string;
        /**
         * WABA账号名称。
         * @example `Alibaba`
         */
        Name: string;
        /**
         * 国际费率能力资格。
         * @example `"start_time":1721952000`
         */
        PrimaryBusinessLocation: string;
    };
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
     * @example `true`
     */
    Success: boolean;
}
