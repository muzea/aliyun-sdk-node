export interface DescribeEnvCustomJobRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 环境实例ID。
     * @example `env-xxxxxx`
     */
    "EnvironmentId": string;
    /**
     * 自定义job名称。
     * @example `customJob1`
     */
    "CustomJobName": string;
    /**
     * 是否返回加密后的YAML串。
     * @example `true`
     */
    "EncryptYaml"?: boolean;
}
