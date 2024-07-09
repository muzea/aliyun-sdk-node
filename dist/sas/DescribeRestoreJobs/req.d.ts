export interface DescribeRestoreJobsRequest {
    /**
     * 恢复状态。 取值：
     * - **RUNNING**：恢复任务执行中
     * - **COMPLETE**：恢复任务已完成
     * - **FAILED**：恢复任务执行失败
     * - **CANCELIN**G：恢复任务取消中
     * - **CANCELED**：恢复任务已取消
     * - **PARTIAL_COMPLETE**：恢复任务部分成功
     * - **CREATED**：恢复任务已创建，但尚未开始启动
     * - **EXPIRED**：恢复任务未更新
     * - **QUEUED**：恢复任务在等待启动中
     * - **CLIENT_DELETED**：防勒索客户端已被删除，任务执行失败
     * @example `RUNNING`
     */
    "Status"?: string;
    /**
     * 执行防勒索恢复任务的服务器的标识符，例如：服务器IP地址或服务器名称。
     * @example `1.1.XX.XX`
     */
    "MachineRemark"?: string;
    /**
     * 设置分页查询时，每页显示的恢复任务的数量。默认值为**10**，表示每页显示10条恢复任务。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage": number;
}
