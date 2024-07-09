export interface GetEmonGrafanaDashboardsResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 响应消息。
     * @example `""`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1E9D9827-2092-4385-9DA1-FC5A8D1DB3F5`
     */
    RequestId: string;
    /**
     * 是否成功获取Grafana大盘列表：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
