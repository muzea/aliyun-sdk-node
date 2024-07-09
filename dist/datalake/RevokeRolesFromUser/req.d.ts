export interface RevokeRolesFromUserRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "body"?: {
        /**
         * 待删除的角色列表
         */
        RoleNames: any;
        /**
         * 针对该用户进行revoke，ram user/ram role principal，格式为acs:ram::[accountId]:user/userName, acs:ram::[accountId]:role/roleName
         */
        User: any;
    };
}
