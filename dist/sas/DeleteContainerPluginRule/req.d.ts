export interface DeleteContainerPluginRuleRequest {
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 规则ID，通过addContainerWebDefenseRule接口获取规则ID。
     * @example `200022`
     */
    "RuleId": number;
}
