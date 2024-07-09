export interface DeleteQosRequest {
    /**
     * QoS策略实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要删除的QoS策略的实例ID。
     * @example `qos-xhwhyuo43l****`
     */
    "QosId": string;
}
