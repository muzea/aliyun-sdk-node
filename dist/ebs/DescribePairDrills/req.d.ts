export interface DescribePairDrillsRequest {
    /**
     * 异步复制对中主盘或从盘所属的地域ID。您可以调用[DescribeRegions](~~354276~~)查询异步复制功能支持的地域信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 演练ID。
     * @example `drill-xxxx`
     */
    "DrillId"?: string;
    /**
     * 复制对ID。您可以通过[DescribeDiskReplicaPairs](~~354206~~)接口查询异步复制对列表，获得复制对ID入参的值。
     * @example `pair-xxxx`
     */
    "PairId": string;
    /**
     * 本次调用期望查询的最大条目数。可配合NextToken参数一起使用。
     * 取值范围：1~500。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。如果设置了NextToken，则请求参数PageSize和PageNumber将失效，且返回数据中的TotalCount无效。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。 取值范围1-100。
     * @example `10`
     */
    "PageSize"?: number;
}
