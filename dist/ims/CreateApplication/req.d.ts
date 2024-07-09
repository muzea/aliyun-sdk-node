export interface CreateApplicationRequest {
    /**
     * 应用的显示名称。
     * 最大长度为24个字符。
     * @example `myapp`
     */
    "DisplayName": string;
    /**
     * 应用类型。取值：
     * - WebApp：指基于浏览器交互的网络应用。
     * - NativeApp：指操作系统中运行的本地应用，主要为运行在桌面操作系统或移动操作系统中的应用。
     * - ServerApp：指直接访问阿里云服务，而无需依赖用户登录的应用，目前仅支持基于SCIM协议的用户同步应用。
     * @example `WebApp`
     */
    "AppType": string;
    /**
     * 回调地址。
     * 输入多个时，以英文分号（;）分隔。
     * @example `https://www.example.com`
     */
    "RedirectUris"?: string;
    /**
     * 是否需要应用密钥。取值：
     * - true
     * - false
     * > - 对于WebApp和ServerApp类型的应用，该值会被强制设置为true，不支持修改。
     * - 对于NativeApp类型的应用，可以设置为true或false，如不设置，默认为false。由于此类应用往往运行在非可信环境，无法有效保护应用密钥，因此建议您如无明确需要，不要设置为true。更多信息，请参见[Native应用登录阿里云](~~93697~~)。
     * @example `true`
     */
    "SecretRequired"?: boolean;
    /**
     * 访问令牌有效期。
     * 取值范围：900~10800。单位：秒。
     * 默认值：3600。
     * @example `3600`
     */
    "AccessTokenValidity"?: number;
    /**
     * 刷新令牌有效期。
     * 取值范围：7200~31536000。单位：秒。
     * 默认值：
     * - 对于NativeApp和ServerApp类型的应用，如果该值为空，则默认为2592000秒（即30天）。
     * - 对于WebApp类型的应用，如果该值为空，则默认为7776000秒（即90天）。
     * @example `2592000`
     */
    "RefreshTokenValidity"?: number;
    /**
     * 应用权限范围。
     * 关于应用权限范围的取值和描述，请参见[OAuth范围](~~93693~~)。您也可以调用[ListPredefinedScopes](~~187206~~)获取不同应用类型支持的应用权限范围。
     * 输入多个应用权限范围时，以英文分号（;）分隔。
     * @example `aliuid;profile`
     */
    "PredefinedScopes"?: string;
    /**
     * 必选的应用权限范围。
     * 您可以将`RequiredScopes`中设置的一个或多个范围设为必选，设为必选后，当用户进行应用授权时，必选范围默认选中且不可取消。
     * 输入多个应用权限范围时，以英文分号（;）分隔。
     * > 如果您设置的`RequiredScopes`项不在`PredefinedScopes`的范围内，则该项必选范围不生效。
     * @example `aliuid`
     */
    "RequiredScopes"?: string;
    /**
     * 是否允许被其他账号安装。取值：
     * - true：对于NativeApp和ServerApp类型的应用，如果该值为空，则默认为true。
     * - false：对于WebApp类型的应用，如果该值为空，则默认为false。
     * @example `false`
     */
    "IsMultiTenant"?: boolean;
    /**
     * 应用名称。
     * 最大长度为64 个字符，允许输入英文字母、数字、英文句点（.）、下划线（_）或中划线（-）。
     * @example `myapp`
     */
    "AppName"?: string;
}
