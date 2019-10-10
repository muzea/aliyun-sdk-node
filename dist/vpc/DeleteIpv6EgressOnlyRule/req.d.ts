interface DeleteIpv6EgressOnlyRuleRequest {
    /**
    * IPv6网关的ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * 要删除的仅主动出规则ID。
    * @example `ipv6py-hp3w98rmlbqp0xxxxxxxx`
    */ "Ipv6EgressOnlyRuleId": string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `123456`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { DeleteIpv6EgressOnlyRuleRequest };