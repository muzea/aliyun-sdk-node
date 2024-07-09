export interface DeleteEnvironmentRequest {
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
     * 是否级联删除prometheus实例。
     */
    "DeletePromInstance"?: boolean;
}
