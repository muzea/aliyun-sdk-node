export interface ModifyHybridMonitorNamespaceResponse {
    /**
     * 调用结果。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `%s`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `E190AB2E-7BF9-59B7-9DDC-7CB1782C5ECD`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
}
