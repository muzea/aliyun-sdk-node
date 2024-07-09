export interface CreateDatabaseAccountRequest {
    /**
     * 要新建数据库账户的堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-5yd34ol020a`
     */
    "InstanceId": string;
    /**
     * 要新建数据库账户的堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 指定要创建账户的数据库实例ID。
     * > 您可以调用[ListDatabaseAccounts](~~2758839~~)接口获取该参数。
     * @example `3`
     */
    "DatabaseId": string;
    /**
     * 指定新创建数据库账户的名称。最多支持128字符。
     * @example `root`
     */
    "DatabaseAccountName": string;
    /**
     * 指定新建数据库账户的密码。
     * @example `MCQ******`
     */
    "Password"?: string;
    /**
     * 数据库名。当DatabaseId对应的Database为Postgres和Oracle时，DatabaseSchema为必填。
     * @example `orcl`
     */
    "DatabaseSchema"?: string;
    /**
     * 登录属性，Oracle类型数据库必须指定，取值：
     * - SERVICENAME
     * - SID
     * @example `SID`
     */
    "LoginAttribute"?: string;
}
