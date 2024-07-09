export interface CreateOrderRequest {
    /**
     * 订单类型。 取值：
     * - INSTANCE_BUY：商品购买
     * - INSTANCE_RENEW：实例续费
     * - INSTANCE_UPGRADE：实例升级
     * @example `INSTANCE_BUY`
     */
    "OrderType": string;
    /**
     * 订单配件信息。
     * 可根据指定的 OrderType，使用对应的配件再进行序列化。
     * 不同 OrderType 分别对应的 CommodityType 如下所示：
     * * INSTANC_BUY：InstanceBuyCommodity
     * * INSTANCE_RENEW：InstanceRenewCommodity
     * * INSTANCE_UPGRADE：InstanceUpgradeCommodity
     * 示例中的 Commodity 参数说明如下：
     * - 必传参数
     *   - productCode：商品码
     *   - skuCode：商品规格码。预付费固定为 prepay，后付费固定为 postpay。
     *   - duration：周期数量 1，2，3...。
     *   - pricingCycle：周期单位。Day（日），Month（月），Year（年）。
     *   - components：规格模块。其中版本 package_version 必传，其他模块根据商品的设置来传。
     * - 可选参数
     *   - quantity：订购数量
     *   - queryPromotion：是否查询优惠
     *   - couponId：优惠卷 ID
     *   - properties：订单扩展属性字符串，JSON 的 dict 格式
     * @example `InstanceBuyCommodity示例：{"components":{"package_version":"yuncode1394000000"},"duration":100,"pricingCycle":"Year","productCode":"cmfw019940","properties":{},"quantity":1,"skuCode":"cmfw019940-prepay"}；InstanceRenewCommodity示例：{“components”:{“package_version”:”yuncode1806900001”},”quantity”:1,”duration”:2,”instanceId”:”6227091”,”productCode”:”cmgj024069”,”pricingCycle”:”Month”,”properties”:{},”skuCode”:”cmgj024069-prepay”}；InstanceUpgradeCommodity示例：{“components”:{“package_version”:”yuncode1806900002”},”quantity”:1,”duration”:1,”instanceId”:”6227091”,”productCode”:”cmgj024069”,”pricingCycle”:”Month”,”properties”:{},”skuCode”:”cmgj024069-prepay”} `
     */
    "Commodity": string;
    /**
     * 订单来源（未启用）
     * @example `abc`
     */
    "OrderSouce"?: string;
    /**
     * 付款方式：
     * * AUTO：余额自动支付
     * * HAND：手动支付
     * @example `HAND`
     */
    "PaymentType": string;
    /**
     * 用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过 64 个 ASCII 字符。
     * @example `2709c68a-d569-4819-9c5d-1222ed2ee924`
     */
    "ClientToken": string;
}
