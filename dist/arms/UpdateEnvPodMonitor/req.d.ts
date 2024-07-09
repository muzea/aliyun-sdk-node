export interface UpdateEnvPodMonitorRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 语言环境：
     * - zh（默认）：中文
     * - en：英文
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * 环境ID。
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
    /**
     * 试运行。检查格式是否合法、是否能匹配到targets。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * YAML配置串。
     * @example `参见补充说明。`
     */
    "ConfigYaml": string;
}
