export interface DescribeAddonReleaseRequest {
    /**
     * AddonRelease的名称。
     * @example `agent-822567d4-2449`
     */
    "ReleaseName": string;
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
}
