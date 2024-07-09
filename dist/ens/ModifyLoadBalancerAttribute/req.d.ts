export interface ModifyLoadBalancerAttributeRequest {
    /**
     * 负载均衡实例的ID。
     * @example `lb-5q73cv04zeyh43lh74lp4gtm8`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例的名称，长度为**2**~**128**个英文或中文字符。
     * > 不能以`http://`和`https://`开头。
     * @example `test`
     */
    "LoadBalancerName": string;
}
