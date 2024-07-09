export interface ListIntegrationConfigsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 监控源名称
         * @example `Zabbix`
         */
        monitorSourceName: string;
        /**
         * 幂等标识
         * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
         */
        clientToken: string;
    };
}
