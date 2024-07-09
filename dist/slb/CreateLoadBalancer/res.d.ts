export interface CreateLoadBalancerResponse {
    /**
     * 传统型负载均衡实例的所属专有网络的ID。
     * @example `vpc-25dvzy9****`
     */
    VpcId: string;
    /**
     * 传统型负载均衡实例的IP地址类型。
     * @example `ipv4`
     */
    AddressIPVersion: string;
    /**
     * 传统型负载均衡实例的所属交换机的ID。
     * @example `vsw-255ecr****`
     */
    VSwitchId: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 传统型负载均衡实例的名称。
     * @example `lb-bp1o94dp5i6ea****`
     */
    LoadBalancerName: string;
    /**
     * 传统型负载均衡实例的ID。
     * @example `lb-hddhfjg****`
     */
    LoadBalancerId: string;
    /**
     * 资源组ID。
     * @example `rg-atstuj3rto****`
     */
    ResourceGroupId: string;
    /**
     * 分配的负载均衡实例的IP地址。
     * @example `42.XX.XX.6`
     */
    Address: string;
    /**
     * 传统型负载均衡实例的网络类型，取值：
     * * **vpc**：专有网络实例。
     * * **classic**：经典网络实例。
     * @example `classic`
     */
    NetworkType: string;
    /**
     * 预付费实例的订单ID。
     * @example `20212961978****`
     */
    OrderId: number;
}
