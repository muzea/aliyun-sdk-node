export interface DescribeImagePriceRequest {
    /**
     * 镜像ID。
     * @example `m-bp198jigq7l1ga11****`
     */
    "ImageId": string;
    /**
     * 购买时长的单位。取值范围：
     * - Day：日
     * - Month：月
     * - Year：年
     * 默认值：Day
     * @example `Day`
     */
    "PriceUnit": string;
    /**
     * 商品规格码。当前仅支持：package（预付费）
     * @example `package`
     */
    "SkuCode": string;
    /**
     * 购买时长。取值范围：
     * - 当参数PriceUnit取值为Day时：1~30
     * - 当参数PriceUnit取值为Month时：1~9
     * - 当参数PriceUnit取值为Year时：1~3
     * 默认值：1
     * @example `1`
     */
    "Period": number;
    /**
     * 购买数量。取值范围：1~1000
     * 默认值：1
     * @example `2`
     */
    "Amount": number;
    /**
     * 订单类型，仅支持设置为商品购买。取值：INSTANCE-BUY
     * @example `INSTANCE-BUY`
     */
    "OrderType"?: string;
}
