export interface ClearReplicaGroupDrillRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~354276~~)查询异步复制功能支持的地域信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 复制组ID。您可以通过[DescribeDiskReplicaGroups](~~426614~~)接口查询异步复制组列表，获得复制组ID。
     * @example `pg-xxxx`
     */
    "GroupId": string;
    /**
     * 演练ID。您可以通过[DescribeReplicaGroupDrills](~~2584481~~)接口查询当前地域下复制对的容灾演练。
     * @example `pg-drill-xxxx`
     */
    "DrillId": string;
}
