export interface InstallEnvironmentFeatureRequest {
    /**
     * 环境ID。
     * @example `env-xxx`
     */
    "EnvironmentId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * Feature的名称。
     * @example `metric-agent`
     */
    "FeatureName": string;
    /**
     * Feature的版本信息。
     * @example `1.1.17`
     */
    "FeatureVersion": string;
    /**
     * Feature的元数据信息。
     * @example `{\"continuous\":true,\"dataRevision\":2}`
     */
    "Config"?: string;
    /**
     * 语言环境，默认为中文 zh | en。
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * Feature的Region信息。
     * @example `cn-shenzhen`
     */
    "Region"?: string;
}
