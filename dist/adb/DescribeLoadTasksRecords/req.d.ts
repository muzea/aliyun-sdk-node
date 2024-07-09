export interface DescribeLoadTasksRecordsRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看指定AnalyticDB MySQL数仓版（3.0）支持的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-bp2590j****`
     */
    "DBClusterId": string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * > 建议查询开始时间设置为30天内的任意时间点。
     * @example `2021-05-18T06:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，需晚于查询开始时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2021-05-18T06:30:00Z`
     */
    "EndTime": string;
    /**
     * 导入导出任务所涉及的数据库名称。
     * @example `adb_demo`
     */
    "DBName"?: string;
    /**
     * 每页记录数，取值范围如下：
     * * **30**（默认值）。
     * * **50**。
     * * **100**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 按指定字段对任务进行升序或降序排列。参数值需为JSON字符串类型，例如：`[{"Field":"CreateTime", "Type":"desc"}]`
     * > * `Field`表示需要排序的字段名，支持的字段为：`State`、`CreateTime`、`DBName`、`ProcessID`、`UpdateTime`、`JobName`和`ProcessRows`。
     * > * `Type`表示排序类型，取值范围为`Desc`（降序）或`Asc`（升序），取值不区分大小写。
     * @example `[{"Field":"CreateTime", "Type":"desc"}]`
     */
    "Order"?: string;
    /**
     * 需要查询的异步导入或导出任务的状态，取值范围如下：
     * * **INIT**：任务初始化。
     * * **RUNNING**：任务进行中。
     * * **FINISH**：任务执行成功。
     * * **FAILED**：任务执行失败。
     * @example `FINISH`
     */
    "State"?: string;
}
