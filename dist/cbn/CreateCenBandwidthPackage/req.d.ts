export interface CreateCenBandwidthPackageRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，需保证该参数在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 带宽包实例的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "Name"?: string;
    /**
     * 带宽包实例的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `namedesc`
     */
    "Description"?: string;
    /**
     * 带宽包实例的带宽峰值。单位：Mbps。取值范围：**2**~**10000**。
     * @example `2`
     */
    "Bandwidth": number;
    /**
     * 网络实例所属的区域。取值：
     * - **China**：中国内地。
     * - **North-America**：北美。
     * - **Asia-Pacific**：亚太。
     * - **Europe**：欧洲。
     * - **Australia**：澳洲。
     * @example `China`
     */
    "GeographicRegionAId": string;
    /**
     * 另一个网络实例所属的区域。取值：
     * - **China**：中国内地。
     * - **North-America**：北美。
     * - **Asia-Pacific**：亚太。
     * - **Europe**：欧洲。
     * - **Australia**：澳洲。
     * @example `China`
     */
    "GeographicRegionBId": string;
    /**
     * 带宽包实例的付费类型。取值： **PREPAY**，表示先付费后使用的付费方式。
     * @example `PREPAY`
     */
    "BandwidthPackageChargeType"?: string;
    /**
     * 带宽包实例的购买时长。默认值：1。
     * - 当**PricingCycle**取值为**Month**时，**Period**取值范围为**1**~**3**和**6**。
     * - 当**PricingCycle**取值为**Year**时，**Period**取值范围为**1**~**3**。
     * > 当**BandwidthPackageChargeType**为**PREPAY**时本参数必填。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 带宽包实例的计费周期。取值：
     * - **Month**（默认值）：按月计费。
     * - **Year**：按年计费。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 是否自动支付带宽包实例的账单。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * 如果您选择不自动支付账单，在您调用本接口后，请前往控制台的订单中心完成支付，实例才能创建成功。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 是否开启自动续费功能。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * > 目前仅预付费带宽包支持自动续费。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 自动续费时长。单位：月。取值范围：**0**~**2147483647**。默认值：**1**。
     * @example `1`
     */
    "AutoRenewDuration"?: number;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `tagtest`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `tagtest`
         */
        Value: string;
    }[];
}
