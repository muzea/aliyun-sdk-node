export interface DescribeListenerAccessControlAttributeRequest {
    /**
     * 负载均衡实例的地域。
     * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-8vb86hxixo8lvsja8****`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例前端使用的端口。
     * 取值：**1~65535**。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 负载均衡实例前端使用的协议。
     * > 相同端口存在不同协议监听时，此字段必填。
     * @example `https`
     */
    "ListenerProtocol"?: string;
}
