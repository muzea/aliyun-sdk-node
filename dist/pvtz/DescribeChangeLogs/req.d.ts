export interface DescribeChangeLogsRequest {
    /**
     * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * Zone ID。<br>
     * 若ZondId非空，则获取当前Zone的解析记录变更日志。<br>
     * 若ZoneId为空，则获取当前账户下所有Zone操作及Zone解析变更日志。
     * @example `6726`
     */
    "ZoneId"?: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 开始时间（时间戳）。
     * @example `1516779348000`
     */
    "StartTimestamp"?: number;
    /**
     * 结束时间（时间戳）。
     * @example `1516779348000`
     */
    "EndTimestamp"?: number;
    /**
     * 获取的日志类型。
     * - **PV_ZONE**为zone的操作日志。
     * - **PV_RECORD**为解析记录的操作日志。
     * 其它值则忽略，获取所有日志。
     * @example `PV_ZONE`
     */
    "EntityType"?: string;
    /**
     * 用户Ip。
     * @example `1.1.1.1`
     */
    "UserClientIp"?: string;
}
