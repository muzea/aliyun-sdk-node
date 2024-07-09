export interface DescribeLoadBalancerHTTPSListenerAttributeRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 传统型负载均衡实例的ID。
     * @example `lb-bp1mxu5r8lau****`
     */
    "LoadBalancerId": string;
    /**
     * 实例前端使用的端口。
     * 取值：**1**~**65535**。
     * @example `80`
     */
    "ListenerPort": number;
}
