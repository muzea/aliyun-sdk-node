export interface GetEventResponse {
    /**
     * Id of the request
     * @example `XXXXXXXXXXXX`
     */
    requestId: string;
    /**
     * 返回结果
     */
    data: {
        /**
         * 告警源ID
         * @example `1`
         */
        monitorSourceId: number;
        /**
         * 告警源名称
         * @example `zabbix`
         */
        monitorSourceName: string;
        /**
         * 告警上报时间
         * @example `2002-09-08 15:30:35`
         */
        eventTime: string;
        /**
         * 告警内容
         * @example `“”`
         */
        eventJson: string;
    };
}
