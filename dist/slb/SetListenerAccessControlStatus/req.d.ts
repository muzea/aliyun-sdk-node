export interface SetListenerAccessControlStatusRequest {
    /**
     * 负载均衡实例的地域。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
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
     * 取值：**1-65535**。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 是否开启访问控制。取值：
     * - **open_white_list**：开启白名单访问控制。
     * - **close**：关闭白名单访问控制。
     * > 如果开启访问控制后，没有设置白名单则无法访问负载均衡服务。
     * @example `open_white_list`
     */
    "AccessControlStatus": string;
    /**
     * 负载均衡实例前端使用的协议。
     * > 相同端口存在不同协议监听时，此字段必填。
     * @example `https`
     */
    "ListenerProtocol"?: string;
}
