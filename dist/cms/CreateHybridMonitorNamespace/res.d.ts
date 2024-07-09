export interface CreateHybridMonitorNamespaceResponse {
    /**
     * 调用结果。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Namespace.Existed`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3843D23A-FB9E-5DC8-BCCC-458768B79296`
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
