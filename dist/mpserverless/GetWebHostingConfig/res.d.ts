export interface GetWebHostingConfigResponse {
    /**
     * 唯一请求ID。
     * @example `828A8808-3FC9-418C-893A-5A708CFABB8E`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 服务空间ID。
         * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
         */
        SpaceId: string;
        /**
         * 静态网站托管测试域名允许访问IP的白名单，不在白名单中的访问可能会被限制。
         * @example `42.120.72.0/24`
         */
        AllowedIps: string;
        /**
         * 404错误路径
         * @example `error.html`
         */
        ErrorPath: string;
        /**
         * 默认域名，仅供测试使用，请求速度会受到限制。如果您需要对外正式提供网站服务，请绑定您已备案的自定义域名。
         * @example `static-0e16bb12-14af-4635-b24c-5ac1a9a*****.bspapp.com`
         */
        DefaultDomain: string;
        /**
         * 首页路径。
         * @example `index.html`
         */
        IndexPath: string;
        /**
         * 当配置了ErrorPath之后，该页面对应的Http状态码，可选值404和200。当该字段不存在时，实际值为404。
         * @example `200`
         */
        ErrorHttpStatus: string;
    };
}
