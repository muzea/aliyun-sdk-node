export interface DescribeTasksRequest {
    /**
     * 集群ID。
     * > `DBNodeId`和`DBClusterId`必选其一填入。您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息，包括集群ID。
     * @example `pc-***************`
     */
    "DBClusterId"?: string;
    /**
     * 节点ID。
     * > `DBNodeId`和`DBClusterId`必选其一填入。您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息，包括节点ID。
     * @example `pi-***************`
     */
    "DBNodeId"?: string;
    /**
     * 查询开始时间，格式为`YYYY-MM-DDThh:mmZ`（UTC时间）。
     * @example `2020-11-30T00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，查询结束时间需晚于开始时间，格式为`YYYY-MM-DDThh:mmZ`（UTC时间）。
     * @example `2020-12-02T03:00Z`
     */
    "EndTime": string;
    /**
     * 任务状态，取值范围如下：
     * * **Waiting**：任务等待执行中
     * * **Running**：任务正在执行中
     * * **Finished**：任务已完成
     * * **Closed**：任务已关闭
     * * **Pause**：任务已暂停
     * * **Stop**：任务已中断
     * >* 若该参数留空，仅返回当前集群或节点下所有状态为**Waiting**或**Running**的任务详情。
     * >*  支持输入多个任务状态，各状态之间用逗号分割查询。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 每页记录数，取值为**30**、**50**或**100**。
     * 默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值。
     * 默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
