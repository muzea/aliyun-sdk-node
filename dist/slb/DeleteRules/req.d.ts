interface DeleteRulesRequest {
    /**
    * 负载均衡实例的地域ID。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要删除的转发规则列表。
    * @example `["rule-bp1z9cee47oip","rule-bp1tucxr06qu4"]`
    */ "RuleIds": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { DeleteRulesRequest };