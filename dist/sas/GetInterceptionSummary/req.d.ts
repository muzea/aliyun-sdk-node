export interface GetInterceptionSummaryRequest {
    /**
     * 指定要查询的集群的ID，只对返回值InterceptionCountInDays生效。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c2999***bb61b`
     */
    "ClusterId"?: string;
}
