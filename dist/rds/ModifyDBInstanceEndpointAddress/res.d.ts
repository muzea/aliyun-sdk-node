export interface ModifyDBInstanceEndpointAddressResponse {
    /**
     * 返回字段列表。
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
     * @example `90496720-2319-42A8-87CD-FCE4DF95EBED`
     */
    RequestId: string;
}
