export interface AttachDatabaseAccountsToUserRequest {
    /**
     * 指定要授权数据库和数据库账户的用户所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-wwo36qbv601`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要授权的用户ID。
     * > 您可以调用[ListUsers](~~204522~~)接口获取该参数。
     * @example `1`
     */
    "UserId": string;
    /**
     * 数据库对象数组。
     * > 最大数据库数10个，数据库账号数10个。允许不传账号，不传账号则代表授权到数据库。
     */
    "Databases"?: {
        /**
         * 要授权的数据库实例 ID。
         * @example `22`
         */
        DatabaseId: string;
        /**
         * 数据库账户ID数组。
         */
        DatabaseAccountIds: string[];
    }[];
}
