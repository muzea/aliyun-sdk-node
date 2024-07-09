export interface DetachDatabaseAccountsFromUserGroupRequest {
    /**
     * 堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-7mz2v120f0y`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要移除授权数据库和数据库账户的用户组ID。
     * > 您可以调用[ListUserGroups](~~204509~~)接口获取该参数。
     * @example `1`
     */
    "UserGroupId": string;
    /**
     * 要移除授权的数据库信息。
     */
    "Databases"?: {
        /**
         * 指定要移除授权的数据库实例ID。
         * @example `4`
         */
        DatabaseId: string;
        /**
         * 要移除授权的数据库账户ID。
         */
        DatabaseAccountIds: string[];
    }[];
}
