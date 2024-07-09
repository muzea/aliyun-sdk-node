export interface DeleteQosCarRequest {
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
     * QoS限速规则的实例ID。
     * @example `qoscar-n5k8g97lihlph****`
     */
    "QosCarId": string;
}
