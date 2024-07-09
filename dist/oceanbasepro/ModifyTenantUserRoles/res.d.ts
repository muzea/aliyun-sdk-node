export interface ModifyTenantUserRolesResponse {
    /**
     * 租户中的数据库账号信息。
     */
    TenantUser: {
        /**
         * 账号类型。
         * - Admin：超级账户。
         * - Normal：普通账户。
         * @example `账号具备的数据库权限信息列表。`
         */
        UserRole: {
            /**
             * 数据库（schema）名称。
             * @example `db_pay1`
             */
            Database: string;
            /**
             * 拥有的角色。
             * @example `ReadOnly`
             */
            Role: string;
            /**
             * 表的名称。
             * @example `tbl_pay1`
             */
            Table: string;
            /**
             * 是否授权成功。
             * @example `true`
             */
            IsSuccess: boolean;
        }[];
        /**
         * 账号名称。
         * @example `pay_test`
         */
        UserName: string;
        /**
         * 租户 ID。
         * @example `t4pnum****`
         */
        TenantId: string;
    };
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
}
