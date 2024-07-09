export interface ModifyHybridMonitorTaskResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Invalid.SLSConfig`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `11145B76-566A-5D80-A8A3-FAD98D310079`
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
