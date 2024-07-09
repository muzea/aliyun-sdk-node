export interface DescribeBindersRequest {
    /**
     * 商品条码
     * @example `690560583****`
     */
    "ItemBarCode"?: string;
    /**
     * 价签条码，使用门店ID+价签条码查询时，不用填写货架号和层号。
     * @example `18bc5a63****`
     */
    "EslBarCode"?: string;
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 商品名称。
     * @example `纯牛奶`
     */
    "ItemTitle"?: string;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 系统保留字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
}
