export interface ListMFADevicesForUserResponse {
    /**
     * 请求ID。
     * @example `8B9982ED-FD0D-5622-8EA0-7B768685DCE7`
     */
    RequestId: string;
    /**
     * MFA设备总数。
     * @example `1`
     */
    TotalCounts: number;
    /**
     * MFA设备列表。
     */
    MFADevices: {
        /**
         * MFA设备类型。取值：TOTP，表示基于TOTP的虚拟MFA设备。
         * @example `TOTP`
         */
        DeviceType: string;
        /**
         * 生效时间。
         * @example `2021-10-29T09:14:06Z`
         */
        EffectiveTime: string;
        /**
         * MFA设备ID。
         * @example `mfa-00ujhet8pycljj7j****`
         */
        DeviceId: string;
        /**
         * 用户ID。
         * @example `u-00q8wbq42wiltcrk****`
         */
        UserId: string;
        /**
         * MFA设备名称。
         * @example `Alice-MFA1`
         */
        DeviceName: string;
    }[];
}
