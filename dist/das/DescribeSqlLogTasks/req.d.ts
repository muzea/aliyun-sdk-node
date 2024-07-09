export interface DescribeSqlLogTasksRequest {
    /**
     * 数据库实例ID。
     * @example `r-bp1nti25tc7bq5****`
     */
    "InstanceId"?: string;
    /**
     * 节点ID。
     * >该参数仅适用于集群版实例，可以选择查询指定节点离线任务。若不传该参数，默认返回主节点离线任务。
     * @example `pi-bp1o58x3ib7e6****`
     */
    "NodeId"?: string;
    /**
     * 查询筛选条件列表。
     */
    "Filters"?: {
        /**
         * 过滤参数。
         * > 支持的过滤参数及其取值请参考**请求参数补充说明**。
         * @example `keyWords`
         */
        Key: string;
        /**
         * 过滤参数的值。
         * @example `select
        `
         */
        Value: string;
    }[];
    /**
     * 查询开始时间，格式为unix时间戳，单位为毫秒。
     * @example `1596177993000`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间，格式为unix时间戳，单位为毫秒。
     * @example `1608888296000`
     */
    "EndTime"?: number;
    /**
     * 分页查询的页码，从1开始，默认为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页最大记录数，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
