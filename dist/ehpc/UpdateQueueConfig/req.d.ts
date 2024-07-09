export interface UpdateQueueConfigRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 队列名称。
     * @example `workq`
     */
    "QueueName": string;
    /**
     * 资源组ID。
     * 您可以通过调用[ListResourceGroups](~~158855~~)获取资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 计算节点规格。
     * 您可以调用[ListPreferredEcsTypes](~~188592~~)接口获取E-HPC推荐的节点规格信息。
     * @example `ecs.n1.tiny`
     */
    "ComputeInstanceType"?: string;
    /**
     * 部署集ID。
     * 您可以通过[DescribeDeploymentSets](~~91313~~)获取部署集ID，当前仅支持网络低时延策略的部署集。
     * @example `ds-bp1frxuzdg87zh4pzq****`
     */
    "DeploymentSetId"?: string;
    /**
     * 弹性网卡的通讯模式。取值范围：
     * - Standard：使用TCP通讯模式。
     * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
     * @example `Standard`
     */
    "NetworkInterfaceTrafficMode"?: string;
}
