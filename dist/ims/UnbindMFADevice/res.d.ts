export interface UnbindMFADeviceResponse {
    /**
     * 多因素认证设备信息。
     */
    MFADevice: {
        /**
         * 设备序列号。
         * @example `acs:ram::151298381312****:mfa/device001`
         */
        SerialNumber: string;
    };
    /**
     * 请求ID。
     * @example `A26CB3E9-1021-452A-AC57-3134B3BA0E4C`
     */
    RequestId: string;
}
