export interface DescribeEnvPodMonitorRequest {
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
     * PodMonitor所在的命名空间。
     * @example `arms-prom`
     */
    "Namespace": string;
    /**
     * PodMonitor名称。
     * @example `arms-admin-pm1`
     */
    "PodMonitorName": string;
}
