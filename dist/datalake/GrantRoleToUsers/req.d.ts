export interface GrantRoleToUsersRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * RoleName
         * @example `test_role_8`
         */
        RoleName: string;
        /**
         * ram user/ram role principal 列表，格式为acs:ram::[accountId]:user/userName, acs:ram::[accountId]:role/roleName
         */
        Users: any;
    };
}
