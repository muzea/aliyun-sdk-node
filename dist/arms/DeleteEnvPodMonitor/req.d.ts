export interface DeleteEnvPodMonitorRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 环境实例ID。
     * @example `env-xxxxxx`
     */
    "EnvironmentId": string;
    /**
     * podMonitor所在的命名空间
     * @example `arms-prom`
     */
    "Namespace": string;
    /**
     * PodMonitor名称。
     * @example `arms-admin-pm1`
     */
    "PodMonitorName": string;
}
