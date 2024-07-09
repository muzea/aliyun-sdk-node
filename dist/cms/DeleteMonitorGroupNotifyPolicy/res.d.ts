export interface DeleteMonitorGroupNotifyPolicyResponse {
    /**
     * 状态码。
     * > 200表示成功。
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
     * @example `B7AF834D-D38B-4A46-920B-FE974EB7E135`
     */
    RequestId: string;
    /**
     * 影响行数。
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
