export interface ListTrendForSourceEventResponse {
    /**
     * Id of the request
     * @example `xxxxx`
     */
    requestId: string;
    /**
     * 统计列表
     */
    data: {
        /**
         * 最大持续时长
         * @example `10920312312312`
         */
        maxSustainTime: number;
        /**
         * 收敛率
         * @example `90.90%`
         */
        convergenceRate: string;
        /**
         * 按监控源分组统计数据
         * @example `{             "Grafana": [                 {                     "evenTime": "2021-11-15 14:29:59",                     "eventCount": 4,                     "monitorSourceName": "Grafana",                     "monitorSourceCounts": null,                     "sustainTime": 15646                 },                 {                     "evenTime": "2021-11-15 14:30:36",                     "eventCount": 7,                     "monitorSourceName": "Grafana",                     "monitorSourceCounts": null,                     "sustainTime": 52638                 }             ]         }`
         */
        sourceEventsStatMap: any;
        /**
         * 是否跨天
         * @example `true`
         */
        skipDay: boolean;
        /**
         * 时间单位
         * @example `1000`
         */
        unit: string;
    }[];
}
