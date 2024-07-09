export interface UpdateEnvServiceMonitorRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 语言环境, 默认为中文 zh | en。
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * 环境ID。
     * @example `env-xxxxx`
     */
    "EnvironmentId": string;
    /**
     * serviceMonitor所在的命名空间。
     * @example `arms-prom`
     */
    "Namespace": string;
    /**
     * ServiceMonitor名称。
     * @example `serviceMonitor1`
     */
    "ServiceMonitorName": string;
    /**
     * 试运行：检查格式是否合法、是否能匹配到targets。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * yaml配置串。
     * @example `参见补充说明。`
     */
    "ConfigYaml": string;
}
