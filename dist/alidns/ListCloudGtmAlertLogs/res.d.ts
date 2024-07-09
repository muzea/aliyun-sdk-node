export interface ListCloudGtmAlertLogsResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 告警日志总条目数。
     * @example `15`
     */
    TotalItems: number;
    Logs: {
        /**
         * 告警日志列表。
         */
        Log: {
            /**
             * 告警类型：
             * - ALERT：告警
             * - RESUME：恢复
             * @example `ALERT`
             */
            ActionType: string;
            /**
             * 告警对象：
             * - GTM_ADDRESS：地址
             * - GTM_ADDRESS_POOL：地址池
             * - GTM_INSTANCE：实例
             * - GTM_MONITOR_TEMPLATE：健康探测模板
             * @example `GTM_ADDRESS`
             */
            EntityType: string;
            /**
             * 告警内容。
             * @example `"Pool name：华东\nType：IPv4\nReason: Normal health determination\nNumber of addresses in the pool : 2\nAbnormal address: --\nDetermination conditions : Any address in the addresspool is available address\nAffected domain names: www.cloud-example.com"`
             */
            Content: string;
            /**
             * 告警日志时间（时间戳）。
             * @example `1711328826977`
             */
            Timestamp: number;
        }[];
    };
}
