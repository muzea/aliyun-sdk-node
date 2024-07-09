export interface RevokeApplicationFromUsersRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationId": string;
    /**
     * 账户ID列表，单次操作最多支持100个账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserIds": string[];
}
