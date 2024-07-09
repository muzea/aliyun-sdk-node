export interface DescribeUserPermissionsResponse {
    /**
     * 请求ID。
     * @example `5A7C9E37-C171-584F-9A99-869B48C4196D`
     */
    RequestId: string;
    /**
     * 权限列表。
     */
    Permissions: {
        /**
         * 系统规定参数，固定为`0`。
         * @example `0`
         */
        ParentId: string;
        /**
         * 目标权限授予实体，如果是RAM角色，则为`true`，否则为`false`。
         * @example `false`
         */
        IsRamRole: string;
        /**
         * 系统规定参数，固定为`cluster`。
         * @example `cluster`
         */
        ResourceType: string;
        /**
         * 系统规定参数，固定为`custom`。
         * @example `custom`
         */
        RoleType: string;
        /**
         * 权限名称，取值：
         * - `istio-admin`：管理员。
         * - `istio-ops`：网格资源管理员。
         * - `istio-readonly`：只读权限。
         * @example `istio-admin`
         */
        RoleName: string;
        /**
         * 网格实例ID。
         * @example `c57b848115458460583a4260cb713****`
         */
        ResourceId: string;
    }[];
}
