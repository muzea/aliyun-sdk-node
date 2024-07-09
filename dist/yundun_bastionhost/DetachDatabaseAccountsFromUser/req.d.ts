export interface DetachDatabaseAccountsFromUserRequest {
    /**
     * 堡垒机的实例ID。
     * > 可通过调用DescribeInstances接口获取堡垒机实例ID。
     * @example `bastionhost-cn-pe335ipfk01`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 指定要移除授权数据库和数据库账户的用户ID。
     * > 您可以调用[ListUsers](~~204522~~)接口获取该参数。
     * @example `1`
     */
    "UserId": string;
    /**
     * 数据库实例列表。
     */
    "Databases"?: {
        /**
         * 指定要移除授权的数据库实例ID。
         * @example `8`
         */
        DatabaseId: string;
        /**
         * 数据库账户ID数组。
         */
        DatabaseAccountIds: string[];
    }[];
}
