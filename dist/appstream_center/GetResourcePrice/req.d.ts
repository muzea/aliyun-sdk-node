export interface GetResourcePriceRequest {
    /**
     * 购买资源的规格类型ID，可通过[ListNodeInstanceType](~~428502~~)接口获取。
     * AppInstanceType与NodeInstanceType其中一个必须有值。若两个都有值则使用NodeInstanceType。
     * @example `appstreaming.vgpu.4c8g.2g`
     */
    "NodeInstanceType"?: string;
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 付费方式。
     * @example `PrePaid`
     */
    "ChargeType": string;
    /**
     * 资源购买时长的数量部分，与`PeriodUnit`一起表示完整的购买时长。
     * @example `1`
     */
    "Period": number;
    /**
     * 资源购买时长的单位部分，与`Period`一起表示完整的购买时长。可使用的`Period`与`PeriodUnit`的搭配如下：
     * - 1 Week（1周）
     * - 1 Month（1个月）
     * - 2 Month（2个月）
     * - 3 Month（3个月）
     * - 6 Month（6个月）
     * - 1 Year（1年）
     * - 2 Year（2年）
     * - 3 Year（3年）
     * > 该参数区分大小写。例如，`Week`是有效的，`week`是无效的。另外，如果请求参数不符合上述搭配，例如`2 Week`，虽然调用本接口会成功，但最终在下单阶段会出错。
     * @example `Week`
     */
    "PeriodUnit": string;
    /**
     * 购买资源的数量。
     * @example `1`
     */
    "Amount": number;
    /**
     * 交付组所属的地域ID。关于支持的地域详情，请参见[使用限制](~~426036~~)。
     * @example `cn-hangzhou`
     */
    "BizRegionId": string;
    /**
     * 购买会话的规格类型ID，可通过`ListAppInstanceType`接口获取。
     * AppInstanceType与NodeInstanceType其中一个必须有值。若两个都有值则使用NodeInstanceType。
     * @example `appstreaming.general`
     */
    "AppInstanceType"?: string;
}
