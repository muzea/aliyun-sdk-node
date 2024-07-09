export interface DeleteExpressConnectTrafficQosRuleRequest {
    /**
     * QoS策略所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-00****`
     */
    "ClientToken"?: string;
    /**
     * QoS策略ID。
     * @example `qos-2giu0a6vd5x0mv****`
     */
    "QosId": string;
    /**
     * QoS队列ID。
     * @example `qos-queue-9nyx2u7n71s2rc****`
     */
    "QueueId": string;
    /**
     * QoS规则ID。
     * @example `qos-rule-iugg0l9x27f2no****`
     */
    "RuleId": string;
}
