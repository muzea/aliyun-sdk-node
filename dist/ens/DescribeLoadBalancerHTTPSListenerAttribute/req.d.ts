export interface DescribeLoadBalancerHTTPSListenerAttributeRequest {
    /**
     * 需要查询的监听端口。取值：**1**~**65535**。
     * @example `443`
     */
    "ListenerPort": number;
    /**
     * 负载均衡实例的ID。
     * @example `lb-5qoxu2rsr0ytanpn4r3i****`
     */
    "LoadBalancerId": string;
}
