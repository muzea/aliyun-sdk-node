export interface ModifyDatabaseAccountRequest {
    /**
     * 指定要修改的数据库账户所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-zpr2zyqx603`
     */
    "InstanceId": string;
    /**
     * 指定要修改的数据库账户所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要修改的数据库账户ID。
     * > 您可以调用[ListDatabaseAccounts](~~2758839~~)接口获取该参数。
     * @example `2`
     */
    "DatabaseAccountId": string;
    /**
     * 指定修改后的数据库账户密码。
     * @example `14SZ!******`
     */
    "Password"?: string;
    /**
     * 指定修改后的数据库账户名称，最多支持128字符。
     * @example `aaa`
     */
    "DatabaseAccountName"?: string;
    /**
     * 指定修改后的数据库名。当DatabaseId对应的Database为Postgres和Oracle时，DatabaseSchema为必填。
     * @example `orcl`
     */
    "DatabaseSchema"?: string;
}
