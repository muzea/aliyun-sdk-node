export interface ModifyGovernanceKubernetesClusterResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F9849E97-2455-54B0-A3B4-3F6E4E9FFEB1`
     */
    RequestId: string;
    /**
     * 数据概览。
     * @example `True`
     */
    Data: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `True`
     */
    Success: boolean;
}
