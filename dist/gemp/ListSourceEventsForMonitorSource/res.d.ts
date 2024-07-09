export interface ListSourceEventsForMonitorSourceResponse {
    /**
     * Id of the request
     * @example `xxxxxx`
     */
    requestId: string;
    /**
     * 告警列表
     */
    data: {
        /**
         * 监控源ID
         * @example `1000`
         */
        monitorSourceId: boolean;
        /**
         * 监控源名称
         * @example `zabbix`
         */
        monitorSourceName: string;
        /**
         * 告警上报时间
         * @example `2020-01-01 18:30:00`
         */
        eventTime: string;
        /**
         * 告警内容
         * @example `{}`
         */
        eventJson: string;
    }[];
}
