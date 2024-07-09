export interface CreateClusterResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 集群ID。
         * @example `cc-bp123bm6vy801****`
         */
        DBClusterId: string;
        /**
         * 计算组ID。
         * @example `vw-uf6a499c0m3w5****`
         */
        VirtualWareHouseId: string;
        /**
         * 订单ID。
         * @example `21154955706****`
         */
        OrderId: number;
    };
    /**
     * 请求ID。
     * @example `F5178C10-1407-4987-9133-DE4DC9119F75`
     */
    RequestId: string;
}
