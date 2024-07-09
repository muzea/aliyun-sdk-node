export interface DeleteDBInstanceEndpointAddressResponse {
    /**
     * 返回数据列表。
     */
    Data: {
        /**
         * 实例ID。
         * @example `rm-****`
         */
        DBInstanceName: string;
        /**
         * 实例的Endpoint ID。
         * @example `ep-****`
         */
        DBInstanceEndpointId: string;
    };
    /**
     * 请求ID。
     * @example `F2911788-25E8-42E5-A3A3-1B38D263F01E`
     */
    RequestId: string;
}
