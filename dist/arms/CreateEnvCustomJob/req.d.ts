export interface CreateEnvCustomJobRequest {
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
     * 环境实例ID。
     * @example `env-xxxxxx`
     */
    "EnvironmentId": string;
    /**
     * 自定义Job名称。
     * @example `customJob1`
     */
    "CustomJobName": string;
    /**
     * 自定义Job的yaml配置串。
     * @example `参见补充说明。`
     */
    "ConfigYaml": string;
}
