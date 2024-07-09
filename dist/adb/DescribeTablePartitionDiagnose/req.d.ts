export interface DescribeTablePartitionDiagnoseRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~612241~~)接口查看目标地域下所有AnalyticDB MySQL数仓版集群的集群ID。
     * @example `am-bpxxxxxxxx47`
     */
    "DBClusterId": string;
    /**
     * 每页记录数，取值：
     * - 30；
     * - 50；
     * - 100；
     * 默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 将查询结果按指定字段进行排序。格式为JOSN字符串，例如`[{"Field":"TotalSize","Type":"Desc"}]`。其中：
     * - `Field`表示排序字段。支持如下取值：
     *     - `SchemaName`：表所属的数据库名。
     *     - `TableName`：表名。
     *     - `TotalSize`：总数据量。
     *     -  `SpaceRatio`：空间占比。
     * - `Type`表示排序方式。支持如下取值：
     *     - `Asc`：升序排序。
     *     - `Desc`： 降序排序。
     * > 若不设置参数，默认按照目标表的总数据量倒序排列。
     * @example `[{\"Field\":\"TotalSize\",\"Type\":\"Desc\"}]`
     */
    "Order"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
