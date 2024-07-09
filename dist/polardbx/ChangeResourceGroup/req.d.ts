export interface ChangeResourceGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，目前仅支持PolarDB-X 2.0实例一种类型的资源。
     * @example `PolarDBXInstance`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     * @example `pxc-szrwrbp693****`
     */
    "ResourceId": string;
    /**
     * 新资源组ID。
     * @example `rg-acfmwolx3j4****`
     */
    "NewResourceGroupId": string;
}
