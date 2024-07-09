export interface DeleteConfigDirRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 配置名称
     * @example `ha-cn-pl32rf0****@ha-cn-pl32rf0****_test_api@test_api@index_config_edit`
     */
    "configName": string;
    /**
     * 目录名称。
     * @example `/clusters`
     */
    "dirName": string;
    /**
     * 上级目录的路径
     * @example `/`
     */
    "parentFullPath": string;
}
