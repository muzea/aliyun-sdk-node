export interface GetGrafanaWorkspaceResponse {
    /**
     * Id of the request
     * @example `2C3F217B-9AAE-5D51-974D-48********`
     */
    RequestId: string;
    /**
     * Grafana工作区信息。
     */
    Data: any;
    /**
     * 请求参数错误时返回的信息
     * @example `success`
     */
    Message: string;
    /**
     * 接口状态码：
     * - `2XX`：成功
     * - `3XX`：重定向
     * - `4XX`：请求错误
     * - `5XX`：服务器错误
     * @example `200`
     */
    Code: number;
    /**
     * 调用是否成功。
     * - `true`调用成功
     * - `false`调用失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `eac0a8048716731735000007137d000b`
     */
    TraceId: string;
}
