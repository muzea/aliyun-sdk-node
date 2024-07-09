export interface ListOrdersRequest {
    /**
     * 5G高速上云实例id。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 订单状态列表。
     */
    "Statuses"?: string[];
    /**
     * 订单id列表。
     */
    "OrderIds"?: string[];
    /**
     * 订单类型，取值：
     * - **NewBuy**: 新购
     * - **ScaleOut**: 扩容
     * - **ScaleIn**: 缩容
     * - **BuyCard**: 购卡
     * - **Renewal**: 续期
     * @example `NewBuy`
     */
    "OrderAction"?: string;
    /**
     * 上一页的查询返回的值，首页查询不传值。
     * @example `iou001238joojjaere`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
