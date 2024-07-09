export interface DescribeInclinedTablesRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-k2jofo4pi5zhd****`
     */
    "DBClusterId": string;
    /**
     * 表类型，取值说明：
     * - **FactTable**：分区表。
     * - **DimensionTable**：维度表。
     * @example `FactTable`
     */
    "TableType": string;
    /**
     * 按指定字段排序，json格式：JSON数组，有序，按顺序输入排列字段和升降序类型：
     * 如：
     * ```
     * [
     *     {
     *         "Field":"Name",
     *         "Type":"Asc"
     *     }
     * ]
     * ```
     * 其中Field表示需要排序的字段名，目前仅支持对"Name" 字段排序。
     * Type表示排序类型 Desc为降序，Asc为升序。
     * 均不区分大小写。
     * @example `[      {          "Field":"Name",          "Type":"Asc"      }  ]`
     */
    "Order"?: string;
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
     * 页码，取值为大于0且不超过integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    "RegionId"?: string;
    "Lang"?: string;
}
