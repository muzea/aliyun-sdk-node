export interface CreateVirtualMFADeviceResponse {
    /**
     * 多因素认证设备信息。
     */
    VirtualMFADevice: {
        /**
         * 设备序列号。
         * @example `acs:ram::177242285274****:mfa/device001`
         */
        SerialNumber: string;
        /**
         * 密钥的二维码，使用Base64编码。
         * @example `YXNkZmFzZDlmeW5hc2Q5OGZoODd4bXJmcThhaGU5aSBmYXNkZiBzYWRmIGFGIDRxd2VjIGEgdHEz****`
         */
        QRCodePNG: string;
        /**
         * 多因素认证设备密钥。
         * @example `LD3CJ23Z2VGEX6R7ZTQCOA4XL2KODS5PKH7442NLKYX2PVHSHYB7UT3TS5HA****`
         */
        Base32StringSeed: string;
    };
    /**
     * 请求ID。
     * @example `C609CC97-10FE-43EB-BE32-BDC219D8F1E4`
     */
    RequestId: string;
}
