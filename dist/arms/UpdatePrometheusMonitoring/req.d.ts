export interface UpdatePrometheusMonitoringRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * 监控配置名称。
     * @example `podMonitor1`
     */
    "MonitoringName": string;
    /**
     * 容器服务类型的实例支持：serviceMonitor、podMonitor、customJob、probe。
     * ecs类型的实例支持：customJob、probe。
     * @example `podMonitor`
     */
    "Type": string;
    /**
     * 监控配置yaml串。
     * @example `参见请求参数补充说明。`
     */
    "ConfigYaml": string;
}
