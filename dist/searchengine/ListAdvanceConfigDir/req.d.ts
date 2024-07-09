export interface ListAdvanceConfigDirRequest {
    /**
     * 实例id。
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 配置名称。
     * @example `ha-cn-pl32rf0****_online_config_v3`
     */
    "configName": string;
    /**
     * 目录名称。
     * @example `/zones/general`
     */
    "dirName": string;
}
