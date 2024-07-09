export interface DescribeSlowLogRecordsRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1rqvm70uh2****`
     */
    "DBClusterId": string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2021-05-20T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * > 查询结束时间需晚于查询开始时间，且与查询开始时间间隔小于7天。
     * @example `2021-05-27T16:00:00Z`
     */
    "EndTime": string;
    /**
     * 数据库名称。
     * @example `adb_demo`
     */
    "DBName"?: string;
    /**
     * 每页记录数，取值为**30**（默认值）、**50**或**100**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型最大值的正整数。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 进程ID。
     * @example `2021052716044317201616624903453******`
     */
    "ProcessID"?: string;
    /**
     * 根据指定字段进行排序，格式为JSON，是一个有序JSON数组，按输入数组的顺序进行复合排序，包含`Field`和`Type`两个字段，例如`[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`。其中：
     * * `Field`表示需要排序的字段名，支持如下取值：
     *     * **HostAddress**：连接数据库的客户端地址。
     *     * **UserName**：用户名。
     *     * **ExecutionStartTime**：目标SQL的执行开始时间。
     *     * **QueryTime**：目标SQL执行时长。
     *     * **PeakMemoryUsage**：执行目标SQL语句时的峰值内存。
     *     * **ScanRows**：带数据源的任务的扫描数据行数。
     *     * **ScanSize**：扫描的数据量。
     *     * **ScanTime**：扫描数据总耗时。
     *     * **PlanningTime**：执行计划生成耗时。
     *     * **WallTime**：查询中的所有算子在各个节点CPU Time的累加值。
     *     * **ProcessID**：进程ID。
     * * `Type`表示排序类型，支持如下取值：
     *     * **Desc**：降序。
     *     * **Asc**：升序。
     * @example `[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`
     */
    "Order"?: string;
    /**
     * 根据指定字段的最大值（`Max`）和最小值（`Min`）进行范围过滤，格式为JSON格式，是一个JSON数组，例如`[{"Field":"ScanSize","Min":"1000000","Max":"10000000"},{"Field":"QueryTime","Min":"1000","Max":"10000"}]`。
     * 其中`Field`字段表示需要限制范围的字段，支持如下取值：
     * * **ScanSize**：扫描的数据量，单位：KB。
     * * **QueryTime**：执行时长，单位：毫秒（ms）。
     * * **PeakMemoryUsage**：执行目标SQL语句时的峰值内存，单位：KB。
     * > `Min`表示查询范围最小值（左值），`Max`表示查询范围最大值（右值），数据类型都为String。
     * @example `[{"Field":"ScanSize","Min":"1000000","Max":"10000000"},{"Field":"QueryTime","Min":"1000","Max":"10000"}]`
     */
    "Range"?: string;
    /**
     * 查询状态。取值说明：
     * - **Successed**：成功。
     * - **Failed**：失败。
     * @example `Successed`
     */
    "State"?: string;
}
