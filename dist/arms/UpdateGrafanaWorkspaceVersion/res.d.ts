export interface UpdateGrafanaWorkspaceVersionResponse {
    /**
     * Id of the request
     * @example `2A0CEDF1-06FE-44AC-8E21-21A5BE65****`
     */
    RequestId: string;
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
    /**
     * 更新是否成功。
     * - `true`更新成功
     * - `false`更新失败
     * @example `true`
     */
    Data: boolean;
}
