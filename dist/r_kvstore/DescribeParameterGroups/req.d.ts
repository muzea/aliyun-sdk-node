export interface DescribeParameterGroupsRequest {
    "RegionId": string;
    /**
     * 产品类型，取值为**redis**（默认）、**tair**。
     * @example `redis`
     */
    "DbType"?: string;
}
