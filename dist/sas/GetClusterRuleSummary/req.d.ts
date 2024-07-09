export interface GetClusterRuleSummaryRequest {
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `cc49d88d1exxx`
     */
    "ClusterId": string;
}
