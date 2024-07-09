export interface CreateLoadBalancerResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `nlb-83ckzc8d4xlp8o****`
     */
    LoadbalancerId: string;
    /**
     * 网络型负载均衡实例的订单ID。
     * @example `20230000`
     */
    OrderId: number;
}
