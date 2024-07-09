export interface CreateVirtualMFADeviceResponse {
    /**
     * 多因素认证设备。
     */
    VirtualMFADevice: {
        /**
         * 设备序列号。
         * @example `acs:ram::123456789012****:mfa/device001`
         */
        SerialNumber: string;
        /**
         * 密钥二维码PNG，使用Base64编码。
         * @example `YXNkZmFzZDlmeW5hc2Q5OGZoODd4bXJmcThhaGU5aSBmYXNkZiBzYWRmIGFGIDRxd2VjIGEgdHEz****`
         */
        QRCodePNG: string;
        /**
         * 多因素认证设备密钥。
         * @example `DSF98HAD982KJA9SDFNAS9D8FU839B8ADHBGS****`
         */
        Base32StringSeed: string;
    };
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
