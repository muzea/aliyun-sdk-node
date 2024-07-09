export interface RefundPayAsYouGoOrderRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 已购买按量付费商品的订单ID。可通过调用ListEffectiveOrders接口获取该参数的值。
     * @example `2190037****`
     */
    "OrderId": string;
    /**
     * 售卖订单的实例ID。
     * @example `27****`
     */
    "InstanceId": string;
}
