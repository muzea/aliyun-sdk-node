export interface ModifyWebHostingConfigRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
     */
    "SpaceId": string;
    /**
     * 首页路径。
     * @example `index.html`
     */
    "IndexPath": string;
    /**
     * 404错误路径。
     * @example `error.html`
     */
    "ErrorPath"?: string;
    /**
     * 静态网站托管测试域名允许访问IP的白名单，不在白名单中的访问可能会被限制，仅支持配置ipv4，可以配置IP或者IP网段，掩码位数取值范围24-31，最多可同时配置三个，多个之间用逗号隔开。
     * @example `42.120.72.0/24`
     */
    "AllowedIps"?: string;
    /**
     * 当配置了ErrorPath之后，该页面对应的Http状态码，可选值404和200，默认为404。
     * @example `200`
     */
    "ErrorHttpStatus"?: string;
}
