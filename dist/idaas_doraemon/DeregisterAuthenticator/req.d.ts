export interface DeregisterAuthenticatorRequest {
    /**
     * 应用外部Id
     * @example `11122223333`
     */
    "ApplicationExternalId": string;
    /**
     * 用户id
     * @example `user-11122223333`
     */
    "UserId": string;
    /**
     * 认证器uuid
     * @example `a00712a4e56196755059356c290793031xHdUrCPXUS`
     */
    "AuthenticatorUuid": string;
}
