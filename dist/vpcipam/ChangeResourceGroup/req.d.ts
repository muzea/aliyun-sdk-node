export interface ChangeResourceGroupRequest {
    /**
     * IPAM托管地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要修改资源组的IPAM实例ID。
     * @example `ipam-uq5dcfc2eqhpf4****`
     */
    "ResourceId": string;
    /**
     * 新资源组ID。
     * @example `rg-aek3ctkufaw****`
     */
    "NewResourceGroupId": string;
    /**
     * 资源类型：**ipam**。
     * @example `ipam`
     */
    "ResourceType"?: string;
}
