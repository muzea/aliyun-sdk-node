export interface ChangeResourceGroupRequest {
    /**
     * 共享单元ID。
     * @example `rs-dz3Ek1iiO***`
     */
    "ResourceId": string;
    /**
     * 共享单元所在的地域ID。
     * @example `cn-hangzhou`
     */
    "ResourceRegionId": string;
    /**
     * 目标资源组。
     * @example `rg-aek2nb47ueqk***`
     */
    "ResourceGroupId": string;
}
