export interface CreateInstancesResponse {
    /**
     * 订单ID。
     * @example `20905403119****`
     */
    OrderId: string;
    /**
     * 请求ID。
     * @example `561AFBF1-BE20-44DB-9BD1-6988B53E****`
     */
    RequestId: string;
    InstanceIds: {
        /**
         * 本次创建的实例ID的列表。
         */
        InstanceId: string[];
    };
}
