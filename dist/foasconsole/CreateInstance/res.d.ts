export interface CreateInstanceResponse {
    /**
     * 请求id。
     * @example `67F33190-946B-1105-B6A1-E2DF0426DD51`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 订单信息。
     */
    OrderInfo: {
        /**
         * 订单id。
         * @example `210406354694567`
         */
        OrderId: number;
        /**
         * 订单实例id。
         * @example `f-cn-zvp2q0zik06`
         */
        InstanceId: string;
    };
}
