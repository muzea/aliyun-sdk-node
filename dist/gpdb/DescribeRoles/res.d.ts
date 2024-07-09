export interface DescribeRolesResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    RoleList: {
        /**
         * 角色列表。
         */
        Role: string[];
    };
}
