export interface UpdateSmartAccessGatewayDnsResponse {
    /**
     * 错误码。200标识查询任务成功。
     * @example `200`
     */
    Code: string;
    /**
     * 修改是否成功。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `AE9B6C13-86D3-5E56-8C05-BBE58C2BE671`
     */
    RequestId: string;
    /**
     * 响应消息。Successful标识查询任务成功。
     * @example `Successful`
     */
    Message: string;
}
