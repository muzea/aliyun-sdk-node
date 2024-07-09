export interface DeleteDatabaseRequest {
    /**
     * 指定要删除的数据库实例所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-78v1ghxxxxx`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要删除的数据库实例ID。
     * > 您可以调用[ListDatabases ](~~2758822~~)接口获取该参数。
     * @example `11`
     */
    "DatabaseId": string;
}
