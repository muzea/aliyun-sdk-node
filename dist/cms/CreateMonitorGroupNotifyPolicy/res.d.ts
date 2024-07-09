export interface CreateMonitorGroupNotifyPolicyResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `13356BCA-3EC3-4748-A771-2064DA69AEF1`
     */
    RequestId: string;
    /**
     * 返回创建的结果数。
     * @example `1`
     */
    Result: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
}
