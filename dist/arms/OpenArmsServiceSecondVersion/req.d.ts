export interface OpenArmsServiceSecondVersionRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务类型：
     * - `arms`：ARMS
     * - `arms_app`：应用监控
     * - `arms_web`：前端监控
     * - `prometheus_monitor`：Prometheus监控
     * - `synthetic_post`：云拨测
     * @example `arms`
     */
    "Type": string;
}
