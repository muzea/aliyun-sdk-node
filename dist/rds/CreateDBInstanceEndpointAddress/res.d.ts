export interface CreateDBInstanceEndpointAddressResponse {
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
        /**
         * 外网连接地址。
         * @example `rm-****.mysql.rds.aliyuncs.com`
         */
        ConnectionString: string;
    };
    /**
     * 请求ID。
     * @example `08A3B71B-FE08-4B03-974F-CC7EA6DB1828`
     */
    RequestId: string;
}
