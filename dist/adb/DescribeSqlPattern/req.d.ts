export interface DescribeSqlPatternRequest {
    /**
     * 需要查询的日期，格式为<i>yyyy-MM-dd</i>（UTC时间）。
     * > 仅支持查看30天内的数据。
     * @example `2021-08-30`
     */
    "StartTime": string;
    /**
     * 将查询结果按指定字段进行排序。格式为JSON字符串，例如`[{"Field":"Pattern","Type":"Asc"}]`。其中：
     * - `Field`表示排序字段。支持如下取值：
     *     - `Pattern`：SQL Pattern。
     *     - `AccessIP`：客户端IP。
     *     - `User`：用户名。
     *     - `QueryCount`：查询总数。
     *     - `AvgPeakMemory`：平均峰值内存，单位：KB。
     *     - `MaxPeakMemory`：最大峰值内存，单位：KB。
     *     - `AvgCpuTime`：平均计算耗时，单位：ms。
     *     - `MaxCpuTime`：最大计算耗时，单位：ms。
     *     - `AvgStageCount`：平均Stage个数。
     *     - `MaxStageCount`：最大Stage个数。
     *     - `AvgTaskCount`：平均Task个数。
     *     - `MaxTaskCount`：最大Task个数。
     *     - `AvgScanSize`：平均扫描量，单位：KB。
     *     - `MaxScanSize`：最大扫描量，单位：KB。
     * - `Type`表示排序方式。支持如下取值：
     *     - `Asc`：升序排序。
     *     - `Desc`： 降序排序。
     * > - 若不设置参数，默认按照`Pattern`字段升序排列。
     * > - 若需要按照`AccessIP`字段排序，则`Type`参数必须设置为`accessip`；若需要按照`User`字段排序，则`Type`参数必须留空或设置为`user`。
     * @example `[{"Field":"Pattern","Type":"Asc"}]`
     */
    "Order"?: string;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 需要包含的SQL Pattern的关键字。
     * > 若该参数不填，默认返回目标集群在`StartTime`参数所设日期内的所有SQL Pattern详情。
     * @example `SELECT`
     */
    "SqlPattern"?: string;
    /**
     * 按指定维度来聚合SQL Pattern。支持如下取值：
     *  - `user`：按用户维度聚合。
     *  - `accessip`：按访问IP来源聚合。
     * > 若该参数不填，默认按照 `user`维度聚合。
     * @example `user`
     */
    "Type"?: string;
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 每页记录数，取值为任意正整数。默认为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
