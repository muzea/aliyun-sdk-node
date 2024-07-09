export interface CreateConfigFileRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 配置名称
     * @example `ha-cn-pl32rf0****@ha-cn-pl32rf0****_test_api@test_api@index_config_edit`
     */
    "configName": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 目录名称
         * @example `/schemas/device_event_xt_schema.json`
         */
        fileName: string;
        /**
         * 上级文件路径
         * @example `/`
         */
        parentFullPath: string;
        /**
         * oss存储地址
         * @example `oss://xxx/xxxx/xxx`
         */
        ossPath: string;
    };
}
