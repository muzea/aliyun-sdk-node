export interface SetLoadBalancerNameRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以调用[DescribeRegions](~~25609~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1b6c719dfa08e******`
     */
    "LoadBalancerId": string;
    /**
     * 传统型负载均衡实例的新名称。
     * 长度为1～80个英文、数字或中文字符，可包含半角句号（.）、下划线（_）和短划线（-）。
     * @example `test1`
     */
    "LoadBalancerName": string;
}
