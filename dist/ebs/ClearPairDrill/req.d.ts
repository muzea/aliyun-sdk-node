export interface ClearPairDrillRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~354276~~)查询异步复制功能支持的地域信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 复制对ID。您可以调用[DescribeDiskReplicaPairs](~~354206~~)查询异步复制对列表，获得复制对ID。
     * @example `pair-xxxx`
     */
    "PairId": string;
    /**
     * 演练ID。您可以通过[DescribePairDrills](~~2584480~~)接口查询当前地域下复制对的容灾演练。
     * @example `drill-xxxx`
     */
    "DrillId": string;
}
