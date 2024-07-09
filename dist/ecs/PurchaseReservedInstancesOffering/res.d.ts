export interface PurchaseReservedInstancesOfferingResponse {
    /**
     * 请求ID。
     * @example `8C314443-AF0D-4766-9562-C83B7F1A3C8B`
     */
    RequestId: string;
    ReservedInstanceIdSets: {
        /**
         * 预留实例券ID列表。
         */
        ReservedInstanceId: string[];
    };
}
