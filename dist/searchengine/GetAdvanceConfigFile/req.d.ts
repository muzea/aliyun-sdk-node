export interface GetAdvanceConfigFileRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 配置名称
     * @example `ha-cn-pl32rf0****_online_config_v5`
     */
    "configName": string;
    /**
     * 文件名称
     * @example `/intervene_dict/chn_ecommerce_general.dict`
     */
    "fileName": string;
}
