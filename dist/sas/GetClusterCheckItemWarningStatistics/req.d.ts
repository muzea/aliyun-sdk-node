export interface GetClusterCheckItemWarningStatisticsRequest {
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~182997~~)接口获取该参数。
     * @example `cd49575861a3044d49c954e4b3911****`
     */
    "ClusterId"?: string;
    /**
     * 服务器UUID。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `ae1527a9-2308-46ab-b10a-48ae7ff7****`
     */
    "Uuid"?: string;
}
