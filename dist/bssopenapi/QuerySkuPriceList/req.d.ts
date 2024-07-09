export interface QuerySkuPriceListRequest {
    /**
     * 商品code，可通过**QueryCommodityList**接口查询商品code。
     * @example `ecs`
     */
    "CommodityCode": string;
    /**
     * 定价对象code，可通过**QueryPriceEntityList**接口查询定价对象code。
     * @example `instance_type`
     */
    "PriceEntityCode": string;
    /**
     * 每页返回的数量，最大不能超过50
     * @example `20`
     */
    "PageSize": number;
    /**
     * 分页token，首页查询时传空，查询结果中返回下一页token地址。当结果token为空时表示全部查完。可通过查询结果中的**NextPageToken**字段获取下一页token。
     * @example `080112060a0422020800180022490a470342000000315333303332363436363336333433393636333136333338333733373333333133373336363336323634363336363337333836333636333636313336363433363332`
     */
    "NextPageToken"?: string;
    /**
     * 定价因子条件集合，可通过**QueryPriceEntityList**接口查询定价因子code和定价因子值。
     */
    "PriceFactorConditionMap"?: any;
    /**
     * 语言，不填时默认为zh(中文)
     * @example `en`
     */
    "Lang"?: string;
}
