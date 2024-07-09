export interface DescribeTableAccessCountRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 目标表名。
     * > 若该参数留空，则会返回当前日期内目标集群下所有表的使用频次数据。
     * @example `CUSTOMER`
     */
    "TableName"?: string;
    /**
     * 需要查询的日期，格式为<i>yyyy-MM-dd</i>（UTC时间）。
     * > 仅支持查看30天内的数据。
     * @example `2021-08-30`
     */
    "StartTime": string;
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
     * @example `[{"Field":"TableSchema","Type":"Asc"}]`
     */
    "Order"?: string;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
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
