export interface BindMFADeviceRequest {
    /**
     * 多因素认证设备的序列号。
     * > 您可以调用[CreateVirtualMFADevice](~~186179~~)获取多因素认证设备的序列号。
     * @example `acs:ram::177242285274****:mfa/device001`
     */
    "SerialNumber"?: string;
    /**
     * RAM用户的登录名称。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName": string;
    /**
     * 第一组安全验证码。
     * > 您可以调用[CreateVirtualMFADevice](~~186179~~)创建多因素认证设备并生成密钥（`Base32StringSeed`的值），然后使用该密钥在移动端阿里云应用中手动添加多因素认证设备，最后获取连续的两组安全验证码。
     * @example `123456`
     */
    "AuthenticationCode1"?: string;
    /**
     * 第二组安全验证码。
     * > 您可以调用[CreateVirtualMFADevice](~~186179~~)创建多因素认证设备并生成密钥（`Base32StringSeed`的值），然后使用该密钥在移动端阿里云应用中手动添加多因素认证设备，最后获取连续的两组安全验证码。
     * @example `654321`
     */
    "AuthenticationCode2"?: string;
}
