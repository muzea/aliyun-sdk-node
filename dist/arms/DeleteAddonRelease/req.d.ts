export interface DeleteAddonReleaseRequest {
    /**
     * AddonRelease的名称。
     * @example `agent-822567d4-2449`
     */
    "ReleaseName": string;
    /**
     * 是否硬性删除，默认false。
     * @example `false`
     */
    "Force"?: boolean;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 环境ID。
     * @example `env-xxx`
     */
    "EnvironmentId": string;
    /**
     * Addon名称。
     */
    "AddonName"?: string;
}
