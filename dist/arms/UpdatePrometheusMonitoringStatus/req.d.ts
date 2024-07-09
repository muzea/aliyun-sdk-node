export interface UpdatePrometheusMonitoringStatusRequest {
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
     * 监控配置名称。
     * @example `customJob1`
     */
    "MonitoringName": string;
    /**
     * 容器服务类型的实例支持：serviceMonitor、podMonitor、customJob。
     * ecs类型的实例支持：customJob。
     * 不支持probe的状态修改。
     * @example `customJob`
     */
    "Type": string;
    /**
     * 监控配置状态：run, stop。
     * probe暂不支持状态设置。
     * @example `run`
     */
    "Status": string;
}
