export interface BatchGrayMigrationDeviceResponse {
    /**
     * 调用失败时，返回错误码。详细信息，请参见下文**错误码**。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
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
     * 返回的迁移结果。
     */
    Data: {
        Details: {
            /**
             * 返回的设备迁移状态信息。
             */
            item: {
                /**
                 * 设备迁移状态。
                 * - **DEVICE_SUCCEEDED**：成功。
                 * - **DEVICE_FAILED**：失败。
                 * @example `SUCCEEDED`
                 */
                Status: string;
                /**
                 * 迁移失败返回的错误码。
                 * @example `500`
                 */
                Code: number;
                /**
                 * 迁移失败，返回的出错信息。
                 * @example `系统错误`
                 */
                Message: string;
                /**
                 * 设备名称。
                 * @example `light`
                 */
                DeviceName: string;
            }[];
        };
    };
}
