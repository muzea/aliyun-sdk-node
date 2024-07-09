export interface DescribeSQLPatternsRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * > - 仅支持查看最近14天的数据。例如：当前时间为2021-11-22T12:00:00Z，最早可以查询到2021-11-09T12:00:00Z的数据。
     * > - 查询开始时间和查询结束时间的间隔不能大于24小时。
     * @example `2021-09-30T00:10:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * > 查询结束时间需晚于查询开始时间。
     * @example `2021-09-30T00:15:00Z`
     */
    "EndTime": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询关键字。
     * @example `SELECT`
     */
    "Keyword"?: string;
    /**
     * 将查询结果按指定字段进行排序。格式为JSON字符串，例如`[{"Field":"AverageQueryTime","Type":"Asc"}]`。其中：
     * - `Field`表示排序字段。取值说明：
     *     - `PatternCreationTime`：查询时间范围内，Pattern的最早提交时间。
     *     - `AverageQueryTime`：查询时间范围内，Pattern的平均总耗时。
     *     - `MaxQueryTime`：查询时间范围内，Pattern的最大总耗时。
     *     - `AverageExecutionTime`: 查询时间范围内，Pattern的平均执行耗时。
     *     - `MaxExecutionTime`: 查询时间范围内，Pattern的最大执行耗时。
     *     - `AveragePeakMemory`: 查询时间范围内，Pattern的平均峰值内存。
     *     - `MaxPeakMemory`: 查询时间范围内，Pattern的最大峰值内存。
     *     - `AverageScanSize`: 查询时间范围内，Pattern的平均数据读取量。
     *     - `MaxScanSize`: 查询时间范围内，Pattern的最大数据读取量。
     *     - `QueryCount`: 查询时间范围内，Pattern的执行次数。
     *     - `FailedCount`: 查询时间范围内，Pattern的失败次数。
     * - `Type`表示排序方式。取值说明（取值不区分大小写）：
     *     - `Asc`：升序排序。
     *     - `Desc`： 降序排序。
     * @example `[{"Field":"AverageQueryTime","Type":"Asc"}]`
     */
    "Order": string;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值。
     * > 本参数不填写，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值说明：
     * - **30**
     * - **50**
     * - **100**
     * > 本参数不填写，默认为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 设置下载文件的文件标题以及部分错误信息的语言，取值说明：
     * - **zh**：简体中文（默认语言）。
     * - **en**：英文。
     * - **ja**：日文。
     * - **zh-tw**：繁体中文。
     * @example `zh`
     */
    "Lang"?: string;
}
