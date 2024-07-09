export interface DescribeRdsCommodityRequest {
    /**
     * 实例ID。
     * @example `drds***********`
     */
    "DrdsInstanceId": string;
    /**
     * 商品代码。
     * @example `drdsPost`
     */
    "CommodityCode": string;
    /**
     * 订单类型。
     * @example `1`
     */
    "OrderType"?: string;
}
