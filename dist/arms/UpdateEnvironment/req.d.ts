export interface UpdateEnvironmentRequest {
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
     * 环境名称。
     * @example `env1`
     */
    "EnvironmentName"?: string;
    /**
     * 付费套餐。
     * * EnvironmentType为CS时：可以指定为CS_Basic（默认值）或CS_Pro。
     * * EnvironmentType为其它值时，请输入空值。
     * @example `CS_Basic`
     */
    "FeePackage"?: string;
}
