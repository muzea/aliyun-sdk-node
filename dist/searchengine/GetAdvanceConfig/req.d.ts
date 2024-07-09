export interface GetAdvanceConfigRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * - -ONLINE: 在线配置,
     * - -ONLINE_CAVA: 在线cava配置,
     * - -ONLINE_PLUGIN: 在线插件,
     * - -ONLINE_QUERY: 查询配置,
     * - -OFFLINE_DICT: 离线配置,
     * - -OFFLINE_TABLE: 离线表,
     * - -OFFLINE_COMMON: 离线配置,
     * - -OFFLINE_PLUGIN: 离线插件,
     * - -OFFLINE_INDEX: 索引配置
     * @example `ONLINE`
     */
    "type"?: string;
    /**
     * 配置名称
     * @example `
    ha-cn-pl32rf0****_offline_adv_edit`
     */
    "configName": string;
}
