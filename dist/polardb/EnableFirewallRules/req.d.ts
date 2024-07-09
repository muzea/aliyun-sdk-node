export interface EnableFirewallRulesRequest {
    /**
     * 集群ID。
     * @example `pc-************
    `
     */
    "DBClusterId": string;
    /**
     * 需要启用的防火墙规则名称。支持输入多个规则名称进行批量查询，多个名称间用英文逗号（,）分隔。
     * > 您可以通过**DescribeFirewallRules**接口查看目标集群下所有防火墙规则的详情，包括规则名称。
     * @example `test111`
     */
    "RuleNameList": string;
    /**
     * 启用或禁用目标防火墙规则。取值范围如下：
     * - **true**：启用。
     * - **false**：禁用。
     * > 仅当**RuleNameList**有参数值输入时，该参数生效。
     * @example `true`
     */
    "Enable"?: boolean;
}
