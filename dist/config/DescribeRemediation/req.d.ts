export interface DescribeRemediationRequest {
    /**
     * 规则ID
     * @example `cr-3184626622af003****`
     */
    "ConfigRuleId"?: string;
    /**
     * 修正设置ID。
     * @example `crr-f381cf0c1c2f004e****`
     */
    "RemediationId"?: string;
}
