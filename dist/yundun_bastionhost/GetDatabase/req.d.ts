export interface GetDatabaseRequest {
    /**
     * 指定要查询的数据库所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-wwo36qbv601`
     */
    "InstanceId": string;
    /**
     * 指定要查询的数据库所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要查询的数据库ID。
     * > 您可以调用[ListDatabases ](~~2758822~~)接口获取该参数。
     * @example `21`
     */
    "DatabaseId": string;
}
