export interface CreateBasicAcceleratorRequest {
    /**
     * 基础型全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567****`
     */
    "ClientToken"?: string;
    /**
     * 购买时长。
     * - 当**PricingCycle**取值**Month**时，**Duration**取值范围为**1**~**9**。
     * - 当**PricingCycle**取值**Year**时，**Duration**取值范围为**1**~**3**。
     * @example `1`
     */
    "Duration"?: number;
    /**
     * 计费周期。取值：
     * - **Month**：按月计费。
     * - **Year**：按年计费。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 带宽计费方式。取值：
     * - **BandwidthPackage**：按带宽包计费。
     * - **CDT**：按流量计费并由云数据传输（Cloud DataTransfer，简称CDT）统一结算。
     * - **CDT95**：按95计费并由CDT统一结算。该带宽计费方式仅白名单用户可用。
     * @example `CDT`
     */
    "BandwidthBillingType"?: string;
    /**
     * 是否自动付费，取值：
     * - **false**（默认值）：不开启自动付费，生成订单后需要到订单中心完成支付。
     * - **true**：开启自动付费，自动支付订单。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 是否使用优惠券自动支付账单。取值：
     * - **true**：使用。
     * - **false**（默认值）：不使用。
     * > 仅**AutoPay**为**true**时，该项才生效。
     * @example `false`
     */
    "AutoUseCoupon"?: string;
    /**
     * 优惠券号码。
     * > 仅国际站涉及该参数。
     * @example `50003298014****`
     */
    "PromotionOptionNo"?: string;
    /**
     * 是否开启自动续费。
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 自动续费时长。单位：月。
     * 取值范围：**1**~**12**。默认值：**1**。
     * > 仅**AutoRenew**的为**true**时，该项才生效。
     * @example `1`
     */
    "AutoRenewDuration"?: number;
    /**
     * 基础型全球加速实例所属资源组ID。
     * @example `rg-acfmxshhcsn****`
     */
    "ResourceGroupId"?: string;
    /**
     * 付费类型。取值：
     * - **PREPAY（默认值）**：代表预付费，即包年包月方式付费。
     * - **POSTPAY**：代表后付费，即按使用时长方式付费。
     * @example `PREPAY`
     */
    "ChargeType"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 基础型全球加速实例的标签。
     */
    "Tag"?: {
        /**
         * 基础型全球加速实例的标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 您最多可输入20个标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 基础型全球加速实例的标签值。一旦输入该值，不可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 您最多可输入20个标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
