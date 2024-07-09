export interface DescribeMfaDevicesResponse {
    /**
     * 请求ID。
     * @example `33DBB8EC-6E68-4726-91C4-E09C59D9A7D8`
     */
    RequestId: string;
    /**
     * 下一个查询开始的Token。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6na6YlN9asMM31MsMcdQNpp`
     */
    NextToken: string;
    /**
     * 虚拟MFA设备信息集合。
     */
    MfaDevices: {
        /**
         * > 该参数暂未开放使用。
         * @example `36`
         */
        Id: number;
        /**
         * 使用该虚拟MFA设备的便捷用户名。
         * @example `test`
         */
        EndUserId: string;
        /**
         * > 该参数暂未开放使用。
         * @example `username@example.com`
         */
        Email: string;
        /**
         * 虚拟MFA设备启用时间。按照ISO8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2021-06-22T06:20:49Z`
         */
        GmtEnabled: string;
        /**
         * 虚拟MFA设备被锁定后的自动解锁时间。按照ISO8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2021-06-23T06:20:49Z`
         */
        GmtUnlock: string;
        /**
         * 连续绑定或者认证虚拟MFA设备失败的次数。
         * @example `0`
         */
        ConsecutiveFails: number;
        /**
         * 虚拟MFA设备序列号，唯一标识。
         * @example `dc856334-446b-4035-bfbc-18af261e****`
         */
        SerialNumber: string;
        /**
         * 虚拟MFA设备状态。
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 虚拟MFA设备类型。目前仅支持TOTP_VIRTUAL，即遵循TOTP算法的虚拟MFA设备。
         * @example `TOTP_VIRTUAL`
         */
        DeviceType: string;
    }[];
}
