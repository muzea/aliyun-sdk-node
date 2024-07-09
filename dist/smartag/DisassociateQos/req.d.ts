export interface DisassociateQosRequest {
    /**
     * QoS策略实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * QoS策略的实例ID。
     * @example `qos-1lcl9gv5ew7x****`
     */
    "QosId": string;
    /**
     * 需要解绑的智能接入网关实例ID。
     * @example `sag-c3m3n1khz58l****`
     */
    "SmartAGId": string;
}
