export interface AllocateVirtualWareHousePublicConnectionRequest {
    /**
     * 计算组ID。
     * @example `vw-uf6a499c0m3w5****`
     */
    "VirtualWareHouseId": string;
    /**
     * 集群ID。
     * @example `cc-bp108z124a8o7****`
     */
    "DBClusterId"?: string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~170875~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
