export interface DeleteVirtualWareHouseRequest {
    /**
     * 计算组ID。
     * >云数据库ClickHouse云原生版集群需要至少保留一个计算组。您可以通过调用[ListVirtualWareHouses](~~419058~~)接口查询计算组数量。
     * @example `vw-bp1w2728d535t****`
     */
    "VirtualWareHouseId": string;
    /**
     * 集群ID。
     * @example `cc-bp1qx68m06981****`
     */
    "DBClusterId"?: string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
