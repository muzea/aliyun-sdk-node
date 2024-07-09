export interface ListUsersRequest {
    /**
     * 应用外部Id
     * @example `11122223333`
     */
    "ApplicationExternalId": string;
    /**
     * 用户id
     * @example `user-11122223333`
     */
    "UserId"?: string;
}
