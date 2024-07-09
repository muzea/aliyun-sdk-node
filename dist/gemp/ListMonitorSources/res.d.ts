export interface ListMonitorSourcesResponse {
    /**
     * data
     */
    data: {
        /**
         * 监控源id
         * @example `12`
         */
        monitorSourceId: number;
        /**
         * 监控源名称
         * @example `Zabbix`
         */
        monitorSourceName: string;
        /**
         * 监控源字段列表
         */
        fieldKeys: string[];
    }[];
    /**
     * id of the request
     * @example `10REQUES-AC5C-4B59-BE11-378F117A6A88`
     */
    requestId: string;
}
