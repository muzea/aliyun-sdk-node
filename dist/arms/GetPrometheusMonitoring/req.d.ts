export interface GetPrometheusMonitoringRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * 容器服务类型的实例支持：serviceMonitor、podMonitor、customJob、probe。
     * ecs类型的实例支持：customJob、probe。
     * @example `customJob`
     */
    "Type": string;
    /**
     * 监控配置名称。
     * @example `customJob1`
     */
    "MonitoringName": string;
}
