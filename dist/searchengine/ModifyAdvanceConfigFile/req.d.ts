export interface ModifyAdvanceConfigFileRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 配置名称
     * @example `ha-cn-pl32rf0****_online_config_edit`
     */
    "configName": string;
    /**
     * 文件名
     * @example `/qrs.json`
     */
    "fileName": string;
    /**
     * 请求体参数
     * @example `{}`
     */
    "body"?: {
        /**
         * 文件内容
         * @example `{\"url\":\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\"}`
         */
        content: string;
        /**
         * 变量列表
         */
        variables: any;
    };
}
