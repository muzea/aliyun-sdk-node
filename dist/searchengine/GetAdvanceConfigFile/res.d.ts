export interface GetAdvanceConfigFileResponse {
    /**
     * id of request
     * @example `10D5E615-69F7-5F49-B850-00169ADE513C`
     */
    requestId: string;
    /**
     * 结果
     */
    result: {
        /**
         * 文件内容
         * @example `{\"url\":\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\"}`
         */
        content: string;
    };
}
