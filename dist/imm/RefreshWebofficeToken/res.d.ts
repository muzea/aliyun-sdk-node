export interface RefreshWebofficeTokenResponse {
    /**
     * 请求ID。
     * @example `501339F9-4B70-0CE2-AB8C-866C********`
     */
    RequestId: string;
    /**
     * Weboffice 刷新凭证。
     * @example `72a52ab3702a4123ab5594671a********`
     */
    RefreshToken: string;
    /**
     * Weboffice 访问凭证。
     * @example `4996466c690a4902846ce00f96********`
     */
    AccessToken: string;
    /**
     * 刷新凭证的过期时间。过期时间 1 天。
     * @example `2021-09-01T12:37:28.950065359Z`
     */
    RefreshTokenExpiredTime: string;
    /**
     * 访问凭证的过期时间。过期时间30分钟。
     * @example `2021-08-31T13:07:28.950065359Z`
     */
    AccessTokenExpiredTime: string;
}
