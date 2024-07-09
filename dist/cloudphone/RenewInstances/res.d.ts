export interface RenewInstancesResponse {
    /**
     * 订单ID
     * @example `10000`
     */
    OrderId: string;
    /**
     * 请求ID
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    InstanceIds: {
        /**
         * 续费实例列表
         */
        InstanceId: string[];
    };
}
