export interface DescribeItemsRequest {
    /**
     * 分页参数：每页显示条数，默认值20。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 商品标题。
     * @example `纯牛奶`
     */
    "ItemTitle"?: string;
    /**
     * SkuID。
     * @example `1234565`
     */
    "SkuId"?: string;
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 商品条码;
     * @example `6941297417178`
     */
    "ItemBarCode"?: string;
    /**
     * 商品id
     * @example `6959294202901`
     */
    "ItemId"?: string;
    /**
     * 是否匹配促销模板显示，默认值为false；
     * @example `true`
     */
    "BePromotion"?: boolean;
    /**
     * 系统保留字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
}
