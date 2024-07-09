export interface ListEnvironmentFeaturesRequest {
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
     * 语言环境 zh | en，默认为中文。
     */
    "AliyunLang"?: string;
}
