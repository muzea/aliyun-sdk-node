export interface UpdateBandwidthPackageRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要修改的带宽包的ID。
     * @example `gbwp-bp1sgzldyj6b4q7cx****`
     */
    "BandwidthPackageId": string;
    /**
     * 带宽包的名称。
     * 名称长度为2~128个英文或中文字符，以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 带宽包的描述信息。
     * 描述长度最大为256个字符。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 带宽包的带宽值。单位：Mbps。
     * 取值范围：**2**~**2000**。
     * @example `2`
     */
    "Bandwidth"?: number;
    /**
     * 带宽类型。取值：
     * - **Basic**：标准加速带宽。
     * - **Enhanced**：增强加速带宽。
     * - **Advanced**：精品加速带宽。
     * > 目前，仅支持**Basic**与**Enhanced**间变配，不支持**Advanced**与其他类型间进行变配。
     * @example `Basic`
     */
    "BandwidthType"?: string;
    /**
     * 是否自动付费。取值：
     *  - **false**（默认值）：不开启自动付费。生成订单后需要到<props="china">[订单中心](https://usercenter2.aliyun.com/order/list)</props><props="intl">[订单中心](https://usercenter2-intl.aliyun.com/order/list)</props>完成支付。
     * - **true**：开启自动付费，自动支付订单。
     * > 本参数仅对升配订单生效。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 是否使用代金券。取值：
     * - **true**：使用。
     * - **false**（默认值）：不使用。
     * @example `false`
     */
    "AutoUseCoupon"?: boolean;
}
