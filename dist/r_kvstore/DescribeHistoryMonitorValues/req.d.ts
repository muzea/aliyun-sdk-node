export interface DescribeHistoryMonitorValuesRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 历史监控开始时间点，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-11-06T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 历史监控结束时间点，须晚于历史监控开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 支持查询最近1个月的监控数据，且最大查询范围不能超过7天。
     * @example `2022-11-06T00:30:00Z`
     */
    "EndTime": string;
    /**
     * 本参数已废弃，固定取值为`01m`。
     * 实际会根据查询的开始时间和结束时间自动决定**查询的时间间隔**。以查询时间范围小于等于10分钟为例，数据聚合频率为5s/次，查询结果会按照5s/次的频率返回。
     * > * 查询结果会与实例的数据聚合频率对齐。若您传入的 StartTime 不在数据聚合时间点上，系统返回的首个时间点为最近的数据聚合时间点。例如您传入的 StartTime 为 2022-01-20T12:01:48Z，系统返回的首个时间点为 2022-01-20T12:01:45Z。
     * > * 如果实例的数据分片数大于等于32，最小的数据聚合频率为1分钟/次。
     * @example `01m`
     */
    "IntervalForHistory": string;
    /**
     * 监控指标，如需传入多个监控指标，需使用英文逗号（,）分隔。以CpuUsage为例：
     * - 若您希望查询所有数据节点（DB）整体的CPU使用率，请传入**CpuUsage$db**。
     * - 若您希望查询单个数据节点的CPU使用率，请传入**CpuUsage**，同时在NodeId参数指定DB 节点。
     * 更多信息监控指标与详细说明，请参见下方的**MonitorKeys 参数补充说明**。
     * > * 默认为空，将返回UsedMemory与quotaMemory指标。
     * > * 为保障查询效率，查询单个节点的监控指标时，建议单次传入不超过5个监控指标；查询聚合监控指标时，建议单次不超过传入1个监控指标。
     * [MonitorKeys 参数补充说明](https://help.aliyun.com/zh/redis/developer-reference/api-r-kvstore-2015-01-01-describehistorymonitorvalues-redis)
     * @example `CpuUsage`
     */
    "MonitorKeys"?: string;
    /**
     * 实例的中的节点ID。传入本参数可查询指定节点的监控信息。
     * > * 当Redis实例的架构为读写分离或集群架构时，本参数才可用。
     * > * 您可以调用[DescribeLogicInstanceTopology](~~94665~~)接口查询节点ID。
     * @example `r-bp1zxszhcgatnx****-db-0#1679****`
     */
    "NodeId"?: string;
    /**
     * 若希望查询云原生版读写分离架构实例中只读节点的指标，您在传入具体**NodeId**的同时，还需要在本参数传入**READONLY**。
     * >  其余情况请无需传入（或传入**MASTER**）。
     * @example `READONLY`
     */
    "NodeRole"?: string;
}
