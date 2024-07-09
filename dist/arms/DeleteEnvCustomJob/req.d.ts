export interface DeleteEnvCustomJobRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 环境实例ID。
     * @example `env-xxx`
     */
    "EnvironmentId": string;
    /**
     * 自定义job名称。
     * @example `job1`
     */
    "CustomJobName": string;
}
