export interface ListServiceGroupMonitorSourceTemplatesResponse {
    /**
     * Id of the request
     * @example `xxxx`
     */
    requestId: string;
    /**
     * 模版列表
     */
    data: {
        /**
         * 监控源ID
         * @example `1000`
         */
        monitorSourceId: number;
        /**
         * 消息模版ID
         * @example `1000`
         */
        templateId: number;
        /**
         * 监控报警源名字
         * @example `zabbix`
         */
        monitorSourceName: string;
        /**
         * 模板内容
         * @example `""`
         */
        templateContent: string;
        /**
         * 字段
         */
        fields: string[];
    }[];
}
