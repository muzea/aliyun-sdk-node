export interface DeleteQosPolicyRequest {
    /**
     * QoS策略所属地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * QoS策略的实例ID。
     * @example `qos-xitd8690ucu8ro****`
     */
    "QosId": string;
    /**
     * QoS五元组的实例ID。
     * @example `qospy-xhwhyuo43l****`
     */
    "QosPolicyId": string;
}
