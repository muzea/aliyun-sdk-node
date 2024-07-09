export interface ListVirtualMFADevicesResponse {
    VirtualMFADevices: {
        /**
         * 多因素认证设备信息。
         */
        VirtualMFADevice: {
            /**
             * 设备序列号。
             * @example `acs:ram::177242285274****:mfa/test`
             */
            SerialNumber: string;
            /**
             * 绑定了多因素认证设备的RAM用户信息。
             */
            User: {
                /**
                 * RAM用户的登录名称。
                 * @example `test@177242285274****.onaliyun.com`
                 */
                UserPrincipalName: string;
                /**
                 * RAM用户的显示名称。
                 * @example `test`
                 */
                DisplayName: string;
                /**
                 * RAM用户ID。
                 * @example `20732900249392****`
                 */
                UserId: string;
            };
            /**
             * 激活时间。
             * @example `2020-10-16T06:02:09Z`
             */
            ActivateDate: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `32272612-DF82-485E-8BA9-AFA4E0C3D0BA`
     */
    RequestId: string;
    /**
     * 请求返回结果是否被截断。取值：
     * - true
     * - false
     * @example `true`
     */
    IsTruncated: boolean;
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`时，才显示该参数。
     * @example `EXAMPLE`
     */
    Marker: string;
}
