export interface UpdateEdgeInstanceMessageRoutingResponse {
    /**
     * 接口返回码：
     * - **Success**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `BBE0E0C7-913A-47B8-A255-F2C6038B5FD8`
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
