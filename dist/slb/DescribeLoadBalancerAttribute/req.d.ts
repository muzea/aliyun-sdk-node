export interface DescribeLoadBalancerAttributeRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1b6c719dfa08ex****`
     */
    "LoadBalancerId": string;
}
