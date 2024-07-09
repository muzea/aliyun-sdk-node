export interface ListEnvCustomJobsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 环境实例ID。
     * @example `env-xxxxx`
     */
    "EnvironmentId": string;
    /**
     * 是否返回加密后的yaml。
     * @example `true`
     */
    "EncryptYaml"?: boolean;
}
