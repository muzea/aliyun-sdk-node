export interface ListIntervenesRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `33a2658aaabf4c24b45d50e575125311_p_beebot_public`
     */
    "AgentKey": string;
    /**
     * 规则id
     * @example `mqtt_outRule_1679019634514`
     */
    "RuleId"?: number;
    /**
     * 问题
     * @example `小猫`
     */
    "Query"?: string;
    /**
     * 干预类型
     * @example `干预类型`
     */
    "InterveneType"?: number;
    /**
     * 页号
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页面尺寸
     * @example `10`
     */
    "PageSize"?: number;
}
