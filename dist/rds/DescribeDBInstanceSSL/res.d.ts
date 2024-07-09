export interface DescribeDBInstanceSSLResponse {
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示服务器证书内容。
     * @example `-----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----`
     */
    ServerCert: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示客户端证书授权机构公钥有效期。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间），暂不支持。
     * @example `-`
     */
    ClientCACertExpireTime: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示需要更新的服务器证书列表。
     * @example `-`
     */
    RequireUpdateItem: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示签发服务器证书的CA证书URL。
     * @example `-`
     */
    ServerCAUrl: string;
    /**
     * 是否需要更新。
     * - MySQL或SQL Server时取值：
     *     - **No**：不需要更新
     *     - **Yes**：需要更新
     * - PostgreSQL时取值：
     *     - **0**：不需要更新
     *     - **1**：需要更新
     * @example `Yes`
     */
    RequireUpdate: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示客户端吊销证书文件。
     * @example `-----BEGIN X509 CRL-----MIIB****19mg==-----END X509 CRL-----`
     */
    ClientCertRevocationList: string;
    /**
     * SSL证书有效期。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2022-10-11T08:16:43Z`
     */
    SSLExpireTime: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示服务器证书类型，取值：
     * - **aliyun**：使用云证书
     * - **custom**：使用自定义证书
     * @example `aliyun`
     */
    CAType: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示服务器证书创建时间，当配置为使用云证书时有效。
     * @example `-`
     */
    SSLCreateTime: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示replication权限的认证方法。取值：
     * - **cert**
     * - **prefer**
     * - **verify-ca**
     * - **verify-full**（RDS PostgreSQL 12以上支持）
     * @example `cert`
     */
    ReplicationACL: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示认证方法，取值：
     * - **cert**
     * - **prefer**
     * - **verify-ca**
     * - **verify-full**（RDS PostgreSQL 12以上支持）
     * @example `cert`
     */
    ACL: string;
    /**
     * 请求ID。
     * @example `7705151C-E242-55AF-9929-2A3C39D979D2`
     */
    RequestId: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示当前SSL链路配置状态。取值：
     * - **success**：成功
     * - **setting**：设置中
     * - **failed**：失败
     * @example `setting`
     */
    LastModifyStatus: string;
    /**
     * SSL状态。
     * - MySQL或SQL Server时取值：
     *   - **Yes**：已开启
     *   - **No**：未开启
     * - PostgreSQL时取值：
     *   - **on**：已开启
     *   - **off**：未开启
     * @example `Yes`
     */
    SSLEnabled: string;
    /**
     * 受SSL保护的连接地址。
     * @example `rm-bp162dfr55g47****.mysql.rds.aliyuncs.com`
     */
    ConnectionString: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示需要更新证书的原因。
     * @example `-`
     */
    RequireUpdateReason: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示客户端证书授权机构公钥。
     * @example `-----BEGIN CERTIFICATE-----MIID*****viXk=-----END CERTIFICATE-----`
     */
    ClientCACert: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示服务器证书私钥。
     * @example `-----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----`
     */
    ServerKey: string;
    /**
     * 该参数仅适用于RDS PostgreSQL云盘版实例，表示当前SSL链路配置状态对应的原因。
     * @example `Modify DB Instance SSL Config.`
     */
    ModifyStatusReason: string;
    /**
     * 该参数仅适用于RDS SQL Server实例，表示实例是否已开启强制SSL加密。更多详情，请参见[设置SSL加密](~~95715~~)。
     * - **1**：开启。
     * - **0**：未开启。
     * @example `1`
     */
    ForceEncryption: string;
    /**
     * 该参数仅适用于RDS SQL Server实例，表示实例指定的最低LTS版本号，当前支持1.0、1.1、1.2。更多详情，请参见[设置SSL加密](~~95715~~)。
     * @example `1.1`
     */
    TlsVersion: string;
}
