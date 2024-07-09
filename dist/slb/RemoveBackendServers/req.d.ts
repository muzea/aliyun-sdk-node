export interface RemoveBackendServersRequest {
    /**
     * 负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 负载均衡实例ID。
     * @example `lb-bp15lbk8uja8rvm4a****`
     */
    "LoadBalancerId": string;
    /**
     * 要移除的后端服务器。
     * - **ServerId**：后端服务器ID，必填，String类型。
     * - **Type**：后端服务器类型，取值：
     *      - **ecs**（默认值）: 云服务器ECS实例。
     *     - **eni**：弹性网卡ENI实例。
     *     - **eci**：弹性容器实例。
     * - **Weight**：后端服务器的权重，取值范围：**0**~**100**，Integer类型。
     * 一次调用最多可以移除20个后端服务器。示例说明如下：
     * - 移除ECS：
     *  `[{"ServerId":"i-bp1fq61enf4loa5i****", "Type": "ecs","Weight":"100"}]`
     * - 移除ENI：
     *
     *  `[{"ServerId":"eni-2ze1sdp5****","Type": "eni","Weight":"100"}]`
     * - 移除ECI：
     *
     *  `[{"ServerId":"eci-2ze1sdp5****","Type": "eci","Weight":"100"}]`
     * @example `[{"ServerId":"i-bp1fq61enf4loa5i****", "Type": "ecs","Weight":"100"}]`
     */
    "BackendServers": string;
}
