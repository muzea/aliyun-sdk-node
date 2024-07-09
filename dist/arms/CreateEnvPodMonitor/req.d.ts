export interface CreateEnvPodMonitorRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 语言环境, 默认为中文 zh | en
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * 环境实例ID
     * @example `env-xxxxxx`
     */
    "EnvironmentId": string;
    /**
     * 试运行：检查格式是否合法、是否能匹配到targets。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * PodMonitor的yaml配置串。
     * @example `参见补充说明。`
     */
    "ConfigYaml": string;
}
