export interface DescribeDatabasesRequest {
    /**
     * 租户 ID。
     * @example `t4pnum****`
     */
    "TenantId"?: string;
    /**
     * 分页查询的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：100
     * - 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 数据库名称。
     * 不能使用某些预留关键字，如 test、mysql。
     * @example `sms_pre`
     */
    "DatabaseName"?: string;
    /**
     * 查询列表的删选关键字。
     * @example `pay`
     */
    "SearchKey"?: string;
    /**
     * 是否返回数据库中的表信息。
     * 默认值：false。
     * > <br>
     * > 如果表的数量过大则可能导致接口超时。
     * @example `true`
     */
    "WithTables"?: boolean;
    /**
     * 集群 ID。
     * @example `ob****n0abo9uo`
     */
    "InstanceId"?: string;
}
