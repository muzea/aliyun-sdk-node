export interface GetDeviceTunnelStatusResponse {
    /**
     * 接口返回码：
     * - **Success**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用成功时，返回的数据：
     * - **online**：表示网关隧道已开启。
     * - **offline**：表示网关隧道已关闭。
     * @example `online`
     */
    Data: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `7CCFF08F-34D1-4FBD-ACA9-22D9364EA5A4`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
}
