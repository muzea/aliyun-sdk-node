export interface GetApplicationResponse {
    /**
     * 请求ID。
     * @example `6616F09B-2768-4C11-8866-A8EE4C4A583E`
     */
    RequestId: string;
    /**
     * 应用信息。
     */
    Application: {
        /**
         * 应用的显示名称。
         * @example `myapp`
         */
        DisplayName: string;
        /**
         * 访问令牌有效期。单位：秒。
         * @example `3600`
         */
        AccessTokenValidity: number;
        /**
         * 是否需要应用密钥。
         * @example `true`
         */
        SecretRequired: boolean;
        /**
         * 应用所属的阿里云账号ID。
         * @example `177242285274****`
         */
        AccountId: string;
        /**
         * 创建时间。
         * @example `2020-10-23T08:06:57Z`
         */
        CreateDate: string;
        /**
         * 应用名称。
         * @example `myapp`
         */
        AppName: string;
        RedirectUris: {
            /**
             * 回调地址。
             */
            RedirectUri: string[];
        };
        /**
         * 更新时间。
         * @example `2020-10-23T08:06:57Z`
         */
        UpdateDate: string;
        /**
         * 应用权限范围信息。
         */
        DelegatedScope: {
            PredefinedScopes: {
                /**
                 * 应用权限范围信息。
                 */
                PredefinedScope: {
                    /**
                     * 范围描述。
                     * @example `用于获取用户的OpenID（默认权限范围，不可移除）`
                     */
                    Description: string;
                    /**
                     * 范围名称。
                     * @example `openid`
                     */
                    Name: string;
                    /**
                     * 安装应用时，此权限范围是否默认必选。取值：
                     * - true：必选。
                     * - false：非必选。
                     * 其中`openid`默认为必选。
                     * @example `true`
                     */
                    Required: boolean;
                }[];
            };
        };
        /**
         * 应用ID。
         * @example `472457090344041****`
         */
        AppId: string;
        /**
         * 刷新令牌有效期。单位：秒。
         * @example `7776000`
         */
        RefreshTokenValidity: number;
        /**
         * 是否允许被其他账号安装。
         * @example `true`
         */
        IsMultiTenant: boolean;
        /**
         * 应用类型。取值：
         * - WebApp：指基于浏览器交互的网络应用。
         * - NativeApp：指操作系统中运行的本地应用，主要为运行在桌面操作系统或移动操作系统中的应用。
         * - ServerApp：指直接访问阿里云服务，而无需依赖用户登录的应用，目前仅支持基于SCIM协议的用户同步应用。
         * @example `WebApp`
         */
        AppType: string;
    };
}
