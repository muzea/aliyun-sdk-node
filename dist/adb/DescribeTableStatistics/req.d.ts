export interface DescribeTableStatisticsRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看集群ID。
     * @example `am-bp183qgrwywa6****`
     */
    "DBClusterId": string;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0的正整数。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 根据指定字段进行排序，格式为JSON，是一个有序JSON数组，按输入数组的顺序进行复合排序，包含`Field`和`Type`两个字段，例如`[{ "Field":"TableName", "Type":"Asc" }]`。其中：
     * * `Field`表示需要排序的字段名。支持排序的字段包括：TableName、ColdDataSize、DataSize、PrimaryKeyIndexSize、RowCount、IndexSize、SchemaName、PartitionCount。
     * * `Type`表示排序类型，支持如下取值（取值均不区分大小写）：
     *     * **Desc**：降序。
     *     * **Asc**：升序。
     * @example `[ { "Field":"TableName", "Type":"Asc" } ]`
     */
    "Order"?: string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 查询关键字，支持根据表名模糊搜索。
     * @example `you_table_name`
     */
    "Keyword"?: string;
}
