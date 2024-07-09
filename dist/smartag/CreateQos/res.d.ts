export interface CreateQosResponse {
    /**
     * 请求ID。
     * @example `AACF5140-783D-48F0-9E4F-E59D716F7D08`
     */
    RequestId: string;
    /**
     * QoS策略实例ID。
     * @example `rg-acfm2iu4fnc****`
     */
    QosId: string;
    /**
     * QoS策略实例所属资源组ID。
     * @example `qos-oek3r2cmvk7m8q****`
     */
    ResourceGroupId: string;
}
