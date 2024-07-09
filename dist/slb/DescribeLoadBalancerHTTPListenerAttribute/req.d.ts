export interface DescribeLoadBalancerHTTPListenerAttributeRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以调用[DescribeRegions](~~25609~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 传统型负载均衡实例的ID。
     * @example `lb-bp1uaunez0uho0zf0****`
     */
    "LoadBalancerId": string;
    /**
     * 实例前端使用的端口。
     * 取值：**1**~**65535**。
     * @example `80`
     */
    "ListenerPort": number;
}
