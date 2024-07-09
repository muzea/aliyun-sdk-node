export interface RenewAppInstanceGroupRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 优惠ID。可通过[GetResourcePrice](~~428503~~)接口获得。
     * @example `17440009****`
     */
    "PromotionId"?: string;
    /**
     * 是否自动付费。
     * @example `false`
     */
    "AutoPay"?: boolean;
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
     * 交付组ID。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
}
