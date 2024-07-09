export interface DescribeLoadBalancersRequest {
    /**
     * ENS节点ID。
     * @example `cn-guangzhou-10`
     */
    "EnsRegionId"?: string;
    /**
     * 后端服务器实例ID。
     * @example `i-5f67ffjc004wwz0t****`
     */
    "ServerId"?: string;
    /**
     * 负载均衡实例监听状态。取值：
     * - **Active**：实例中的监听可以根据规则转发接收的流量。
     * - **InActive**：实例中的监听不会再转发接收的流量。
     * @example `InActive`
     */
    "LoadBalancerStatus"?: string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-5q73cv04zeyh43lh74lp4****`
     */
    "LoadBalancerId"?: string;
    /**
     * 负载均衡实例名称。
     * @example `example`
     */
    "LoadBalancerName"?: string;
    /**
     * 网络ID。
     * @example `n-5s9ayrxsd9hszrlt5fgv2****`
     */
    "NetworkId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-5sy773iy25rulsmgskmba****`
     */
    "VSwitchId"?: string;
    /**
     * 负载均衡实例的服务地址。
     * @example `10.0.XX.XX`
     */
    "Address"?: string;
    /**
     * 列表的页码，默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认值：10，取值：**10**~**100**。
     * @example `100`
     */
    "PageSize"?: number;
}
