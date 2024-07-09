export interface RenderDistributionOrderRequest {
    /**
     * 商品信息
     */
    "ItemInfoLists"?: {
        /**
         * 分销商城ID
         */
        DistributionMallId: string;
        /**
         * LM侧商品Id
         */
        LmItemId: string;
        /**
         * 下单数量
         */
        Quantity: number;
        /**
         * 商品SkuId
         */
        SkuId: string;
    }[];
    /**
     * 收货地址
     */
    "DeliveryAddress"?: string;
    /**
     * 扩展信息
     */
    "ExtInfo"?: string;
    /**
     * 分销商ID
     */
    "DistributorId"?: string;
    /**
     * 渠道供应商ID
     */
    "DistributionSupplierId"?: string;
    /**
     * 分销真实买家ID
     */
    "BuyerId"?: string;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
