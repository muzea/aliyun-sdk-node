export interface SetSecurityPreferenceRequest {
    /**
     * 是否允许RAM用户在登录时保存多因素设备认证状态，有效期为7天。取值：
     * - true：允许。
     * - false（默认值）：不允许。
     * @example `true`
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
     * 是否允许RAM用户自主管理公钥。取值：
     * - true：允许。
     * - false（默认值）：不允许。
     * > 该参数仅在日本站有效。
     * @example `false`
     */
    "AllowUserToManagePublicKeys"?: boolean;
    /**
     * 是否允许RAM用户自主管理多因素认证设备。取值：
     * - true（默认值）：允许。
     * - false：不允许。
     * @example `true`
     */
    "AllowUserToManageMFADevices"?: boolean;
    /**
     * RAM用户登录有效期。
     * 取值范围：1~24。默认值：6。单位：小时。
     * @example `6`
     */
    "LoginSessionDuration"?: number;
    /**
     * 登录掩码。登录掩码决定哪些IP地址会受到登录控制台的影响，包括密码登录和单点登录（SSO），但使用访问密钥发起的API调用并不受影响。
     * - 如果指定掩码，RAM用户只能从指定的IP地址进行登录。
     * - 如果不指定任何掩码，登录控制台功能将适用于整个网络。
     * 当需要配置多个登录掩码时，请使用分号（;）来分隔，例如：192.168.0.0/16;10.0.0.0/8。
     * 最多配置25个登录掩码，总长度最大512个字符。
     * @example `10.0.0.0/8`
     */
    "LoginNetworkMasks"?: string;
}
