export interface GetSpeechLicenseDeviceStatisticsResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `An internal error occurred. Try again later.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `AF71BF1D-B552-47CD-B34B-352557627992`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 可用License数量。
         * @example `100`
         */
        AvailableQuota: number;
        /**
         * 已过期的License数量。
         * @example `100`
         */
        ExpiredQuota: number;
        /**
         * 即将过期License数量。
         * @example `100`
         */
        ExpiringQuota: number;
    };
}
