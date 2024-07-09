export interface ModifyDBInstanceSSLRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 需要创建或更新服务器证书的内网或外网连接地址。
     * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
     */
    "ConnectionString": string;
    /**
     * 开启或关闭SSL，取值：
     * * **1**：开启
     * * **0**：关闭
     * @example `1`
     */
    "SSLEnabled"?: number;
    /**
     * 该参数仅RDS PostgreSQL云盘版支持，表示证书类型，SSLEnabled取值为**1**时，此参数默认取值为**aliyun**。
     * 取值：
     * - **aliyun**：使用云证书
     * - **custom**：使用自定义证书
     * @example `aliyun`
     */
    "CAType"?: string;
    /**
     * 该参数仅RDS PostgreSQL云盘版支持，表示服务器证书内容，CAType取值为**custom**时，此参数必须配置。
     * @example `-----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----`
     */
    "ServerCert"?: string;
    /**
     * 该参数仅RDS PostgreSQL云盘版支持，表示服务器证书私钥，CAType取值为**custom**时，此参数必须配置。
     * @example `-----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----`
     */
    "ServerKey"?: string;
    /**
     * 该参数仅RDS PostgreSQL云盘版支持，表示是否启用客户端授权机构公钥，取值：
     * - **1**：启用
     * - **0**：关闭
     * @example `1`
     */
    "ClientCAEnabled"?: number;
    /**
     * 该参数仅RDS PostgreSQL云盘版支持，表示客户端证书授权机构公钥，ClientCAEbabled取值为**1**时，此参数必需配置。
     * @example `-----BEGIN CERTIFICATE-----MIID*****viXk=-----END CERTIFICATE-----`
     */
    "ClientCACert"?: string;
    /**
     * 该参数仅RDS PostgreSQL云盘版支持，表示是否启用客户端吊销证书，仅当客户端证书授权机构公钥启用时才允许配置，取值：
     * - **1**：启用
     * - **0**：关闭
     * @example `1`
     */
    "ClientCrlEnabled"?: number;
    /**
     * 该参数仅RDS PostgreSQL云盘版支持，表示客户端吊销证书文件，ClientCrlEnabled取值为**1**时，此参数必须配置。
     * @example `-----BEGIN X509 CRL-----MIIB****19mg==-----END X509 CRL-----`
     */
    "ClientCertRevocationList"?: string;
    /**
     * 该参数仅RDS PostgreSQL云盘版支持，表示认证方法，仅当客户端证书授权机构公钥启用时才允许设置，取值：
     * - **cert**
     * - **prefer**
     * - **verify-ca**
     * - **verify-full**（RDS PostgreSQL 12以上支持）
     * @example `cert`
     */
    "ACL"?: string;
    /**
     * 该参数仅RDS PostgreSQL云盘版支持，表示replication权限的认证方法，仅当客户端证书授权机构公钥启用时才允许设置，取值：
     * - **cert**
     * - **prefer**
     * - **verify-ca**
     * - **verify-full**（RDS PostgreSQL 12以上支持）
     * @example `cert`
     */
    "ReplicationACL"?: string;
    /**
     * 该参数仅RDS SQL Server实例支持，表示实例是否开启强制SSL加密。更多详情，请参见[设置SSL加密](~~95715~~)。取值：
     * - **1**：开启。
     * - **0**：未开启。
     * @example `1`
     */
    "ForceEncryption"?: string;
    /**
     * 该参数仅RDS SQL Server实例支持，表示为实例指定最低LTS版本号，当前支持1.0、1.1、1.2。更多详情，请参见[设置SSL加密](~~95715~~)。
     * @example `1.1`
     */
    "TlsVersion"?: string;
    /**
     * 用户自定义证书，自定义证书为`pfx`格式。
     * - 公网地址：`oss-<地域ID>.aliyuncs.com:<Bucket名称>:<证书文件名称（带文件后缀）>`
     * - 内网地址：`oss-<地域ID>-internal.aliyuncs.com:<Bucket名称>:<证书文件名称（带文件后缀）>`
     * @example `oss-cn-beijing-internal.aliyuncs.com:zhttest:test.pfx`
     */
    "Certificate"?: string;
    /**
     * 证书密码。
     * @example `zht123456`
     */
    "PassWord"?: string;
}
