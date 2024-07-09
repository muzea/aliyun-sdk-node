export interface SyncSpeechByCombinationResponse {
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
     * @example `671D0F8F-FDC7-4B12-93FA-336C079C965A`
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
     * 返回的结果。
     */
    Data: {
        /**
         * 重试次数。
         * @example `1`
         */
        RetryCount: number;
        /**
         * 播报是否成功。
         * @example `true`
         */
        Success: boolean;
        /**
         * 设备播报返回错误信息。
         * @example `speech model not found`
         */
        DeviceErrorMessage: string;
        /**
         * 最多重试次数。
         * @example `2`
         */
        MaxRetryCount: number;
        /**
         * 设备播报返回错误码。
         * @example `1`
         */
        DeviceErrorCode: string;
        /**
         * 下发给设备的唯一播报ID，即请求的参数SpeechId，若不传入则由系统生成。
         * @example `42000011392021112380********`
         */
        Id: string;
        /**
         * 设备播报详情。
         * @example `Bat_Pt:99 RSSI: -92`
         */
        Detail: string;
    };
}
