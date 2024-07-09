export interface RenewReservedInstancesResponse {
    /**
     * 请求ID。
     * @example `8C314443-AF0D-4766-9562-C83B7F1****`
     */
    RequestId: string;
    ReservedInstanceIdSets: {
        /**
         * 预留实例券ID列表。
         */
        ReservedInstanceId: string[];
    };
    /**
     * 订单ID。
     * @example `2023912123****`
     */
    OrderId: string;
}
