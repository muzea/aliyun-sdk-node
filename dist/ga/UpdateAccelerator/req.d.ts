export interface UpdateAcceleratorRequest {
    /**
     * 全球加速实例所属的地域，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567****`
     */
    "ClientToken"?: string;
    /**
     * 全球加速实例的名称。
     * 名称长度为1~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-）。
     * @example `Accelerator`
     */
    "Name"?: string;
    /**
     * 全球加速实例的描述信息，描述长度最大为200个字符。
     * @example `Accelerator`
     */
    "Description"?: string;
    /**
     * 全球加速实例的ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
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
     * - **false**（默认值）：不开启自动付费，生成订单后需要到<props="china">[订单中心](https://usercenter2.aliyun.com/order/list)</props><props="intl">[订单中心](https://usercenter2-intl.aliyun.com/order/list)</props>完成支付。
     * - **true**：开启自动付费，自动支付订单。
     * >本参数仅对升配订单生效。
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
    "AutoUseCoupon"?: boolean;
}
