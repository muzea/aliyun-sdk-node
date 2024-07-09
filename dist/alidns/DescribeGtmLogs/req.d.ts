export interface DescribeGtmLogsRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例ID。
     * @example `gtm-cn-xxxxx`
     */
    "InstanceId"?: string;
    /**
     * 关键字，按照“%Keyword%”模式搜索，不区分大小写。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 查询的开始时间（时间戳）。
     * @example `1363453340000`
     */
    "StartTimestamp"?: number;
    /**
     * 查询的结束时间（时间戳）。
     * @example `1363453340000`
     */
    "EndTimestamp"?: number;
}
