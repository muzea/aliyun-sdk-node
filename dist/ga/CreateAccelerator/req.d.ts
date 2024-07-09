export interface CreateAcceleratorRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
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
     * 全球加速实例的名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）或短划线（-）。
     * @example `test`
     */
    "Name"?: string;
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
     * 全球加速实例的规格，取值：
     * - **1**：小型Ⅰ。
     * - **2**：小型Ⅱ。
     * - **3**：小型Ⅲ。
     * - **5**：中型Ⅰ。
     * - **8**：中型Ⅱ。
     * - **10**：中型Ⅲ。
     * - **20**：大型Ⅰ。
     * - **30**：大型Ⅱ。
     * - **40**：大型Ⅲ。
     * - **50**：大型IV。
     * - **60**：大型V。
     * - **70**：大型VI。
     * - **80**：大型VII。
     * - **90**：大型VIII。
     * - **100**：超大型Ⅰ。
     * - **200**：超大型Ⅱ。
     * > 目前，大型Ⅲ及以上规格仅白名单开放。如需使用，请联系阿里云客户经理。
     * 实例规格不同，定义也不同。更多信息，请参见[实例规格](~~153127~~)。
     * @example `1`
     */
    "Spec"?: string;
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
     * >仅**AutoPay**为**true**时，该项才生效。
     * @example `false`
     */
    "AutoUseCoupon"?: string;
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
     * 优惠券号码。
     * > 仅国际站涉及该参数。
     * @example `50003298014****`
     */
    "PromotionOptionNo"?: string;
    /**
     * 带宽计费方式。
     * - **BandwidthPackage**：按带宽包计费。
     * - **CDT**：按流量计费。
     * @example `BandwidthPackage`
     */
    "BandwidthBillingType"?: string;
    /**
     * 加速区域配置。
     */
    "IpSetConfig"?: {
        /**
         * 加速区域接入模式。取值：
         * - **UserDefine**：自定义就近接入模式。您可以根据业务需要，定向选择加速区域和地域，全球加速为每个加速地域提供独立的EIP。
         * - **Anycast**：采用自动就近接入模式。您无需配置加速区域。全球加速在全球多地域提供一个Anycast EIP，用户可通过Anycast EIP从就近接入点进入阿里云加速网络。
         * @example `UserDefine`
         */
        AccessMode: string;
    };
    /**
     * 标准型全球加速实例所属资源组ID。
     * @example `rg-aekzrnd67gq****`
     */
    "ResourceGroupId"?: string;
    /**
     * 全球加速实例的标签。
     */
    "Tag"?: {
        /**
         * 全球加速实例的标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 全球加速实例的标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
    /**
     * 全球加速实例付费类型。
     * - PREPAY（默认值）：预付费。
     * - POSTPAY： 后付费。
     * @example `PREPAY`
     */
    "InstanceChargeType"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
}
