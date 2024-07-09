export interface UpdateRoleRequest {
    /**
     * 角色ID，可以使用[ListRole](~~149410~~)获取。
     * @example `32371`
     */
    "RoleId": number;
    /**
     * 操作权限集合，格式：`权限组ID1:权限码1;...;权限组IDn:权限码n`，例如`1:1;1:2;2:1;2:2`。详细权限组及权限码含义请参见[ListAuthority](~~149409~~)。
     * @example `15:1`
     */
    "ActionData": string;
}
