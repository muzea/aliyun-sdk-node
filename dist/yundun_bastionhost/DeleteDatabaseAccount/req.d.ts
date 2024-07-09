export interface DeleteDatabaseAccountRequest {
    /**
     * 指定要删除的数据库账户所在堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要删除的数据库账户所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要删除的数据库账户ID。
     * > 您可以调用[ListDatabaseAccounts](~~2758839~~)接口获取该参数。
     * @example `9`
     */
    "DatabaseAccountId": string;
}
