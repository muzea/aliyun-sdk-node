export interface ModifyDBInstanceTDERequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * TDE状态，取值：
     * - **Enabled**
     * - **Disabled**
     * @example `Enabled`
     */
    "TDEStatus": string;
    /**
     * 想要开启TDE的数据库名称，可以一次输入多个，以英文逗号（,）分隔，最多传入50个。
     * > 此参数仅SQL Server 2019标准版和SQL Server企业版实例可用（必传）。
     * @example `testDB`
     */
    "DBName"?: string;
    /**
     * 自定义密钥ID。
     * >仅MySQL或PostgreSQL实例可以传入此参数。
     * @example `749c1df7-****-****-****-****`
     */
    "EncryptionKey"?: string;
    /**
     * 角色的全局资源描述符，用来指定具体角色。详情请参见[RAM角色概览](~~93689~~)。
     * >仅MySQL和PostgreSQL实例可以传入此参数。
     * @example `acs:ram::1406926****:role/aliyunrdsinstanceencryptiondefaultrole`
     */
    "RoleArn"?: string;
    /**
     * 证书文件。
     * 格式：
     * - 公网地址：`oss-<地域ID>.aliyuncs.com:<Bucket名称>:<证书文件名称（带文件后缀）>`
     * - 内网地址：`oss-<地域ID>-internal.aliyuncs.com:<Bucket名称>:<证书文件名称（带文件后缀）>`
     * > - 此参数仅SQL Server 2019标准版和SQL Server企业版实例可用。
     * > - 可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
     * @example `oss-ap-southeast-1.aliyuncs.com:****:key.cer`
     */
    "Certificate"?: string;
    /**
     * 私钥文件。
     * 格式：
     * - 公网地址：`oss-<地域ID>.aliyuncs.com:<Bucket名称>:<私钥文件名称（带文件后缀）>`
     * - 内网地址：`oss-<地域ID>-internal.aliyuncs.com:<Bucket名称>:<私钥文件名称（带文件后缀）>`
     * > - 此参数仅SQL Server 2019标准版和SQL Server企业版实例可用。
     * > - 可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
     * @example `oss-ap-southeast-1.aliyuncs.com:****:key.pvk`
     */
    "PrivateKey"?: string;
    /**
     * 证书密码。
     * >此参数仅SQL Server 2019标准版和SQL Server企业版实例可用。
     * @example `1qaz@WSX`
     */
    "PassWord"?: string;
    /**
     * 是否更换密钥。
     * 取值范围：
     * - **true**：更换密钥
     * - **false**：不更换密钥
     * 默认值：**false**
     * > 当前仅RDS PostgreSQL实例适用。
     * @example `false`
     */
    "IsRotate"?: boolean;
}
