export interface PrintByTemplateResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.printservice.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `print service not open`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `66FF51D3-***-49F1-B1A2-***	`
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
     * 打印结果。
     */
    Data: {
        /**
         * 实际重试次数。
         * @example `0`
         */
        RetryCount: number;
        /**
         * 是否打印成功。
         * - **true**：打印成功。
         * - **false**：打印失败。
         * @example `true`
         */
        Success: boolean;
        /**
         * 打印设备返回的错误详情。
         * @example `no paper`
         */
        DeviceErrorMessage: string;
        /**
         * 最多重试次数，固定取值为2，最多重试2次。
         * 打印指令下发到设备后，如果设备回复失败或者超时，服务器将重新下发打印指令。
         * @example `2`
         */
        MaxRetryCount: number;
        /**
         * 打印设备返回的错误码。
         * - 2：缺纸
         * - 3：卡纸
         * @example `2`
         */
        DeviceErrorCode: string;
        /**
         * 打印的ID。
         * @example `NyWh5lw3*****RfL9LJUivhOhQV*****`
         */
        Id: string;
    };
}
