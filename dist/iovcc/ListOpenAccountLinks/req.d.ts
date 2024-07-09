export interface ListOpenAccountLinksRequest {
    /**
     * 项目ID。
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 云端用户ID。
     * 和**idToken+Idp**不能同时为空。
     * @example `identityidtest`
     */
    "IdentityId"?: string;
    /**
     * 账号认证提供商。
     * **IdentityId+Idp**不能同时为空。
     * @example `ALIOS`
     */
    "Idp"?: string;
    /**
     * 三方账户平台ID。
     * @example `12345`
     */
    "OpenId"?: string;
}
