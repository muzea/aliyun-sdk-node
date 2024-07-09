export interface PurchaseStorageCapacityUnitResponse {
    /**
     * 订单ID。
     * @example `204135153880****`
     */
    OrderId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    StorageCapacityUnitIds: {
        /**
         * SCU ID。
         */
        StorageCapacityUnitId: string[];
    };
}
