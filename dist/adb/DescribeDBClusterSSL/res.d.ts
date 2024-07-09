export interface DescribeDBClusterSSLResponse {
    /**
     * 请求ID。
     * @example `348303D8-6F42-5141-9B00-A6EECA1E37B6`
     */
    RequestId: string;
    /**
     * SSL 证书有效期。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 时间）。
     * @example `2022-10-11T08:16:43Z`
     */
    ExpireTime: string;
    /**
     * 受SSL保护的连接地址。
     * @example `am-d7oualxo05x4o5be872***.ads.aliyuncs.com`
     */
    ConnectionString: string;
    /**
     * 是否开启SSL。
     * 取值：
     * - true：开启。
     * - false：关闭。
     * @example `true`
     */
    SSLEnabled: boolean;
}
