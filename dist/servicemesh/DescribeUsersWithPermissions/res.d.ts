export interface DescribeUsersWithPermissionsResponse {
    /**
     * 请求ID
     * @example `12B94024-C241-13CD-BA44-6106DF1****`
     */
    RequestId: string;
    /**
     * 当前具有RBAC权限的RAM用户或RAM角色ID列表
     */
    UIDs: string[];
}
