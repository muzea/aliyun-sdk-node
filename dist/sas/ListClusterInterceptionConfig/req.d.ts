export interface ListClusterInterceptionConfigRequest {
    /**
     * 集群容器防火墙状态。
     * - **-1**：未知
     * - **0**：异常
     * - **1**：正常
     * - **2**：正常待确认
     * @example `1`
     */
    "ClusterCNNFStatus"?: number;
    /**
     * 集群名称。
     * @example `sas`
     */
    "ClusterName"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为1，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 容器集群的ID。
     * >调用[DescribeContainerInstances](~~DescribeContainerInstances~~)接口可以获取该参数。
     * @example `c22143730ab6e40b09ec7c1c51d4d****`
     */
    "ClusterId"?: string;
}
