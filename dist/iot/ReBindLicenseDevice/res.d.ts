export interface ReBindLicenseDeviceResponse {
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
     * 返回重新绑定结果。
     */
    Data: {
        /**
         * 重新授权License成功的设备个数。
         * @example `10`
         */
        SuccessSum: number;
        /**
         * 为批量设备授权License的进度百分比，即取值范围为1~100。
         * @example `100`
         */
        Progress: number;
        /**
         * 重新授权License完成后，授权失败设备文件的URL。
         * @example `http://***`
         */
        ResultCsvFile: string;
        /**
         * 查询批量授权设备进度的唯一ID。
         * @example `123***`
         */
        CheckProgressId: string;
        /**
         * 授权License失败的设备个数。
         * @example `2`
         */
        FailSum: number;
    };
}
