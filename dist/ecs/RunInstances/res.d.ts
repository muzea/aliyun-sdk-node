export interface RunInstancesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 订单ID。该参数只有创建包年包月ECS实例（请求参数`InstanceChargeType=PrePaid`）时有返回值。
     * @example `123456****`
     */
    OrderId: string;
    /**
     * 订单成交价。
     * @example `0.165`
     */
    TradePrice: number;
    InstanceIdSets: {
        /**
         * 实例ID（`InstanceIdSet`）列表。
         */
        InstanceIdSet: string[];
    };
}
