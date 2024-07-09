export interface ListAccountsRequest {
    /**
     * 集群ID。
     * @example `cc-bp1qx68m06981****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
