export interface DescribeOpenAccountRequest {
    /**
     * 项目ID。
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 云端用户ID。
     * @example `identityidtest`
     */
    "IdentityId"?: string;
    /**
     * 账号认证提供商。
     * 与**IdentityId**和（**IdToken+Idp**）不能同时为空。
     * @example `ALIOS`
     */
    "Idp"?: string;
    /**
     * 账号Token。
     * 与**IdentityId**和（**IdToken+Idp**）不能同时为空。
     * @example `idtokentest`
     */
    "IdToken"?: string;
    /**
     * 三方账户平台ID。
     * @example `12345`
     */
    "OpenId"?: string;
}
