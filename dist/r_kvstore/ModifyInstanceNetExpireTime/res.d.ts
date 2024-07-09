export interface ModifyInstanceNetExpireTimeResponse {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    InstanceId: string;
    /**
     * 请求ID。
     * @example `9C4AF387-1EA3-4C84-8013-3F6B973EDDF5`
     */
    RequestId: string;
    NetInfoItems: {
        /**
         * 经典网络连接地址延长时间的详情。
         */
        NetInfoItem: {
            /**
             * Redis服务端口。
             * @example `6379`
             */
            Port: string;
            /**
             * 网络类型，返回值为**Classic**（经典网络）。
             * @example `Classic`
             */
            DBInstanceNetType: string;
            /**
             * 经典网络连接地址。
             * @example `r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 经典网络地址的过期时间。
             * @example `2019-08-01T09:29:18Z`
             */
            ExpiredTime: string;
            /**
             * 实例在经典网络中的IP地址。
             * @example `100.118.142.***`
             */
            IPAddress: string;
        }[];
    };
}
