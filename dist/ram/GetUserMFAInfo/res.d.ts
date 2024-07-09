export interface GetUserMFAInfoResponse {
    /**
     * MFA设备信息。
     */
    MFADevice: {
        /**
         * 设备序列号。
         * @example `acs:ram::177242285274****:mfa/test`
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
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
