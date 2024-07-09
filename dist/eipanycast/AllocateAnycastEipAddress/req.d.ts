export interface AllocateAnycastEipAddressRequest {
    /**
     * Anycast EIP实例的带宽峰值。单位：Mbps。
     * 取值范围：**200**~**1000**。
     * 默认值：**1000**。
     * >带宽峰值不作为业务承诺指标，仅作为参考值和带宽上限峰值。
     * @example `200`
     */
    "Bandwidth"?: string;
    /**
     * Anycast EIP实例接入区域。
     * 取值：**international**，指中国内地以外的区域。
     * @example `international`
     */
    "ServiceLocation": string;
    /**
     * Anycast EIP实例付费类型。
     * 取值：**PostPaid**，指后付费。
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * Anycast EIP实例访问公网计费方式。
     * 取值：**PayByTraffic**，指按流量计费。
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * Anycast EIP实例名称。
     * 长度为0~128个字符，以大小字母或中文开头，可包含数字，下划线（_）或短划线（-）。
     * @example `doctest`
     */
    "Name"?: string;
    /**
     * Anycast EIP实例描述。
     * 长度为0~256个字符，不能以`http://`或`https://`开头。
     * @example `docdesc`
     */
    "Description"?: string;
    /**
     * 实例所属的资源组ID。
     * @example `rg-acfm3obzjuk****`
     */
    "ResourceGroupId"?: string;
}
