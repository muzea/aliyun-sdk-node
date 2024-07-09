export interface GetDatabaseAccountRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-i7m2d7zrw11`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 要查询的数据库账户ID。
     * > 您可以调用[ListDatabaseAccounts](~~2758839~~)接口获取该参数。
     * @example `9`
     */
    "DatabaseAccountId": string;
}
