export interface CreateBandwidthPackageRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 带宽包的带宽值。单位：Mbps。
     * 取值范围：**2**~**2000**。
     * @example `2`
     */
    "Bandwidth": number;
    /**
     * 购买时长。
     * - 当**PricingCycle**取值**Month**时，**Duration**取值范围为**1**~**9**。
     * - 当**PricingCycle**取值**Year**时，**Duration**取值范围为**1**~**3**。
     * 在**ChargeType**取值为**PREPAY**时，该项不能为空。
     * @example `1`
     */
    "Duration"?: string;
    /**
     * 计费周期。取值：
     * - **Month**：按月计费。
     * - **Year**：按年计费。
     * 在**ChargeType**取值为**PREPAY**时，该项不能为空。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 是否自动付费。取值：
     * - **false**（默认值）：不开启自动付费，生成订单后需要到订单中心完成支付。
     * - **true**：开启自动付费，自动支付订单。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567****`
     */
    "ClientToken"?: string;
    /**
     * 带宽包的类型。取值：
     * - **Basic**：基础带宽包。
     * - **CrossDomain**：跨地域加速包。
     * 中国站仅支持**Basic**。
     * @example `Basic`
     */
    "Type": string;
    /**
     * 带宽类型。取值：
     * - **Basic**：标准加速带宽。
     * - **Enhanced**：增强加速带宽。
     * - **Advanced**：精品加速带宽。
     * 在带宽包类型**Type**取值为**Basic**时，该项不能为空。
     * @example `Basic`
     */
    "BandwidthType"?: string;
    /**
     * 是否使用优惠券自动支付账单。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * > 仅**AutoPay**为**true**时，该项才生效。
     * @example `false`
     */
    "AutoUseCoupon"?: string;
    /**
     * 95计费保底比例。取值范围：**30**~**100**。
     * > 仅**BillingType**为**PayBY95**时，该项才生效。
     * @example `30`
     */
    "Ratio"?: number;
    /**
     * 后付费计费方式。取值：
     * - **PayByTraffic**（默认值）：流量计费。
     * - **PayBY95**：95计费。按95计费方式默认不开放，如需使用，请联系您的商务经理申请。
     * > 仅**ChargeType**为**POSTPAY**时，该项才生效。
     * @example `PayByTraffic`
     */
    "BillingType"?: string;
    /**
     * 付费类型。取值：
     * - **PREPAY**（默认值）：预付费，即包年包月。
     * - **POSTPAY**：后付费，即按量付费。后付费类型默认不开放，如需使用，请联系您的商务经理申请。
     * @example `PREPAY`
     */
    "ChargeType"?: string;
    /**
     * 跨地域加速包的互通区域A，仅取值为**China-mainland**（中国内地）。
     * 仅国际站支持传入该参数。
     * @example `China-mainland`
     */
    "CbnGeographicRegionIdA"?: string;
    /**
     * 跨地域加速包的互通区域B，仅取值为**Global**（全球）。
     * 仅国际站支持传入该参数。
     * @example `Global`
     */
    "CbnGeographicRegionIdB"?: string;
    /**
     * 优惠券号码。
     * > 仅国际站涉及该参数。
     * @example `50003298014****`
     */
    "PromotionOptionNo"?: string;
    /**
     * 是否开启自动续费。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 自动续费时长。单位：月。
     * 取值范围：**1**~**12**。默认值：**1**。
     * > 仅**AutoRenew**为**true**时，该项才生效。
     * @example `1`
     */
    "AutoRenewDuration"?: number;
    /**
     * 资源组ID。
     * @example `rg-aekzrnd67gq****`
     */
    "ResourceGroupId"?: string;
    /**
     * 带宽包的标签。
     */
    "Tag"?: {
        /**
         * 带宽包的标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 带宽包的标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
