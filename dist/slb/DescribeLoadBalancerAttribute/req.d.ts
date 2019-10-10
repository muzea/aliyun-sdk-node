interface DescribeLoadBalancerAttributeRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1b6c719dfa08exfuca5`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    "IncludeReservedData"?: boolean;
}
export { DescribeLoadBalancerAttributeRequest };