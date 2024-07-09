export interface ModifyQosRequest {
    /**
     * QoS策略实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要修改的QoS策略的实例ID。
     * @example `qos-awfxl1adxeqyk****`
     */
    "QosId": string;
    /**
     * QoS策略的名称。
     * @example `doctest`
     */
    "QosName"?: string;
    /**
     * QoS策略描述，长度为1~512个字符，以大小写字母或中文开头，可包含数字、下划线（_)或短划线（-）。
     * @example `qosdes`
     */
    "QosDescription"?: string;
}
