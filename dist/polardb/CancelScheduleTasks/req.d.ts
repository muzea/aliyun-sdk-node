export interface CancelScheduleTasksRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 需要被取消的定时任务的任务ID。
     * > * 您可以调用[DescribeScheduleTasks](~~199648~~)接口查看当前账号下所有计划任务的信息，包括任务ID。
     * > * 仅任务状态为等待执行（即`Status`参数的返回值为`pending`）的任务支持被取消。
     * @example `ec8c4723-eac5-4f12-becb-01ac08******`
     */
    "TaskId": string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
