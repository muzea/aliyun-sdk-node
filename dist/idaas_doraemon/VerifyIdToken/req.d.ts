export interface VerifyIdTokenRequest {
    /**
     * jwtIdToken
     * @example `eyJraWQiOiIzNj`
     */
    "JwtIdToken"?: string;
    /**
     * 应用外部Id
     * @example `webauth_demo`
     */
    "ApplicationExternalId"?: string;
}
