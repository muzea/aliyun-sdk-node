export interface UpdateAuthenticatorAttributeRequest {
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
     * 认证器名字
     * @example `TOTP-DefaultName`
     */
    "AuthenticatorName": string;
    /**
     * 认证器uuid
     * @example `c810731ad3af06e45171395abf19cf9cb00E7i97PhE`
     */
    "AuthenticatorUuid": string;
}
