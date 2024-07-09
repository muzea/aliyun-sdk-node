export interface DeleteRoleRequest {
    /**
     * 待删除的角色名
     * @example `roleId/roleName至少有一个是非空`
     */
    "RoleName"?: string;
}
