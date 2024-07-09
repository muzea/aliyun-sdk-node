export interface SetLoginPreferenceRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * IP地址白名单，用于限制云SSO用户只能通过白名单中的IP地址登录云SSO用户门户。约束如下：
     * - 可以输入IP地址或IP地址段，支持IPv4地址。
     * - 最多允许输入100个IP地址或IP地址段，多值以`;`分隔。
     * - 传入空值时，表示不修改原配置值。
     * - 传入`;`时，表示清空原配置值。
     * - 只能对云SSO用户通过用户名密码或单点登录方式登录到云SSO用户门户生效，从云SSO用户门户登录到RD账号不生效。
     * @example `192.168.0.0/16;10.0.0.0/8`
     */
    "LoginNetworkMasks"?: string;
}
