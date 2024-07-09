export interface DescribeAppliedAdvicesRequest {
    /**
     * AnalyticDB MySQL数仓版集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看数仓版集群的集群ID。
     * @example `am-uf6g8w25jacm7****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可通过接口[DescribeRegions](~~143074~~)查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询建议的开始日期，格式为yyyyMMdd（UTC时间）。
     * @example `20220811`
     */
    "StartTime"?: number;
    /**
     * 查询建议的结束日期，格式为yyyyMMdd（UTC时间）。
     * @example `20220824`
     */
    "EndTime"?: number;
    /**
     * 设置建议的显示语言，取值说明：
     * - **zh**：简体中文（默认语言）。
     * - **en**：英文。
     * - **ja**：日文。
     * - **zh-tw**：繁体中文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 建议的类型，取值说明：
     * - **INDEX**：索引优化。
     * - **TIERING**：冷热数据优化。
     * @example `INDEX`
     */
    "AdviceType"?: string;
    /**
     * 查询关键字，支持根据表名模糊搜索。
     * @example `you_table_name`
     */
    "Keyword"?: string;
    /**
     * 数据库名和表名。格式为**数据库.表**。
     * @example `tpch.lineitem`
     */
    "SchemaTableName"?: string;
    /**
     * 将查询结果按指定字段进行排序。格式为JSON字符串，例如`[{"Field":"SchemaName","Type":"Asc"}]`。其中：
     * - `Field`表示排序字段。支持如下取值：
     *     - `SchemaName`：数据库名。
     *     - `TableName`：表名。
     *     - `JobStatus`：表Build任务状态。
     *     - `SubmitTime`：建议下发的时间。
     *     - `Benefit`：预期优化收益。
     * - `Type`表示排序方式。支持如下取值：
     *     - `Asc`：升序排序。
     *     - `Desc`： 降序排序。
     * > 若不设置参数，默认按照优化建议下发的时间降序排列。
     * @example `[{"Field":"Benefit","Type":"Desc"}]`
     */
    "Order"?: string;
}
