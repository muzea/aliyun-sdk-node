export interface DescribeDBInstanceSSLResponse {
    /**
     * SSL证书的过期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2020-03-11T02:28:25Z`
     */
    SSLExpiredTime: string;
    /**
     * SSL功能的状态。
     * - **Open**：SSL功能已开启。
     * - **Closed**：SSL功能已关闭。
     * @example `Open`
     */
    SSLStatus: string;
    /**
     * 请求ID。
     * @example `36BB1BC2-789C-4BBA-A519-C5B388E4B0D4`
     */
    RequestId: string;
    /**
     * SSL证书名称。
     * @example `dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com`
     */
    CertCommonName: string;
}
