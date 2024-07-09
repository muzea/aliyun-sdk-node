export interface CreatePrometheusMonitoringRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * prometheus实例ID
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * 容器服务类型的实例支持：serviceMonitor、podMonitor、customJob、probe。
     * ecs类型的实例支持：customJob、probe。
     * @example `serviceMonitor`
     */
    "Type": string;
    /**
     * 监控配置状态：run, stop。
     * 为空时，默认是run。
     * probe暂不支持配置状态，此字段为空。
     * @example `run`
     */
    "Status"?: string;
    /**
     * 监控配置yaml串。
     * @example `参见请求参数补充说明。`
     */
    "ConfigYaml": string;
}
