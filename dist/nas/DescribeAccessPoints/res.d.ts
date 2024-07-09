export interface DescribeAccessPointsResponse {
    /**
     * 请求ID。
     * @example `6299428C-3861-435D-AE54-9B330A00****`
     */
    RequestId: string;
    /**
     * 接入点信息。
     */
    AccessPoints: {
        /**
         * 接入点ARN。
         * @example `acs:nas:cn-hangzhou:178321033379****:accesspoint/ap-ie15yd****`
         */
        ARN: string;
        /**
         * 权限组名称。
         * @example `test`
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
         * 接入点域名名称。
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
         * @example `31a8e4****
        `
         */
        FileSystemId: string;
        /**
         * 接入点的修改时间 。
         * @example `1709619668276167`
         */
        ModifyTime: string;
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
         * 根目录权限。
         */
        RootPathPermission: {
            /**
             * 属主用户组ID。
             * @example `12`
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
         * > 当状态为Active时才可以挂载文件系统。
         * @example `Active`
         */
        Status: string;
        /**
         * 交换机ID。
         * @example `vsw-2zevmwkwyztjuoffg****
        `
         */
        VSwitchId: string;
        /**
         * 专有网络ID。
         * @example `vpc-2zesj9afh3y518k9o****
        `
         */
        VpcId: string;
    }[];
    /**
     * 查询凭证（Token），取值为上一次 API 调用返回的 NextToken 参数值。
     * @example `MTY4NzcxOTcwMjAzMDk2Nzc0MyM4MDM4****
    `
     */
    NextToken: string;
    /**
     * 接入点总个数。
     * @example `20`
     */
    TotalCount: number;
}
