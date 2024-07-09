export interface GetQosAttributeRequest {
    /**
     * QoS策略实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * QoS策略实例ID。
     * @example `qos-1iqifund3gcno5****`
     */
    "QosId": string;
}
