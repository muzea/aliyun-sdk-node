export interface CheckCommercialStatusRequest {
    /**
     * 地域ID。默认为cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 子产品类型：
     * - apm：应用监控
     * - rum：用户体验监控
     * - prometheus：可观测监控 Prometheus 版
     * - xtrace：可观测链路 OpenTelemetry 版
     * @example `apm`
     */
    "Service": string;
}
