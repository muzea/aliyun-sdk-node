export interface DescribeEnvServiceMonitorRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 环境实例ID。
     * @example `env-xxxxx`
     */
    "EnvironmentId": string;
    /**
     * ServiceMonitor所在的命名空间。
     * @example `arms-prom`
     */
    "Namespace": string;
    /**
     * ServiceMonitor名称。
     * @example `arms-admin1`
     */
    "ServiceMonitorName": string;
}
