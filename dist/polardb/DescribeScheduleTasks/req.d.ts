export interface DescribeScheduleTasksRequest {
    /**
     * 任务状态，取值范围如下：
     * * **pending**：等待执行中
     * * **executing**：执行中
     * * **failure**：执行失败待重试
     * * **finish**：已完成
     * * **cancel**：已取消
     * * **expired**：超期（即未在计划时间段内开始执行目标任务）
     * * **rollback**：回滚中
     * > 若该参数留空，默认查询所有状态的计划任务。
     * @example `finish`
     */
    "Status"?: string;
    /**
     * 集群ID。
     * > * 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * > * 若该参数留空，默认查询当前账号下所有集群的计划任务。
     * @example `pc-**************`
     */
    "DBClusterId"?: string;
    /**
     * 地域ID。
     * > * 您可以调用[DescribeRegions](~~98041~~)接口查看目标账号下所有的集群的地域信息。
     * > * 若该参数留空，默认查询当前账号下所有地域内的计划任务。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值为**30**（默认值）、**50**或**100**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 任务类型，取值范围如下：
     * * **CreateDBNodes**
     * * **ModifyDBNodeClass**
     * *  **UpgradeDBClusterVersion**
     * * **ModifyDBClusterPrimaryZone**
     * > * 仅当调用上述接口时指定了`PlannedStartTime`参数值，会返回目标任务的详情，否则`TimerInfos`为空。
     * > * 若该参数留空，默认查询当前账号下所有类型的计划任务。
     * @example `CreateDBNodes`
     */
    "TaskAction"?: string;
    /**
     * 集群描述。
     * @example `testdb`
     */
    "DBClusterDescription"?: string;
    /**
     * 订单ID。
     * > 仅支持传入数字0~9。
     * @example `20951253014****`
     */
    "OrderId"?: string;
    /**
     * 为目标任务设定的执行开始时间（UTC时间）。
     * @example `2021-01-28T12:00Z`
     */
    "PlannedStartTime"?: string;
    /**
     * 为目标任务设定的最晚开始时间（UTC时间）。
     * @example `2021-01-28T12:30Z`
     */
    "PlannedEndTime"?: string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
