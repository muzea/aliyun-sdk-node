export interface GetDeviceStatusResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
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
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回设备状态信息。
     */
    Data: {
        /**
         * 设备状态。取值：
         * - **ONLINE**：设备在线。
         * - **OFFLINE**：设备离线。
         * - **UNACTIVE**：设备未激活。
         * - **DISABLE**：设备已禁用。
         * @example `ONLINE`
         */
        Status: string;
        /**
         * 设备状态变更时间。
         * @example `1557062301656`
         */
        Timestamp: number;
    };
}
