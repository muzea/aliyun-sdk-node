export interface DescribeDBClusterResourcePoolPerformanceRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-****************`
     */
    "DBClusterId": string;
    /**
     * 资源池数据监控指标。允许同时输入多个指标进行查询，多个指标间用英文逗号（,）分隔。支持监控如下指标：
     * - **AnalyticDB\_RP_CPU** ：CPU平均使用率，单位：%。
     * - **AnalyticDB\_RP_RT**：查询响应时间（RT），单位：毫秒（ms）。
     * - **AnalyticDB\_RP_QPS**：每秒查询率（QPS），单位：数值。
     * - **AnalyticDB\_RP_WaitTime**：查询等待时间，单位：毫秒（ms）。
     * - **AnalyticDB\_RP_OriginalNode**：资源池基础节点数。
     * - **AnalyticDB\_RP_ActualNode**：资源池分时弹性实际弹出的节点数（即执行扩容计划时实际增加的节点数）。
     * - **AnalyticDB\_RP_PlanNode**：资源池分时弹性计划弹出的节点数。
     * - **AnalyticDB\_RP_TotalNode**：资源池拥有的总节点数，总节点数=基础节点数+分时弹性计划中实际生效的节点数。
     * > - 若该参数留空，默认返回所有指标的监控数据详情。
     * > - 更多关于资源池弹性计划的信息，请参见[资源弹性扩容](~~189507~~)。
     * @example `AnalyticDB_RP_CPU`
     */
    "Key"?: string;
    /**
     * 目标资源池名称。允许同时输入多个资源池名称进行查询，多个名称间用英文逗号（,）分隔。
     * > * 输入的资源池名称不区分大小写，例如`USER_DEFAULT`与`user_default`表示的是同一个资源池。
     * > * 若该参数留空，将返回`USER_DEFAULT`即默认资源池的监控信息。
     * @example `TEST_POOL`
     */
    "ResourcePools"?: string;
    /**
     * 资源池数据监控开始时间。格式<i>为yyyy-MM-ddTHH:mmZ</i>（UTC时间）。
     * > 仅支持查看最近2天的资源池监控信息。
     * @example `2021-06-10T07:00Z`
     */
    "StartTime": string;
    /**
     * 资源池数据监控结束时间，结束时间需晚于开始时间。格式<i>为yyyy-MM-ddTHH:mmZ</i>（UTC时间）。
     * @example `2021-06-10T07:01Z`
     */
    "EndTime": string;
}
