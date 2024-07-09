export interface DescribeLoadBalancerTCPListenerAttributeRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1ygod3yctvg1y****`
     */
    "LoadBalancerId": string;
    /**
     * 传统型负载均衡实例前端使用的端口。
     * 取值：**1**~**65535**。
     * @example `80`
     */
    "ListenerPort": number;
}
