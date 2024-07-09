export interface CountNodeGroupsRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-060a09wy`
     */
    "IotInstanceId"?: string;
    /**
     * 模糊匹配节点分组名称。
     * @example `group1`
     */
    "FuzzyName"?: string;
    /**
     * 模糊匹配节点分组中节点所使用的 JoinEUI。
     * @example `d896e0`
     */
    "FuzzyJoinEui"?: string;
    /**
     * 模糊匹配节点分组中节点的 DevEUI。
     * @example `d896e0`
     */
    "FuzzyDevEui"?: string;
}
