export interface DescribeReplicaGroupDrillsRequest {
    /**
     * 异步复制组中主盘或从盘所属的地域ID。您可以调用[DescribeRegions](~~354276~~)查询异步复制功能支持的地域信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 复制组ID。您可以通过[DescribeDiskReplicaGroups](~~426614~~)接口查询异步复制组列表，获得复制组ID入参的值。
     * @example `pg-xxxx`
     */
    "GroupId": string;
    /**
     * 演练ID。
     * @example `pg-drill-xxxx`
     */
    "DrillId"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。如果设置了NextToken，则请求参数PageSize和PageNumber将失效，且返回数据中的TotalCount无效。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 本次调用期望查询的最大条目数。可配合NextToken参数一起使用。
     * 取值范围：1~500。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 分页查询时设置的每页行数。 取值范围1-100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `5`
     */
    "PageNumber"?: number;
}
