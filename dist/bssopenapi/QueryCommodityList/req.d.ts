export interface QueryCommodityListRequest {
    /**
     * 产品代码。
     * @example `ecs`
     */
    "ProductCode": string;
    /**
     * 语言，不填时默认为zh(中文)
     * @example `en`
     */
    "Lang"?: string;
}
