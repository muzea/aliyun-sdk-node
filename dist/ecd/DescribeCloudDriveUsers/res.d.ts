export interface DescribeCloudDriveUsersResponse {
    /**
     * 下一个查询开始的Token，`NextToken`为空表示没有下一个。
     * @example `aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `F083AAE5-7AA9-53BB-9060-AFFB2C18****`
     */
    RequestId: string;
    /**
     * 用户个人盘列表。
     */
    CloudDriveUsers: {
        /**
         * 已使用的空间大小。单位：Byte（字节）。
         * @example `10485760`
         */
        UsedSize: number;
        /**
         * 用户个人盘的状态。
         * @example `enabled`
         */
        Status: string;
        /**
         * 用户个人盘ID。
         * @example `8`
         */
        DriveId: string;
        /**
         * 用户个人盘的存储峰值。单位：Byte（字节）。
         * @example `104857600`
         */
        TotalSize: number;
        /**
         * 用户内部ID。
         * @example `alice@cn-shanghai.148875033399****`
         */
        UserId: string;
        /**
         * 终端用户名称。
         * @example `alice`
         */
        UserName: string;
        /**
         * 终端用户ID。
         * @example `alice`
         */
        EndUserId: string;
    }[];
}
