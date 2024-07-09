export interface CreateOrderResponse {
    /**
     * 订单 ID
     * @example `202********0117`
     */
    OrderId: string;
    /**
     * 请求 ID
     * @example `4ca591b5-bc30-4fa7-aeaa-c4d0ec5d24ed`
     */
    RequestId: string;
    InstanceIds: {
        InstanceId: string[];
    };
}
