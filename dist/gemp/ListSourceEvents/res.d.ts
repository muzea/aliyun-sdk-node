export interface ListSourceEventsResponse {
    /**
     * 请求ID
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
    /**
     * 当前页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 页大小
     * @example `20`
     */
    pageSize: number;
    /**
     * 当前页
     */
    data: {
        /**
         * 规则ID
         * @example `1`
         */
        routeRuleId: number;
        /**
         * INCIDENT 事件、ALERT 报警、PROBLEM 故障
         * @example `INCIDENT`
         */
        instanceType: string;
        /**
         * 关联对象ID
         * @example `1`
         */
        instanceId: number;
        /**
         * 监控告警源ID
         * @example `1`
         */
        monitorSourceId: number;
        /**
         * 监控告警源名称
         * @example `zabbix`
         */
        monitorSourceName: string;
        /**
         * 告警上报时间
         * @example `2020-09-08 15:53:34`
         */
        eventTime: string;
        /**
         * 租户ID
         * @example `1`
         */
        tenantRamId: number;
        /**
         * 告警内容json
         * @example `""`
         */
        eventJson: string;
    }[];
    /**
     * lastRowKey
     * @example `9223370412331485036-1344383-9967-1-8d729a1b176f493ca3be643b391d5ced`
     */
    lastRowKey: string;
    /**
     * firstRowKey
     * @example `9223370412331485032-1344383-9967-1-08be8b08ef30441390072f3bfba71c94`
     */
    firstRowKey: string;
}
