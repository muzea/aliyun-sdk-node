export interface DeleteMaskingRulesRequest {
    /**
     * 需要删除的脱敏规则名称。支持输入多个规则名称进行批量删除，多个名称间用英文逗号（,）分隔。
     * > 您可以通过[DescribeMaskingRules](~~212573~~)接口查看目标集群下所有脱敏规则的详情，包括规则名称。
     * @example `testrule`
     */
    "RuleNameList": string;
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息，包括集群ID。
     * @example `pc-*****************`
     */
    "DBClusterId": string;
}
