export interface DescribeExcessivePrimaryKeysRequest {
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~129857~~)接口查看账号下AnalyticDB MySQL数仓版集群的集群ID。
     * @example `am-bp1u8c0mgfg58****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~454314~~)接口查看指定AnalyticDB MySQL数仓版（3.0）集群的地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 查询开始时间。格式为<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2021-09-30T00:10Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2023-05-15T07:15Z`
     */
    "EndTime"?: string;
    /**
     * 每页记录数，取值范围如下：
     * * **30**（默认值）。
     * * **50**。
     * * **100**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型最大值的正整数。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 设置建议的显示语言，取值说明：
     * - **zh（默认值）**：简体中文。
     * - **en**：英文。
     * - **ja**：日文。
     * - **zh-tw**：繁体中文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 将查询结果按指定字段进行排序。格式为JSON字符串，例如`[{"Field":"TableSchema","Type":"Asc"}]`。其中：
     * - `Field`表示排序字段。支持如下取值：
     *     - `TableSchema`：表所属的数据库名。
     *     - `TableName`：表名。
     *     - `AccessCount`：表被访问的次数。
     * - `Type`表示排序方式。支持如下取值：
     *     - `Asc`：升序排序。
     *     - `Desc`： 降序排序。
     * > 若不设置参数，默认按照目标表所属的数据库升序排列。
     * @example `[{"Field":"TableName","Type":"Desc"}]`
     */
    "Order"?: string;
}
