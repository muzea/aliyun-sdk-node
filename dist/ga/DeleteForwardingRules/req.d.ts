export interface DeleteForwardingRulesRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 转发策略。
     * @example `frule-bp19a3t3yzr21q3****`
     */
    "ForwardingRuleIds": string[];
    /**
     * 全球加速实例ID。
     * @example `ga-bp17frjjh0udz4q****`
     */
    "AcceleratorId": string;
    /**
     * 监听实例ID。
     * @example `lsr-bp1s0vzbi5bxlx5****`
     */
    "ListenerId": string;
}
