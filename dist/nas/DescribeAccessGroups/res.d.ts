export interface DescribeAccessGroupsResponse {
    AccessGroups: {
        /**
         * 权限组信息集合。
         */
        AccessGroup: {
            /**
             * 权限组名称。
             * @example `DEFAULT_VPC_GROUP_NAME`
             */
            AccessGroupName: string;
            /**
             * 权限组描述信息。
             * @example `This is a test access group.`
             */
            Description: string;
            /**
             * 权限组的创建时间。
             * @example `2020-01-05T16:00:00Z`
             */
            CreateTime: string;
            /**
             * 权限组类型。取值为**Vpc**，表示专有网络。
             * @example `Vpc`
             */
            AccessGroupType: string;
            /**
             * 此权限组中包含的权限组规则数量。
             * @example `0`
             */
            RuleCount: number;
            /**
             * 应用此权限组的挂载点数量。
             * @example `0`
             */
            MountTargetCount: number;
            /**
             * 文件系统类型。
             * 取值：
             * - standard（默认值）：通用型NAS
             * - extreme：极速型NAS
             * - cpfs：CPFS
             * >仅中国站支持cpfs文件系统。
             * @example `standard`
             */
            FileSystemType: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
    /**
     * 权限组的总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `2514F97E-FFF0-4A1F-BF04-729CEAC6****`
     */
    RequestId: string;
    /**
     * 每个分页包含的权限组个数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
}
