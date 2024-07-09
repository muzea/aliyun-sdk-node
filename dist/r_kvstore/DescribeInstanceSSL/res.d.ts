export interface DescribeInstanceSSLResponse {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    InstanceId: string;
    /**
     * 请求ID。
     * @example `02260F96-913E-4655-9BA5-A3651CAF****`
     */
    RequestId: string;
    /**
     * TLS（SSL）加密功能的状态：
     * * **Enable**：已开启。
     * * **Disable**：未开启。
     * @example `Enable`
     */
    SSLEnabled: string;
    /**
     * CA证书的过期时间。
     * @example `2020-08-05T09:05:53Z`
     */
    SSLExpiredTime: string;
    /**
     * CA证书的公共名，默认值为实例的内网连接地址。
     * @example `r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com`
     */
    CertCommonName: string;
    /**
     * CA证书的下载链接。
     * @example `https://apsaradb-public.oss-ap-sout****-1.aliy****.com/ApsaraDB-CA-Chain.zip`
     */
    CertDownloadURL: string;
}
