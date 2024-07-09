export interface DescribeContainerStatisticsRequest {
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `Cccfd68c474454665ace07efce924****`
     */
    "ClusterId": string;
}
