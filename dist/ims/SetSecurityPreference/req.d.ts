export interface SetSecurityPreferenceRequest {
    /**
     * RAM用户使用多因素认证登录后，是否允许保存多因素认证的验证状态，其有效期为7天。取值：
     * - true：允许。
     * - false（默认值）：不允许。
     * @example `false`
     */
    "EnableSaveMFATicket"?: boolean;
    /**
     * 是否允许RAM用户自主管理密码。取值：
     * - true（默认值）：允许。
     * - false：不允许。
     * @example `true`
     */
    "AllowUserToChangePassword"?: boolean;
    /**
     * 是否允许RAM用户自主管理访问密钥。取值：
     * - true：允许。
     * - false（默认值）：不允许。
     * @example `false`
     */
    "AllowUserToManageAccessKeys"?: boolean;
    /**
     * 是否允许RAM用户自主管理多因素认证设备。取值：
     * - true（默认值）：允许。
     * - false：不允许。
     * @example `true`
     */
    "AllowUserToManageMFADevices"?: boolean;
    /**
     * RAM用户登录有效期。
     * 取值范围：1~24。单位：小时。
     * 默认值：6。
     * @example `6`
     */
    "LoginSessionDuration"?: number;
    /**
     * 登录掩码。登录掩码决定哪些IP地址会受到登录控制台的影响，包括密码登录和单点登录（SSO），但使用访问密钥发起的API调用并不受影响。
     * - 如果指定掩码，RAM用户只能从指定的IP地址进行登录。
     * - 如果不指定任何掩码，登录控制台功能将适用于整个网络。
     * 当需要配置多个登录掩码时，请使用分号（;）来分隔，例如：192.168.0.0/16;10.0.0.0/8。
     * 最多配置40个登录掩码，总长度最大512个字符。
     * @example `10.0.0.0/8`
     */
    "LoginNetworkMasks"?: string;
    /**
     * 多因素认证的手段。
     */
    "VerificationTypes"?: string[];
    /**
     * 是否允许RAM用户自主管理个人钉钉的绑定与解绑。取值：
     * - true（默认值）：允许。
     * - false：不允许。
     * @example `true`
     */
    "AllowUserToManagePersonalDingTalk"?: boolean;
    /**
     * 异常登录时是否二次验证MFA。取值：
     * - autonomous（默认值）：可跳过，不强制绑定。
     * - enforceVerify：强制绑定验证。
     * @example `autonomous`
     */
    "OperationForRiskLogin"?: string;
    /**
     * 登录时必须使用MFA（取代原EnforceMFAForLogin参数，原参数仍然有效，建议更新为新参数）。取值：
     * - mandatory：强制所有RAM用户。原EnforceMFAForLogin对应取值为true。
     * - independent（默认值）：依赖每个RAM用户的独立配置。原EnforceMFAForLogin对应取值为false。
     * - adaptive：仅异常登录时使用。
     * @example `adaptive`
     */
    "MFAOperationForLogin"?: string;
}
