export interface ApplyCreateDistributionOrderRequest {
    /**
     * 如果传入了外部交易号，则会以其作为请求的幂等键，重复传入相同的外部交易号，会返回重复下单提示。外部交易号会在交易结果通知中透出。
     * @example `789***3323`
     */
    "DistributionOutTradeId"?: string;
    /**
     * 商品信息
     */
    "ItemInfoLists"?: {
        /**
         * 分销商城ID
         * @example `465879694****794d70934`
         */
        DistributionMallId: string;
        /**
         * Lm侧商品Id
         * @example `100***35-634***598`
         */
        LmItemId: string;
        /**
         * 下单数量
         * @example `1`
         */
        Quantity: number;
        /**
         * SKU
         * @example `456***9561`
         */
        SkuId: string;
        Price: number;
    }[];
    /**
     * 收货地址
     * @example `{\"divisionCode\":\"44***22\",\"addressDetail\":\"**小区\",\"mobile\":\"180***0041\",\"fullName\":\"小**\",\"townDivisionCode\":\"440***32\"}`
     */
    "DeliveryAddress"?: string;
    /**
     * 扩展信息
     * @example `{}`
     */
    "ExtInfo"?: string;
    /**
     * 分销商ID
     * @example `6331***2131`
     */
    "DistributorId"?: string;
    /**
     * 渠道供应商ID
     * @example `764***2245`
     */
    "DistributionSupplierId"?: string;
    /**
     * 分销真实买家ID
     * @example `u***01`
     */
    "BuyerId"?: string;
    /**
     * 租户ID
     * @example `12***29`
     */
    "TenantId"?: string;
}
