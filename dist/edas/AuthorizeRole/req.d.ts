export interface AuthorizeRoleRequest {
    /**
     * 待授权子账号 ID
     * @example `test@133******`
     */
    "TargetUserId": string;
    /**
     * 角色 ID，用“;”号分割，null 代表取消角色授权
     * @example `1;2`
     */
    "RoleIds": string;
}
