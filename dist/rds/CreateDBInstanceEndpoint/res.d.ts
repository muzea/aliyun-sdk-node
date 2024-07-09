export interface CreateDBInstanceEndpointResponse {
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
        /**
         * 内网连接地址。
         * @example `rm-****.mysql.rds.aliyuncs.com`
         */
        ConnectionString: string;
    };
    /**
     * 请求ID。
     * @example `C8E88DED-533F-4B3C-9207-731FBF394CCA`
     */
    RequestId: string;
}
