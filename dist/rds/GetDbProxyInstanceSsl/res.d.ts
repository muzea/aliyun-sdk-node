export interface GetDbProxyInstanceSslResponse {
    /**
     * 请求ID。
     * @example `D330E60C-8AAA-4D63-8F64-5B78F4692F98`
     */
    RequestId: string;
    DbProxyCertListItems: {
        /**
         * SSL加密信息列表。
         */
        DbProxyCertListItems: {
            /**
             * 实例ID。
             * @example `rm-t4n3a****`
             */
            DbInstanceName: string;
            /**
             * 代理连接地址名称。
             * @example `bu****`
             */
            EndpointName: string;
            /**
             * 默认代理连接地址终端标识。当前唯一取值：**RWSplit**。
             * @example `RWSplit`
             */
            EndpointType: string;
            /**
             * 证书过期时间。
             * @example `2021-12-16T08:43:20Z`
             */
            SslExpiredTime: string;
            /**
             * 开启SSL加密的代理连接地址。
             * @example `test1234.rwlb.rds.aliyuncs.com`
             */
            CertCommonName: string;
        }[];
    };
}
