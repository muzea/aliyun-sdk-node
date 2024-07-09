export interface ListVirtualMFADevicesResponse {
    VirtualMFADevices: {
        /**
         * 多因素认证设备列表。
         */
        VirtualMFADevice: {
            /**
             * 多因素认证设备序列号。
             * @example `acs:ram::123456789012****:mfa/device002`
             */
            SerialNumber: string;
            /**
             * 绑定用户的基本信息。
             */
            User: {
                /**
                 * 显示名称。
                 * @example `张*`
                 */
                DisplayName: string;
                /**
                 * 用户唯一标识。
                 * @example `122748924538****`
                 */
                UserId: string;
                /**
                 * 用户名称。
                 * @example `zhangq****`
                 */
                UserName: string;
            };
            /**
             * 激活日期。
             * @example `2015-02-18T17:22:08Z`
             */
            ActivateDate: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
