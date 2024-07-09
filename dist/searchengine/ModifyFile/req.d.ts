export interface ModifyFileRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 索引名称
     * @example `test_api`
     */
    "indexName": string;
    /**
     * 版本
     * @example `ha-cn-pl32rf0****_online_config_v1`
     */
    "versionName": string;
    /**
     * 文件全路径名称
     * @example `/schemas/generation_schema.json`
     */
    "fileName": string;
    /**
     * 请求体参数
     * @example `{\"desc\":\"new version\"}`
     */
    "body"?: {
        /**
         * 内容
         * @example `{\"partition\":1}`
         */
        content: string;
        /**
         * 分片数
         * @example `1`
         */
        partition: number;
    };
}
