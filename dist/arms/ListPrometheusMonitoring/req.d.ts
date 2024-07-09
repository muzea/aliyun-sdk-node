export interface ListPrometheusMonitoringRequest {
    /**
     * 地域ID。默认为`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * 容器服务类型的实例支持：serviceMonitor、podMonitor、customJob、probe。
     * ecs类型的实例支持：customJob、probe。
     * @example `serviceMonitor`
     */
    "Type"?: string;
}
