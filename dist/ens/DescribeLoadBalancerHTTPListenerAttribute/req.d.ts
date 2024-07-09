export interface DescribeLoadBalancerHTTPListenerAttributeRequest {
    /**
     * 需要查询的监听端口。取值：**1~65535**。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 负载均衡实例的ID。
     * @example `lb-5snthcyu1x10g7tywj7iu****`
     */
    "LoadBalancerId": string;
}
