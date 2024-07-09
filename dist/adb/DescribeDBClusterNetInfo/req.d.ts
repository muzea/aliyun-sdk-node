export interface DescribeDBClusterNetInfoRequest {
    /**
     * 集群ID。
     * @example `am-bp1xxxxxxxx47`
     */
    "DBClusterId": string;
    /**
     * 集群所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
