export interface RegisterUserRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `-1`
     */
    "Tid"?: number;
    /**
     * 需要录入用户的阿里云Uid
     * @example `12345678`
     */
    "Uid": string;
    /**
     * 用户昵称
     * @example `dmstest`
     */
    "UserNick"?: string;
    /**
     * 用户角色，取值和说明如下：
     * - **USER**：普通用户
     * - **DBA**：DBA
     * - **ADMIN**：管理员
     * - **SECURITY_ADMIN**：安全管理员
     * > 为空则初始化为“普通用户”，可选”普通用户”、”DBA”、”管理员”、”安全管理员”四个的任意组合，组合多个角色，传递时用*英文逗号*拼接。
     * @example `USER,DBA`
     */
    "RoleNames"?: string;
    /**
     * 电话。
     * @example `130000000xx`
     */
    "Mobile"?: string;
}
