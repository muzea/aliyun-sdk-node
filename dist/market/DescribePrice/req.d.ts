export interface DescribePriceRequest {
    /**
     * 订单类型。取值：
     * INSTANCE_BUY：商品购买
     * INSTANCE_RENEW：实例续费
     * INSTANCE_UPGRADE：实例升级
     * 说明：对于续费类型的询价，需要在 Commodity 中传入 InstanceId。
     * @example `INSTANCE_BUY`
     */
    "OrderType": string;
    /**
     * 根据指定的 OrderType，使用对应的配件并序列化。 不同 OrderType 分别对应的 CommodityType 如下所示：
     * INSTANCE_BUY：InstanceBuyCommodity
     * INSTANCE_RENEW：InstanceRenewCommodity
     * INSTANCE_UPGRADE：InstanceUpgradeCommodity
     * 示例中的参数说明如下：
     * productCode：商品 Code。
     * skuCode：商品规格 Code。非镜像商品：预付费固定为 prepay，后付费固定为 postpay；镜像商品：按量为ECS，包年包月为Package
     * components：规格模块。其中版本 package_version 必传，其他模块根据商品的设置来传。
     * duration：周期数量 1,2,3...。
     * pricingCycle: 周期单位。Day（日），Month（月），Year（年）。
     * @example `{"components":{"package_version":"yuncode12928000016"},"duration":1,"pricingCycle":"YEAR","productCode":"cmgj01**28","quantity":1,"skuCode":"prepay"}`
     */
    "Commodity": string;
}
