export interface GetDistributedTablesBufferSizeRequest {
    /**
     * 计算组ID。您可以通过调用[ListVirtualWareHouses](~~419058~~)接口查询目标地域下所有的计算组信息，包括计算组ID。
     * @example `vw-uf62965t8lt50****`
     */
    "VirtualWareHouseId": string;
    /**
     * 集群ID。您可以通过调用[ListClusters](~~419072~~)接口查询目标地域下所有的集群信息，包括集群ID。
     * @example `cc-bp1qx68m06981****`
     */
    "DBClusterId"?: string;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
