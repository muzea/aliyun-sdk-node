export interface DescribeDBInstanceSSLResponse {
    /**
     * SSL证书过期时间。
     * @example `2023-08-05T09:05:53Z`
     */
    SSLExpiredTime: string;
    /**
     * 请求ID。
     * @example `D5FF8636-37F6-4CE0-8002-F8734C62C686`
     */
    RequestId: string;
    /**
     * 是否开启SSL加密，取值如下：
     * - **true**：已开启SSL加密。
     * - **false**：未开启SSL加密。
     * @example `true`
     */
    SSLEnabled: boolean;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
    /**
     * SSL证书信息。
     * @example `*.gpdbmaster.xxx.rds.aliyuncs.com`
     */
    CertCommonName: string;
    /**
     * 实例名。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceName: string;
}
