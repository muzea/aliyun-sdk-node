export interface DeleteHybridMonitorSLSGroupResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `RESOURCE_NOT_FOUND`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `85198BFF-1DE6-556E-B6A4-C77C51C62B8D`
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
