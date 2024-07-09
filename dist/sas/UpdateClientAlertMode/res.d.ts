export interface UpdateClientAlertModeResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `259E3E77-CA6D-5407-84A5-3A1C98D12F14`
     */
    RequestId: string;
    /**
     * 返回数据。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Data: boolean;
}
