export interface ListUsersForApplicationRequest {
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
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationId": string;
    /**
     * 账户ID列表，单次操作最多支持100个账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserIds"?: string[];
}
