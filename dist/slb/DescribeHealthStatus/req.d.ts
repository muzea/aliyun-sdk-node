export interface DescribeHealthStatusRequest {
    /**
     * 负载均衡实例 ID。
     * @example `lb-bp1qjwo61pqz3ah****`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例前端使用的端口。
     * 取值：**1~65535**
     * > 不设置该参数表示获取所有端口的健康检查状态。
     * @example `80`
     */
    "ListenerPort"?: number;
    /**
     * 负载均衡实例前端使用的协议。
     * @example `http`
     */
    "ListenerProtocol"?: string;
    /**
     * 负载均衡实例的地域 ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
