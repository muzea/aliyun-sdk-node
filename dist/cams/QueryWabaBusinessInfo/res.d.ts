export interface QueryWabaBusinessInfoResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 提示信息，当返回异常时有值。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2O`
     */
    RequestId: string;
    /**
     * Waba商业信息。
     */
    Data: {
        /**
         * 行业。
         * @example `零售`
         */
        Vertical: string;
        /**
         * 校验状态。
         * @example `verified`
         */
        VerificationStatus: string;
        /**
         * Business平台名称。
         * @example `Alibaba`
         */
        BusinessName: string;
        /**
         * Business平台Id。
         * @example `19288282****`
         */
        BusinessId: string;
    };
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `false`
     */
    Success: boolean;
}
