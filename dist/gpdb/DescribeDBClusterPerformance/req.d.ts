export interface DescribeDBClusterPerformanceRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 性能参数名称，多个指标用英文半角（,）分隔，具体信息，请参见[性能参数表](~~86943~~)。
     * @example `adbpg_conn_count`
     */
    "Key": string;
    /**
     * 查询开始时间，格式为`YYYY-MM-DDTHH:mmZ`。
     * > 仅支持查询30天内的监控信息。
     * @example `2021-11-03T15:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，格式为`YYYY-MM-DDTHH:mmZ`。
     * > 查询结束时间需晚于开始时间，且开始时间和结束时间的时间间隔不能超过7天。
     * @example `2021-11-03T15:10Z`
     */
    "EndTime": string;
    /**
     * 用于查询一个或多个节点的监控指标，多个节点名称间使用英文逗号（,）分隔，例如`master-10******1,master-10******2`。您可以调用[DescribeDBClusterNode](~~390136~~)接口获取节点名称。
     * 您也可以根据监控指标的高低筛选节点，取值说明：
     * - **top10**：监控指标最高的十个节点。
     * - **top20**：监控指标最高的二十个节点。
     * - **bottom10**：监控指标最低的十个节点。
     * - **bottom20**：监控指标最低的二十个节点。
     * @example `top10`
     */
    "Nodes"?: string;
    /**
     * 节点类型。取值说明：
     * - **master**：Master节点。
     * - **segment**：Segment节点。
     * > 如果不传入该参数，则返回所有节点的监控指标。
     * @example `master`
     */
    "NodeType"?: string;
    /**
     * 资源组名称。
     * @example `testgroup`
     */
    "ResourceGroupName"?: string;
}
