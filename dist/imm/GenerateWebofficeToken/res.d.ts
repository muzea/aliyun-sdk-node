export interface GenerateWebofficeTokenResponse {
    /**
     * 请求ID。
     * @example `1759315A-CB33-0A75-A72B-62D7********`
     */
    RequestId: string;
    /**
     * Weboffice 入口 URL。在线预览或者编辑文档。
     * > 无法通过浏览器直接打开，需要配合Weboffice JS-SDK，和访问凭证（AccessToken）一起才可以预览或编辑文档。更多信息，请参见[快速入门](~~468066~~)。
     * @example `https://office-cn-shanghai.imm.aliyuncs.com/office/s/dd221b2cdb44fb66e9070d1d70a8b9bbb6d6fff7?_w_tokentype=1`
     */
    WebofficeURL: string;
    /**
     * Weboffice 访问凭证。
     * @example `2d73dd5d87524c5e8a194c3eb5********`
     */
    AccessToken: string;
    /**
     * Weboffice 刷新凭证。
     * @example `e374995ec532432bb678074d36********`
     */
    RefreshToken: string;
    /**
     * 访问凭证的过期时间。过期时间30分钟。
     * @example `2021-08-30T13:13:11.347146982Z`
     */
    AccessTokenExpiredTime: string;
    /**
     * 刷新凭证的过期时间。过期时间 1 天。
     * @example `2021-08-31T12:43:11.347146982Z`
     */
    RefreshTokenExpiredTime: string;
}
