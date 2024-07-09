export interface CreateVirtualWareHouseResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 计算组ID。
         * @example `vw-bp1w2728d535t****`
         */
        VirtualWareHouseId: string;
        /**
         * 订单ID。
         * @example `21155221661****`
         */
        OrderId: number;
    };
    /**
     * 请求ID。
     * @example `2FED790E-FB61-4721-8C1C-07C627FA5A19`
     */
    RequestId: string;
}
