export interface GetClusterSuspEventStatisticsRequest {
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c6094b964bfc145fe9e418c869e7e****`
     */
    "ClusterId"?: string;
    /**
     * 请求来源标识，固定为sas。
     * @example `sas`
     */
    "From"?: string;
}
