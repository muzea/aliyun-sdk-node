export interface RefreshDeviceTunnelSharePasswordResponse {
    /**
     * 接口返回码：
     * - **Success**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 新的隧道分享密码。
     * @example `5f5c96d7e792af75da33a81dc87982ea********`
     */
    Password: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `46AF6619-EFF3-4B77-A90B-B9EAA0C6D1AF`
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
