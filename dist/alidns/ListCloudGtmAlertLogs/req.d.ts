export interface ListCloudGtmAlertLogsRequest {
    /**
     * 返回信息的语言类型：
     * - zh-CN：中文
     * - en-US：英文
     * @example `zh-CN`
     */
    "Lang"?: string;
    /**
     * 告警类型：
     * - ALERT：告警
     * - RESUME：恢复
     * @example `ALERT`
     */
    "ActionType"?: string;
    /**
     * 告警对象：
     * - GTM_ADDRESS：地址
     * - GTM_ADDRESS_POOL：地址池
     * - GTM_INSTANCE：实例
     * - GTM_MONITOR_TEMPLATE：健康探测模板
     * @example `GTM_ADDRESS`
     */
    "EntityType"?: string;
    /**
     * 搜索关键词，一般为地址 ID、地址池 ID、域名信息等。
     * @example `pool-895280232254422016`
     */
    "Keyword"?: string;
    /**
     * 查询的开始时间（时间戳）。
     * @example `1611328826977`
     */
    "StartTimestamp": number;
    /**
     * 查询的结束时间（时间戳）。
     * @example `1711328826977`
     */
    "EndTimestamp": number;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize": number;
}
