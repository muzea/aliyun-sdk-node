export interface DescribeDBInstanceSSLResponse {
    /**
     * 请求ID。
     * @example `C458B1E8-1683-3645-B154-6BA32080EEA`
     */
    RequestId: string;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 实例是否开启SSL：
         * - **true**：开启
         * - **false**： 关闭
         * @example `false`
         */
        SSLEnabled: boolean;
        /**
         * 证书过期时间。
         * @example `2022-11-04T09:39:07Z`
         */
        SSLExpiredTime: string;
        /**
         * 证书绑定域名。
         * @example `pxc-sddddddcym7g7w****.polarx.singapore.rds.aliyuncs.com`
         */
        CertCommonName: string;
    };
}
