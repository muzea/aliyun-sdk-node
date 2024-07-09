export interface ModifyDBInstanceConnectionStringResponse {
    /**
     * 接口返回信息，一般为错误信息
     * @example `success`
     */
    Message: string;
    /**
     * 新的地址链接串信息
     */
    Data: {
        /**
         * 地址链接串
         * @example `test2.polarx.huhehaote.rds.aliyuncs.com`
         */
        ConnectionString: string;
        /**
         * 实例Id
         * @example `pxc-unrf5ssig0ecg8`
         */
        DBInstanceName: string;
        /**
         * 地址链接串的网络类型
         * @example `1`
         */
        DBInstanceNetType: string;
        /**
         * 地址端口
         * @example `3300`
         */
        Port: string;
    };
    /**
     * 接口返回Code
     * @example `200`
     */
    Code: number;
    /**
     * 请求RequestId，唯一标识
     * @example `c3cf535c-a585-11ea-8263-00163e04d3a7`
     */
    RequestId: string;
}
