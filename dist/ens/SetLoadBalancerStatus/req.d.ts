export interface SetLoadBalancerStatusRequest {
    /**
     * 负载均衡实例ID。
     * @example `lb-5t18quoohsrc3xkf86sp*****`
     */
    "LoadBalancerId": string;
    /**
     * 修改后的实例状态。取值：
     * - **Active**：运行负载均衡实例，实例中的监听可以根据规则转发接收的流量。
     * - **InActive**：停止负载均衡实例，实例中的监听不会再转发接收的流量。
     * @example `Active`
     */
    "LoadBalancerStatus": string;
}
