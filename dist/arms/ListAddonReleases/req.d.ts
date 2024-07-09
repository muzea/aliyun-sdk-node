export interface ListAddonReleasesRequest {
    /**
     * 安装环境ID。
     * @example `env-xxx`
     */
    "EnvironmentId": string;
    /**
     * Addon的名称。
     * @example `mysql`
     */
    "AddonName"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
