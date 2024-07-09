export interface CreatePhysicalConnectionOccupancyOrderResponse {
    /**
     * 请求ID。
     * @example `9B9300FE-11E2-4E3B-949C-BED3B44DD26D`
     */
    RequestId: string;
    /**
     * 数据的详细信息。
     */
    Data: {
        /**
         * 已下订单的ID。
         * @example `50187055895****`
         */
        OrderId: string;
    };
}
