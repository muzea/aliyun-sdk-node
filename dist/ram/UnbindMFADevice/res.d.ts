export interface UnbindMFADeviceResponse {
    /**
     * 多因素认证设备信息。
     */
    MFADevice: {
        /**
         * 设备序列号。
         * @example `acs:ram::123456789012****:mfa/device002`
         */
        SerialNumber: string;
    };
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
