export interface ModifyExpressConnectTrafficQosQueueRequest {
    /**
     * QoS策略所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
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
     * QoS队列的名称。
     * 长度为0～128个字符，不能以`http://`或`https://`开头。
     * @example `qos-queue-test`
     */
    "QueueName"?: string;
    /**
     * QoS队列的描述信息。
     * 长度为0～256个字符，不能以`http://`或`https://`开头。
     * @example `qos-queue-test`
     */
    "QueueDescription"?: string;
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
     * QoS队列带宽百分比。
     * * 当QoS队列类型为**Medium**的时候，此字段必须输入，取值范围为：1~100。
     * * 当QoS队列类型为**Default**的时候，此字段为"-"。
     * @example `100`
     */
    "BandwidthPercent"?: string;
}
