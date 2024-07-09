export interface DescribeExpressConnectTrafficQosQueueRequest {
    /**
     * QoS策略所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai
    `
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * QoS队列ID集合。
     */
    "QueueIdList"?: string[];
    /**
     * QoS队列名称集合。
     */
    "QueueNameList"?: string[];
    /**
     * QoS策略ID。
     * @example `qos-2giu0a6vd5x0mv****`
     */
    "QosId"?: string;
}
