export interface DescribeAvailableAdvicesRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看数仓版（3.0）集群的集群ID。
     * @example `am-bp198m028ih55****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * >您可以调用[DescribeRegions](~~143074~~)接口查看可用地域的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 建议的生成日期，格式为yyyyMMdd（UTC时间）。
     * @example `20221124`
     */
    "AdviceDate": number;
    /**
     * 设置建议的显示语言，取值说明：
     * - **zh**：简体中文（默认语言）。
     * - **en**：英文。
     * - **ja**：日文。
     * - **zh-tw**：繁体中文。
     * @example `zh`
     */
    "Lang": string;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize": number;
    /**
     * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 建议的类型，取值说明：
     * - **INDEX**：索引优化。
     * - **TIERING**：冷热数据优化。
     * @example `Index`
     */
    "AdviceType"?: string;
    /**
     * 查询关键字，支持根据表名模糊搜索。
     * @example `you_table_name`
     */
    "Keyword"?: string;
    /**
     * 数据库名和表名的字符串拼接。
     * @example `tpch.lineitem`
     */
    "SchemaTableName"?: string;
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
     * @example `[{\"Field\":\"Benefit\",\"Type\":\"Desc\"}]`
     */
    "Order"?: string;
}
