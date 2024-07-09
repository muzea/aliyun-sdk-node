export interface QueryPriceEntityListRequest {
    /**
     * 商品code，可通过**QueryCommodityList**接口查询商品code。
     * @example `ecs`
     */
    "CommodityCode": string;
    /**
     * 语言，不填时默认为zh(中文)
     * @example `en`
     */
    "Lang"?: string;
}
