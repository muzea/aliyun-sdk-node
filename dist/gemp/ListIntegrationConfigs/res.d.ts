export interface ListIntegrationConfigsResponse {
    /**
     * id of the request
     * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 集成配置id
         * @example `1023`
         */
        integrationConfigId: number;
        /**
         * 监控源id
         * @example `87`
         */
        monitorSourceId: number;
        /**
         * 监控源名城
         * @example `Zabbix`
         */
        monitorSourceName: string;
        /**
         * 监控源简称
         * @example `Zabbix`
         */
        monitorSourceShortName: string;
        /**
         * 是否已接受报警
         * @example `false`
         */
        isReceivedEvent: boolean;
        /**
         * 集成配置状态
         * @example `NOT_INTEGRATED`
         */
        status: string;
        /**
         * 0:非自定义监控源  1:自定义监控源
         */
        monitorSourceType: number;
    }[];
}
