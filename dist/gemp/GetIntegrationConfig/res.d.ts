export interface GetIntegrationConfigResponse {
    /**
     * Id of the request
     * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 集成配置id
         * @example `101`
         */
        integrationConfigId: number;
        /**
         * 监控源id
         * @example `65`
         */
        monitorSourceId: number;
        /**
         * 监控源名称
         * @example `Zabbix`
         */
        monitorSourceName: string;
        /**
         * 监控源简称
         * @example `Zabbix`
         */
        monitorSourceShortName: string;
        /**
         * 集成密钥
         * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
         */
        accessKey: string;
        /**
         * 是否接收报警
         * @example `True`
         */
        isReceivedEvent: boolean;
        /**
         * 集成配置状态，DISABLE 禁用，INTEGRATED 已集成，UNINTEGRATED未集成
         * @example `INTEGRATED`
         */
        status: string;
    };
}
