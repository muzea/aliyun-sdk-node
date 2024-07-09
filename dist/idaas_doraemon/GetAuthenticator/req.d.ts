export interface GetAuthenticatorRequest {
    /**
     * 应用外部Id
     * @example `11122223333`
     */
    "ApplicationExternalId": string;
    /**
     * 用户ID
     * @example `1`
     */
    "UserId": string;
    /**
     * 认证器uuid
     * @example `1331311`
     */
    "AuthenticatorUuid": string;
}
