export interface InsertRoleRequest {
    /**
     * 角色名称
     * @example `testrole`
     */
    "RoleName": string;
    /**
     * 操作权限集合，格式：`权限组ID1:权限码1;...;权限组IDn:权限码n`，例如`1:1;1:2;2:1;2:2`。详细权限组及权限码含义请参见[ListAuthority](~~149409~~)。
     * @example `15:1;14:2`
     */
    "ActionData": string;
}
