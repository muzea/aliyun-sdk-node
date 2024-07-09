export interface BindMFADeviceRequest {
    /**
     * 指定多因素认证设备的序列号。
     * @example `acs:ram::123456789012****:mfa/device002`
     */
    "SerialNumber"?: string;
    /**
     * 指定用户名。
     * @example `zhangq****`
     */
    "UserName"?: string;
    /**
     * 验证第一组动态密码。
     * @example `11****`
     */
    "AuthenticationCode1"?: string;
    /**
     * 验证第二组动态密码。
     * @example `33****`
     */
    "AuthenticationCode2"?: string;
}
