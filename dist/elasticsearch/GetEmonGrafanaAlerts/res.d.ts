export interface GetEmonGrafanaAlertsResponse {
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
     * @example `08FA74C7-5654-4309-9729-D555AF587B7F`
     */
    RequestId: string;
    /**
     * 是否成功获取Grafana报警列表：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
