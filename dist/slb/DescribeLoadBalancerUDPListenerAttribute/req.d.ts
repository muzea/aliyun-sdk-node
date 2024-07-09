export interface DescribeLoadBalancerUDPListenerAttributeRequest {
    /**
     * 负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1rtfnodmywb43e*****`
     */
    "LoadBalancerId": string;
    /**
     * 传统型负载均衡实例前端使用的端口。
     * 取值：**1**~**65535**。
     * @example `80`
     */
    "ListenerPort": number;
}
