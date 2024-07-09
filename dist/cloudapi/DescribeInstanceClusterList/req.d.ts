export interface DescribeInstanceClusterListRequest {
    /**
     * 专享实例集群名称
     * @example `test-cluster`
     */
    "InstanceClusterName"?: string;
    /**
     * 纳管该专享实例的专享实例集群的ID
     * @example `apigateway-cluster-hz-xxxxxxxxxxxx`
     */
    "InstanceClusterId"?: string;
    /**
     * 每页条目
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 返回指定的页码
     * @example `1`
     */
    "PageNumber"?: number;
}
