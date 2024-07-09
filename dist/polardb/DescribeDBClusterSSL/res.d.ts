export interface DescribeDBClusterSSLResponse {
    /**
     * 请求ID。
     * @example `C890995A-CF06-4F4D-8DB8-DD26C2******`
     */
    RequestId: string;
    /**
     * 是否开启SSL证书自动轮转。取值：
     * - **Enable**：开启
     * - **Disable**：关闭
     * > 该参数仅PolarDB MySQL版支持。
     * @example `Enable`
     */
    SSLAutoRotate: string;
    /**
     * SSL链路信息列表。
     */
    Items: {
        /**
         * SSL证书有效期。格式：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
         * @example `2021-11-13T07:14:22Z`
         */
        SSLExpireTime: string;
        /**
         * 是否开启SSL加密。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * @example `Enabled`
         */
        SSLEnabled: string;
        /**
         * SSL链路地址。
         * @example `pc-************.mysql.polardb.rds.aliyuncs.com`
         */
        SSLConnectionString: string;
        /**
         * 集群地址ID。
         * @example `pe-************`
         */
        DBEndpointId: string;
    }[];
}
