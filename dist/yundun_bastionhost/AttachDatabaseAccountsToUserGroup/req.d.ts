export interface AttachDatabaseAccountsToUserGroupRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-zvp282aly06`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要添加授权的用户组ID。
     * @example `2`
     */
    "UserGroupId": string;
    /**
     * 数据库对象数组。
     * >最大数据库数10个，数据库账号数10个。允许不传账号，不传账号则代表授权到数据库。
     */
    "Databases"?: {
        /**
         * 要授权的数据库实例 ID。
         * @example `58`
         */
        DatabaseId: string;
        /**
         * 数据库账户ID数组。
         */
        DatabaseAccountIds: string[];
    }[];
}
