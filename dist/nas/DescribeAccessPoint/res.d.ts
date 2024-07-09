export interface DescribeAccessPointResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 接入点信息。
     */
    AccessPoint: {
        /**
         * 接入点ARN。
         * @example `acs:nas:cn-hangzhou:178321033379****:accesspoint/ap-ie15yd****`
         */
        ARN: string;
        /**
         * 权限组名称。
         * @example `test
        `
         */
        AccessGroup: string;
        /**
         * 接入点ID。
         * @example `ap-ie15yd****
        `
         */
        AccessPointId: string;
        /**
         * 接入点名称。
         * @example `test`
         */
        AccessPointName: string;
        /**
         * 接入点的创建时间。
         * @example `1709619668276167`
         */
        CreateTime: string;
        /**
         * 接入点域名。
         * @example `ap-ie15ydanoz.001014****-w****.cn-hangzhou.nas.aliyuncs.com`
         */
        DomainName: string;
        /**
         * 是否启用RAM策略。
         * @example `false`
         */
        EnabledRam: boolean;
        /**
         * 文件系统ID。
         * @example `31a8e4****`
         */
        FileSystemId: string;
        /**
         * 接入点修改时间 。
         * @example `1709619668276167`
         */
        ModifyTime: string;
        /**
         * 根目录创建权限。
         */
        RootPathPermission: {
            /**
             * 属主用户组ID。
             * @example `123`
             */
            OwnerGroupId: number;
            /**
             * 属主用户ID。
             * @example `1`
             */
            OwnerUserId: number;
            /**
             * POSIX权限。
             * @example `0755`
             */
            Permission: string;
        };
        /**
         * Posix用户。
         */
        PosixUser: {
            /**
             * Posix用户组ID。
             * @example `12`
             */
            PosixGroupId: number;
            /**
             * Posix用户ID。
             * @example `123`
             */
            PosixUserId: number;
            /**
             * 第二用户组ID。
             */
            PosixSecondaryGroupIds: number[];
        };
        /**
         * 根目录。
         * @example `/`
         */
        RootPath: string;
        /**
         * 当前根目录状态。
         * 包括：
         * - 0：rootpath状态未知
         * - 1：rootpath不存在（可能被用户删除了）
         * - 2：rootpath状态正常
         * @example `2`
         */
        RootPathStatus: string;
        /**
         * 当前接入点状态。
         * 包括：
         * - Active：可用
         * - Inactive：不可用
         * - Pending：创建中
         * - Deleting：删除中
         * @example `Active`
         */
        Status: string;
        /**
         * 交换机ID。
         * @example `vsw-2zevmwkwyztjuoffg****`
         */
        VSwitchId: string;
        /**
         * 专有网络ID。
         * 必须与待挂载的云服务器ECS选择相同的VPC网络。
         * @example `vpc-2zesj9afh3y518k9o****`
         */
        VpcId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    };
}
