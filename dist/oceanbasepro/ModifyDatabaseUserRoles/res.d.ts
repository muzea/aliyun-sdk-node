export interface ModifyDatabaseUserRolesResponse {
    /**
     * 账号信息。
     */
    TenantUser: {
        /**
         * 数据库名称。
         * @example `sms_pre`
         */
        DatabaseName: string;
        /**
         * 对数据库有赋权的账户列表信息。
         */
        Users: {
            /**
             * 账号赋予该库的角色权限。
             * 对于 MySQL 模式，角色为数据库（Database）级别，其有以下几类：
             * - ReadWrite：读写权限，包括 ALL PRIVILEGES；
             * - ReadOnly：只读权限，包括 SELECT；
             * - DDL: DDL权限，包括 CREATE,DROP,ALTER,SHOW VIEW,CREATE VIEW；
             * - DML: DML 权限，包括 SELECT,INSERT,UPDATE,DELETE,SHOW VIEW。
             * @example `ReadOnly`
             */
            Role: string;
            /**
             * 账号名称。
             * @example `user_pay_ro`
             */
            UserName: string;
        }[];
        /**
         * 租户 ID。
         * @example `t33h8y08k****`
         */
        TenantId: string;
    };
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
}
