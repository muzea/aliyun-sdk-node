export interface DeleteLoadBalancerListenerRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * > 当您所选地域的Endpoint（服务地址）为slb.aliyuncs.com时，**RegionId**必填。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 传统型负载均衡实例的ID。
     * @example `lb-bp13jaf5qli5xmgl1miup`
     */
    "LoadBalancerId": string;
    /**
     * 传统型负载均衡实例前端使用的端口。
     * 取值：**1~65535**。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 传统型负载均衡实例前端使用的协议。
     * > 相同端口存在不同协议监听时，此字段必填。
     * @example `https`
     */
    "ListenerProtocol"?: string;
}
