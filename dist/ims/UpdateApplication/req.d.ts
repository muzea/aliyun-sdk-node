export interface UpdateApplicationRequest {
    /**
     * 应用ID。
     * @example `472457090344041****`
     */
    "AppId": string;
    /**
     * 显示名称。
     * @example `NewApp`
     */
    "NewDisplayName"?: string;
    /**
     * 回调地址。
     * 输入多个时，以英文分号（;）分隔。
     * @example `https://www.example.com`
     */
    "NewRedirectUris"?: string;
    /**
     * 应用权限范围。
     * 关于应用权限范围的取值和描述，请参见[OAuth范围](~~93693~~)。您也可以调用[ListPredefinedScopes](~~187206~~)获取不同应用类型支持的应用权限范围。
     * 输入多个应用权限范围时，以英文分号（;）分隔。
     * 新的应用权限范围会覆盖原来的应用权限范围。例如：如果原来的应用权限范围是`/acs/ccc`，新设置的应用权限范围为`/acs/alidns`，则最终生效的应用权限范围为`/acs/alidns`。如果您想在原有范围基础上新增`/acs/alidns`，请将新的应用权限范围设置为`/acs/ccc;/acs/alidns`。
     * @example `openid`
     */
    "NewPredefinedScopes"?: string;
    /**
     * 必选的应用权限范围。
     * 您可以将`RequiredScopes`中设置的一个或多个范围设为必选，设为必选后，当用户进行应用授权时，必选范围默认选中且不可取消。
     * 如果您同时传入了`NewPredefinedScopes`，则会先通过`NewPredefinedScopes`重新设置应用的范围列表，再通过本参数进行范围是否必选的设置。
     * 输入多个应用权限范围时，以英文分号（;）分隔。
     * 新的必选范围会覆盖原来的必选范围。
     * > 如果您设置的`RequiredScopes`项不在`PredefinedScopes`的范围内，则该项必选范围不生效。
     * @example `profile;aliuid`
     */
    "NewRequiredScopes"?: string;
    /**
     * 是否需要应用密钥。取值：
     * - true
     * - false
     * > - 对于WebApp和ServerApp类型的应用，该值会被强制设置为true，不支持修改。
     * - 对于NativeApp类型的应用，可以设置为true或false，如不设置，默认为false。由于此类应用往往运行在非可信环境，无法有效保护应用密钥，因此建议您如无明确需要，不要设置为true。更多信息，请参见[Native应用登录阿里云](~~93697~~)。
     * @example `true`
     */
    "NewSecretRequired"?: boolean;
    /**
     * 访问令牌有效期。
     * 取值范围：900~10800。单位：秒。
     * @example `3600`
     */
    "NewAccessTokenValidity"?: number;
    /**
     * 刷新令牌有效期。
     * 取值范围：7200~31536000。单位：秒。
     * @example `7776000`
     */
    "NewRefreshTokenValidity"?: number;
    /**
     * 是否允许被其他账号安装。取值：
     * - true：允许。
     * - false：不允许。
     * @example `true`
     */
    "NewIsMultiTenant"?: boolean;
}
