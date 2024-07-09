export interface CreateQosCarResponse {
    /**
     * 最小带宽值，单位：Mbps。
     * **LimitType**是**Absolute**时必填。
     * @example `2`
     */
    MinBandwidthAbs: number;
    /**
     * QoS限速规则描述。
     * @example `Qosdesc`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `AC13E8FF-4D61-40AD-868E-817F2D3AC86A`
     */
    RequestId: string;
    /**
     * QoS限速规则的实例ID。
     * @example `qoscar-n5k8g97lihlph****`
     */
    QosCarId: string;
    /**
     * 最大带宽值，单位：Mbps。
     * **LimitType**是**Absolute**时必填。
     * @example `6`
     */
    MaxBandwidthAbs: number;
    /**
     * 最大带宽百分比，单位：百分比（%）。
     * @example `90`
     */
    MaxBandwidthPercent: number;
    /**
     * 规则的优先级。
     * @example `2`
     */
    Priority: number;
    /**
     * QoS策略的实例ID。
     * @example `qos-xitd8690ucu8ro****`
     */
    QosId: string;
    /**
     * 按百分比限速时的带宽类型，取值：
     * - **CcnBandwidth**：表示CCN带宽。
     * - **InternetUpBandwidth**：表示Internet总带宽。
     * @example `CcnBandwidth`
     */
    PercentSourceType: string;
    /**
     * 最小带宽百分比，单位：百分比（%）。
     * @example `20`
     */
    MinBandwidthPercent: number;
    /**
     * 限速类型，取值：
     * - **Absolute**：按带宽值。
     * - **Percent**：按百分比。
     * @example `Percent`
     */
    LimitType: string;
}
