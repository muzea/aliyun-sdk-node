export interface DeleteConfigFileRequest {
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
     * 文件名称
     * @example `/schemas/automobile_vector_schema.json`
     */
    "fileName": string;
    /**
     * 上级目录的路径
     * @example `/`
     */
    "parentFullPath": string;
}
