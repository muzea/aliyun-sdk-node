export interface DescribeClusterBasicInfoRequest {
    /**
     * 指定要查询的集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c870ec78ecbcb41d2a35c679823ef****`
     */
    "ClusterId": string;
    /**
     * 配置类型。取值：
     * - **containerNetwork**：容器网络拓扑开关
     * - **interceptionSwitch**：集群微隔离开关
     * @example `containerNetwork`
     */
    "Type": string;
    /**
     * 目标开关的配置的操作维度。取值：
     * - **Cluster**：集群ID
     * @example `Cluster`
     */
    "TargetType": string;
}
