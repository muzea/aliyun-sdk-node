export interface DescribeVirtualMFADevicesResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL23as`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `FB550AAB-FB36-4A91-93F6-F4374AF65403`
     */
    RequestId: string;
    /**
     * 虚拟MFA设备信息集合。
     */
    VirtualMFADevices: {
        /**
         * 虚拟MFA设备序列号，唯一标识。
         * @example `a25f297f-f2e1-4a44-bbf1-5f48a6e5****`
         */
        SerialNumber: string;
        /**
         * 虚拟MFA设备被锁定后的自动解锁时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为YYYY-MM-DDThh:mm:ssZ。
         * @example `2020-12-21T15:21:28Z`
         */
        GmtUnlock: string;
        /**
         * 使用该虚拟MFA设备的AD用户名。
         * @example `usertest`
         */
        EndUserId: string;
        /**
         * 连续绑定或者认证虚拟MFA设备失败的次数。
         * @example `1`
         */
        ConsecutiveFails: number;
        /**
         * 工作区ID。
         * @example `cn-hangzhou+dir-269345****`
         */
        OfficeSiteId: string;
        /**
         * 虚拟MFA设备状态。
         * @example `NORMAL`
         */
        status: string;
        /**
         * > 该参数正在邀测中，暂未开放使用。
         * @example `cn-hangzhou+dir-gx2x1dhsmu52rd****`
         */
        DirectoryId: string;
        /**
         * 虚拟MFA设备启用时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为YYYY-MM-DDThh:mm:ssZ。
         * @example `2020-12-20T14:52:28Z`
         */
        GmtEnabled: string;
    }[];
}
