export interface AddQueueRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 要添加的队列名称。长度为1~63个字符，必须以大小写英文字母开头，可以包含数字、下划线（_）。
     * @example `test1`
     */
    "QueueName": string;
    /**
     * 弹性网卡的通讯模式。取值范围：
     * - Standard：使用TCP通讯模式。
     * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
     * @example `Standard`
     */
    "NetworkInterfaceTrafficMode"?: string;
    /**
     * 部署集ID。
     * 您可以通过[DescribeDeploymentSets](~~91313~~)获取部署集ID，当前仅支持网络低时延策略的部署集。
     * @example `ds-bp1frxuzdg87zh4pzq****`
     */
    "DeploymentSetId"?: string;
    /**
     * 是否使用弹性伸缩组。
     * @example `false`
     */
    "UseESS"?: boolean;
}
