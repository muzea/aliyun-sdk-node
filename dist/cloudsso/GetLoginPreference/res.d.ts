export interface GetLoginPreferenceResponse {
    /**
     * 请求ID。
     * @example `8CE8B990-193D-50CE-A604-69F3E7DCE740`
     */
    RequestId: string;
    /**
     * 登录偏好。
     */
    LoginPreference: {
        /**
         * IP地址白名单，用于限制云SSO用户只能通过白名单中的IP地址登录云SSO用户门户。
         * 只能对云SSO用户通过用户名密码或单点登录方式登录到云SSO用户门户生效，从云SSO用户门户登录到RD账号不生效。
         * 为空时，表示未设置IP地址白名单。
         * @example `192.168.0.0/16;10.0.0.0/8`
         */
        LoginNetworkMasks: string;
    };
}
