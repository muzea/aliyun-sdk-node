export interface DeleteLoadBalancerListenerRequest {
    /**
     * 负载均衡实例前端使用的端口。取值：**1**~**65535**。
     * @example `8080`
     */
    "ListenerPort": number;
    /**
     * 负载均衡实例的ID。
     * @example `lb-5snthcyu1x10g7tywj7iu****`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例前端使用的协议。
     * > 相同端口存在不同协议监听时，此字段必填。
     * @example `tcp`
     */
    "ListenerProtocol"?: string;
}
