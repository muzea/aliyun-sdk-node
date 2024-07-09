export interface CreateQosCarRequest {
    /**
     * QoS限速规则的描述信息。
     * @example `Qosdesc`
     */
    "Description"?: string;
    /**
     * QoS策略实例所在的地域ID。
     * 您可以调用[DescribeRegions](~~69813~~)接口查询地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * QoS策略的实例ID。
     * @example `qos-xitd8690ucu8ro****`
     */
    "QosId": string;
    /**
     * 设置限速规则的优先级。
     * 取值范围：**1**~**3**。数值越小，优先级越高。同优先级时先下发的规则优先生效。
     * @example `2`
     */
    "Priority": number;
    /**
     * 限速类型，取值：
     * - **Absolute**：按带宽值。
     * - **Percent**：按百分比。
     * @example `Absolute`
     */
    "LimitType": string;
    /**
     * 最小带宽值，带宽值需要输入整数，单位：Mbps。
     * **LimitType**是**Absolute**时必填。
     * @example `2`
     */
    "MinBandwidthAbs"?: number;
    /**
     * 最大带宽值，带宽值需要输入整数，单位：Mbps。
     * **LimitType**是**Absolute**时必填。
     * > 输入的最大带宽值必须大于最小带宽值。
     * @example `6`
     */
    "MaxBandwidthAbs"?: number;
    /**
     * 最小带宽百分比，单位：百分比（%），取值范围：**1~100**。
     * **LimitType**是**Percent**时必填。
     * @example `20`
     */
    "MinBandwidthPercent"?: number;
    /**
     * 最大带宽百分比，单位：百分比（%），取值范围：**1~100**。
     * **LimitType**是**Percent**时必填。
     * > 输入的最大带宽百分比必须大于最小带宽百分比。
     * @example `90`
     */
    "MaxBandwidthPercent"?: number;
    /**
     * 百分比限速时的带宽类型，取值：
     * - **CcnBandwidth**：表示CCN带宽。
     * - **InternetUpBandwidth**：表示Internet总带宽。
     * @example `CcnBandwidth`
     */
    "PercentSourceType"?: string;
    /**
     * QoS限速规则名称。
     * 长度为2~128，以字母或中文开头，且只包含中文、字母、数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `nametest`
     */
    "Name"?: string;
}
