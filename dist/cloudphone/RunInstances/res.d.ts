export interface RunInstancesResponse {
    /**
     * 请求ID
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 订单号
     * @example `9611111323245`
     */
    OrderId: string;
    /**
     * 价格
     * @example `133.32`
     */
    TradePrice: number;
    InstanceIds: {
        /**
         * 实例ID列表
         */
        InstanceId: string[];
    };
}
