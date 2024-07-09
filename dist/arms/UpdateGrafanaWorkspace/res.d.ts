export interface UpdateGrafanaWorkspaceResponse {
    /**
     * Id of the request
     * @example `16AF921B-8187-489F-9913-43C808B4****`
     */
    RequestId: string;
    /**
     * 请求参数错误时返回的信息
     * @example `message`
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
     * - `true`：调用成功
     * - `false`：调用失败
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
