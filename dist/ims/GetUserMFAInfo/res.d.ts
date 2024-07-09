export interface GetUserMFAInfoResponse {
    /**
     * 多因素认证设备信息。
     */
    MFADevice: {
        /**
         * 设备序列号。
         * @example `acs:ram::177242285274****:mfa/device001`
         */
        SerialNumber: string;
        /**
         * 多因素认证设备类型。取值：
         * - VMFA：虚拟MFA设备。
         * - U2F：U2F安全密钥。
         * @example `VMFA`
         */
        Type: string;
    };
    /**
     * 请求ID。
     * @example `FCF7322A-20A9-4F68-8B7F-F86958839BC0`
     */
    RequestId: string;
    /**
     * 是否已启用多因素认证设备。取值：
     * - true：已启用。
     * - false：未启用。
     * @example `true`
     */
    IsMFAEnable: boolean;
}
