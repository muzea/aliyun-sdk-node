interface DescribeRuleAttributeRequest {
    /**
    * 负载均衡实例的地域ID。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 转发规则ID。
    * @example `rule-bp1efemp9suk5`
    */ "RuleId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { DescribeRuleAttributeRequest };