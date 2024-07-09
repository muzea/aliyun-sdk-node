export interface DescribeCloudDriveGroupsResponse {
    /**
     * 下一个查询开始的Token，`NextToken`为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `EF015AE5-B30A-5189-B519-735CEE40****`
     */
    RequestId: string;
    /**
     * 总数。
     * @example `0`
     */
    Count: number;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 网盘团队空间列表。
     */
    CloudDriveGroups: {
        /**
         * 团队空间状态。
         * @example `enabled`
         */
        Status: string;
        /**
         * 团队空间ID。
         * @example `cg-e70ga4ixp30ur****`
         */
        GroupId: string;
        /**
         * 团队空间名称。
         * @example `测试团队1`
         */
        GroupName: string;
        /**
         * 办公网络ID。
         * @example `cn-hangzhou+dir-959593****`
         */
        DirectoryId: string;
        /**
         * 空间ID。
         * @example `sh1234`
         */
        DriveId: string;
        /**
         * 创建时间。
         * @example `2022-04-11T07:44:21Z`
         */
        CreateTime: string;
        /**
         * 网盘团队总容量。
         * @example `5368709120`
         */
        TotalSize: number;
        /**
         * 已使用的空间大小。单位：Byte（字节）。
         * @example `1024000000`
         */
        UsedSize: string;
        /**
         * 团队管理员列表。
         * @example `["user01"]`
         */
        AdminUserIds: string;
        /**
         * 团队的组织ID。
         * @example `org-aliyun-wy-org-id`
         */
        OrgId: string;
        /**
         * 团队空间管理员信息。
         */
        AdminUserInfos: {
            /**
             * 管理员用户名（三方导入时可能不可读）。
             * @example `user01`
             */
            EndUserId: string;
            /**
             * 管理员昵称。
             * @example `张三`
             */
            NickName: string;
        }[];
    }[];
}
