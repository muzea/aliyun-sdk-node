export interface UpdateEnvCustomJobRequest {
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
     * 自定义job名称。
     * @example `customJob1`
     */
    "CustomJobName": string;
    /**
     * 自定义任务状态: run 或 stop。
     * @example `run`
     */
    "Status"?: string;
    /**
     * yaml配置串。
     * @example `参见补充说明。`
     */
    "ConfigYaml"?: string;
}
