export interface DescribeUsersWithPermissionsRequest {
    /**
     * 选择列出RAM用户还是RAM角色的ID，取值：
     * - `SubUser`：列出RAM用户ID
     * - `RamRole`：列出RAM角色ID
     * @example `SubUser`
     */
    "UserType": string;
}
