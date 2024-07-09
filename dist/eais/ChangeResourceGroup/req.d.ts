export interface ChangeResourceGroupRequest {
    /**
     * 资源ID。
     * @example `eais-hzs4h26yyt5xkcke****`
     */
    "ResourceId": string;
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "ResourceRegionId": string;
    /**
     * 目标资源组ID。
     * @example `rg-acfmvpuy4a5****`
     */
    "ResourceGroupId": string;
}
