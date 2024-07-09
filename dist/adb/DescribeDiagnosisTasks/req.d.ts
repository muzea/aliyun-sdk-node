export interface DescribeDiagnosisTasksRequest {
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~129857~~)接口查看账号下AnalyticDB MySQL数仓版集群的集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看指定AnalyticDB MySQL数仓版支持的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 任务ID。
     * > 您可以调用[DescribeProcessList](~~190092~~)接口查看目标SQL的任务ID。
     * @example `202011191048151921681492420315100****`
     */
    "ProcessId": string;
    /**
     * 指定`ProcessId`对应查询的某个Stage ID。
     * @example `Stage[26]`
     */
    "StageId": string;
    /**
     * 按指定字段对任务进行升序或降序排列。参数值需为JSON字符串类型，例如：`[{"Field":"CreateTime", "Type":"desc"}]`
     * > * `Field`表示需要排序的字段名，支持的字段为：`State`、`CreateTime`、`DBName`、`ProcessID`、`UpdateTime`、`JobName`和`ProcessRows`。
     * > * `Type`表示排序类型，取值范围为`Desc`（降序）或`Asc`（升序），取值不区分大小写。
     * @example `[{"Field":"StartTime", "Type": "desc" }]`
     */
    "Order"?: string;
    /**
     * 页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值：
     * - 30（默认值）。
     * - 50。
     * - 100。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 需要查询的异步导入或导出任务的状态，取值说明如下：
     * * **RUNNING**：任务进行中。
     * * **FINISHED**：任务执行成功。
     * * **FAILED**：任务执行失败。
     * @example `RUNNING`
     */
    "State"?: string;
    /**
     * 发起查询的IP地址。
     * @example `192.168.XX.XX`
     */
    "Host"?: string;
}
