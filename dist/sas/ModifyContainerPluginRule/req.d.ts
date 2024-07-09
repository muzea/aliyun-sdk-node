export interface ModifyContainerPluginRuleRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 规则ID。
     * @example `100012`
     */
    "RuleId": number;
    /**
     * 规则动作模式。取值：
     * - **1**：告警
     * - **2**：拦截
     * @example `1`
     */
    "Mode"?: number;
    /**
     * 规则名称。
     * @example `test`
     */
    "RuleName"?: string;
    /**
     * 规则项列表。
     */
    "SelectedPolicy"?: string[];
    /**
     * 规则类型。取值：
     * - **0**：用户自定义
     * - **1**：系统内置
     * @example `0`
     */
    "RuleType"?: number;
    /**
     * 白名单镜像列表。
     */
    "WhiteImages"?: string[];
}
