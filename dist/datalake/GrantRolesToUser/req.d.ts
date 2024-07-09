export interface GrantRolesToUserRequest {
    /**
     * 请求结构。
     */
    "body"?: {
        /**
         * 待授权的角色名列表
         */
        RoleNames: any;
        /**
         * ram user/ram role principal，格式为acs:ram::[accountId]:user/userName, acs:ram::[accountId]:role/roleName
         */
        User: any;
    };
}
