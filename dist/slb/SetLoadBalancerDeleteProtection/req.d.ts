export interface SetLoadBalancerDeleteProtectionRequest {
    /**
     * 传统型负载均衡实例的地域。
     * 您可以通过调用[DescribeRegions](~~2401682~~)  接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 传统型负载均衡实例的ID。
     * @example `lb-bp1b6c719dfa08e*****`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡删除保护状态。取值：
     * - **on**：开启删除保护。
     * - **off**：关闭删除保护。
     * @example `off`
     */
    "DeleteProtection": string;
}
