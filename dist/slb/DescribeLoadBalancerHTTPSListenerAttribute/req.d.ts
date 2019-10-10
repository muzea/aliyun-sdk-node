interface DescribeLoadBalancerHTTPSListenerAttributeRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例前端使用的端口。
    * 取值：**1-65535**。
    * @example `80`
    */ "ListenerPort": number;
    /**
    * 负载均衡实例的ID。
    * @example `lb-bp1mxu5r8laukr35n1k5r`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { DescribeLoadBalancerHTTPSListenerAttributeRequest };