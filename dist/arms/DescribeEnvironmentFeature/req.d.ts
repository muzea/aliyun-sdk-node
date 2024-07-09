export interface DescribeEnvironmentFeatureRequest {
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
     * 语言参数，en | zh。
     */
    "AliyunLang"?: string;
}
