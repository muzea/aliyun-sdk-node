export interface DescribeRulesRequest {
    /**
     * 负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 负载均衡实例ID。
     * @example `lb-bp1ca0zt07t934****`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例前端使用的协议。取值：
     * **TCP**：协议类型为TCP。
     * **UDP**：协议类型为UDP。
     * **HTTP**：协议类型为HTTP。
     * **HTTPS**：协议类型为HTTPS。
     * >相同端口存在不同协议监听时，此字段必填。
     * @example `http`
     */
    "ListenerProtocol"?: string;
    /**
     * 负载均衡实例前端使用的监听端口。
     * 取值范围：**1~65535**。
     * @example `90`
     */
    "ListenerPort": number;
}
