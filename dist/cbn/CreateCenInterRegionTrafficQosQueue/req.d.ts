export interface CreateCenInterRegionTrafficQosQueueRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-426****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建队列。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建队列。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 队列的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "QosQueueName"?: string;
    /**
     * 队列的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "QosQueueDescription"?: string;
    /**
     * 队列可以使用的最大跨地域带宽。
     * - 带宽值以百分比计算。例如您输入20，则表示队列最多可以使用20%的跨地域带宽。
     * - 一个跨地域连接实例下所有队列的带宽占比之和不能超过100%。
     * @example `20`
     */
    "RemainBandwidthPercent": string;
    /**
     * 流量调度策略ID。
     * @example `qos-qdvybn468kaoxx****`
     */
    "TrafficQosPolicyId": string;
    /**
     * 队列待匹配的DSCP值。
     * 一次最多支持输入20个DSCP值，DSCP值之间使用半角逗号（,）分隔。
     */
    "Dscps": number[];
}
