export interface AddContainerPluginRuleRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 规则名称，长度限制为1~80个字符，支持字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）这些字符。说明同一个用户内规则名称唯一。
     * @example `tyest111`
     */
    "RuleName": string;
    /**
     * 规则模板ID。通过ListSystemClientRules获取模板ID。
     * @example `86863`
     */
    "RuleTemplateId": number;
    /**
     * 规则动作模式。取值：
     * - **1**：告警
     * - **2**：拦截
     * @example `1`
     */
    "Mode": number;
    /**
     * 指定启用规则的权限策略信息。
     */
    "SelectedPolicy": string[];
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
