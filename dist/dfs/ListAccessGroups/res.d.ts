export interface ListAccessGroupsResponse {
    /**
     * 返回结果的数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `55C5FFD6-BF99-41BD-9C66-FFF39189****`
     */
    RequestId: string;
    NextToken: string;
    /**
     * 权限组信息集合。
     */
    AccessGroups: {
        /**
         * 权限组是否为用户的默认权限组。
         * 包括：
         * - true：该权限组为默认权限组。当该权限组为默认权限组时，允许所有IP地址访问，且用户无法删除默认权限组及权限组内的权限规则。
         * - false：该权限组不是默认权限组。
         * @example `false`
         */
        IsDefault: boolean;
        /**
         * 权限组名称。
         * @example `test-cluster-policy`
         */
        AccessGroupName: string;
        /**
         * 权限组关联挂载点的数量。
         * @example `1`
         */
        MountPointCount: number;
        /**
         * 权限组的描述信息。
         * @example `测试机群专用权限组`
         */
        Description: string;
        /**
         * 权限组ID。
         * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
         */
        AccessGroupId: string;
        /**
         * 权限组创建的时间。
         * @example `2022-04-18T08:02:09.986217Z`
         */
        CreateTime: string;
        /**
         * 权限组类型。
         * @example `VPC`
         */
        NetworkType: string;
        /**
         * 权限组中权限规则的数量。
         * @example `3`
         */
        RuleCount: number;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
