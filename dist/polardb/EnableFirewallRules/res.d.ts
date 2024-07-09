export interface EnableFirewallRulesResponse {
    /**
     * Id of the request
     * @example `99B355CE-526C-478B-B730-AD9D7C******`
     */
    RequestId: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Message`
     */
    Message: string;
    /**
     * 请求结果。取值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
