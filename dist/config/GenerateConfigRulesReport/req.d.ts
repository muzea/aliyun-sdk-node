export interface GenerateConfigRulesReportRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
     * @example `AAAAAdDWBF2****`
     */
    "ClientToken"?: string;
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * 关于如何获取规则ID，请参见[ListConfigRules](~~169607~~)。
     * @example `cr-25d86457e0d900b5****`
     */
    "ConfigRuleIds"?: string;
}
