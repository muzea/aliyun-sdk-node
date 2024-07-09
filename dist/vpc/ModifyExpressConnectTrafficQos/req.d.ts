export interface ModifyExpressConnectTrafficQosRequest {
    /**
     * QoS策略所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * QoS策略的名称。
     * 长度为0～128个字符，不能以`http://`或`https://`开头。
     * @example `qos-test`
     */
    "QosName"?: string;
    /**
     * QoS策略的描述信息。
     * 长度为0～256个字符，不能以`http://`或`https://`开头。
     * @example `qos-test`
     */
    "QosDescription"?: string;
    /**
     * QoS策略ID。
     * @example `qos-2giu0a6vd5x0mv****`
     */
    "QosId": string;
    /**
     * 本次更新需要添加的实例列表，如果没有需要添加的实例可以不用传递此参数。
     */
    "AddInstanceList"?: {
        /**
         * 需要关联的实例ID。
         * @example `pc-bp159zj8zujwy3p07****`
         */
        InstanceId: string;
        /**
         * 需要关联实例的类型。取值：**PHYSICALCONNECTION**物理专线。
         * @example `PHYSICALCONNECTION`
         */
        InstanceType: string;
    }[];
    /**
     * 本次更新需要移除的实例列表，如果没有需要移除的实例可以不用传递此参数。
     */
    "RemoveInstanceList"?: {
        /**
         * 关联的实例ID。
         * @example `pc-bp1j37am632492qzw****`
         */
        InstanceId: string;
        /**
         * 关联实例的类型。取值：**PHYSICALCONNECTION**物理专线。
         * @example `PHYSICALCONNECTION`
         */
        InstanceType: string;
    }[];
}
