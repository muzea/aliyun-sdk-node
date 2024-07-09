export interface AssociateQosRequest {
    /**
     * QoS策略实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * QoS策略的实例ID。
     * @example `qos-awfxl1adxeqyk****`
     */
    "QosId": string;
    /**
     * 需要应用QoS策略的智能接入网关实例ID。
     * @example `sag-c3m3n1khz58l****`
     */
    "SmartAGId": string;
}
