export interface ListEnvironmentDashboardsRequest {
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
     * Addon的名称，AddonName和Scene必填一个。
     * @example `trace-java`
     */
    "AddonName"?: string;
    /**
     * Addon的场景，AddonName和Scene必填一个。
     * @example `database`
     */
    "Scene"?: string;
}
