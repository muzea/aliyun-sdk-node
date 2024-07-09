export interface PublishAdvanceConfigRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 配置名称
     * @example `ha-cn-pl32rf0****_online_config_v3`
     */
    "configName": string;
    /**
     * 请求结构。
     * @example `{\"desc\":\"new version\"}`
     */
    "body"?: {
        /**
         * 高级配置描述信息
         * @example `自定义配置`
         */
        desc: string;
        /**
         * 文件信息
         */
        files: {
            /**
             * oss文件路径
             * @example `oss://opensearch/test.json`
             */
            ossPath: string;
            /**
             * 操作类型：UPDATE:更新；DELETE:删除；默认UPDATE
             * @example `UPDATE`
             */
            operateType: string;
            /**
             * 上级文件路径
             * @example `/`
             */
            parentFullPath: string;
            /**
             * 文件名称
             * @example `vector_question_schema.json`
             */
            fileName: string;
            /**
             * 目录名称。
             * @example `/clusters`
             */
            dirName: string;
            /**
             * 高级配置信息
             */
            config: {
                /**
                 * 文件内容
                 * @example `
                {\"url\":\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\"}`
                 */
                content: string;
                /**
                 * 变量列表
                 */
                variables: any;
            };
        }[];
    };
}
