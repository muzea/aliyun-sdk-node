export interface CreateConfigDirRequest {
    /**
     * 实例 ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 配置名称。
     * @example `ha-cn-pl32rf0****@ha-cn-pl32rf0****_test_api@test_api@index_config_edit`
     */
    "configName": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 目录名称
         * @example `/clusters`
         */
        dirName: string;
        /**
         * 上级文件路径
         * @example `/`
         */
        parentFullPath: string;
    };
}
