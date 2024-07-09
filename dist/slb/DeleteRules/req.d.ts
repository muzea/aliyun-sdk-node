export interface DeleteRulesRequest {
    /**
     * 负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要删除的转发规则列表。
     * > 要删除的转发规则列表不能为空，并且可删除的转发规则条目数不能超过10条。
     * @example `["rule-bp1z9ce******","rule-bp1tuc******4"]`
     */
    "RuleIds": string;
}
