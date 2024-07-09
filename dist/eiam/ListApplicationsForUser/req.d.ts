export interface ListApplicationsForUserRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 列表页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 列表大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 应用ID列表，单次操作最多支持100个应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationIds"?: string[];
    /**
     * 账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserId": string;
    /**
     * 查询模式，默认为 **OnlyDirect** ，取值可选范围：
     * - OnlyDirect：代表只查询账户的直属权限，即直接分配给账户的应用。
     * - IncludeInherit：代表既查询账户的直属权限，也查询账户的继承权限。继承权限是指账户通过其父级组织（或者其隶属的组）继承的权限。
     * @example `OnlyDirect`
     */
    "QueryMode"?: string;
}
