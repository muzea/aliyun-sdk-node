export interface RevokeRoleFromUsersRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 待revoke的角色
         * @example `test_role_3`
         */
        RoleName: string;
        /**
         * 待revoke的用户列表，ram user/ram role principal 列表，格式为acs:ram::[accountId]:user/userName, acs:ram::[accountId]:role/roleName
         */
        Users: any;
    };
}
