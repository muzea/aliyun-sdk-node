export interface CreateTenantUserResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 租户中的数据库账号列表信息。
     */
    TenantUser: {
        /**
         * 用户类型。
         * - Normal：普通账户。
         * - Admin：超级账户。
         * - ReadonlyAccount：只读账户，仅 MySQL 租户包含只读账户。
         * @example `Normal`
         */
        UserType: string;
        /**
         * 账户对应的角色权限信息
         */
        Roles: {
            /**
             * 数据库名称。
             * @example `db_pay1`
             */
            Database: string;
            /**
             * 拥有的角色。
             * - Oracle 模式，角色为 Schema 级别，其可分为
             *    - ReadWrite：读写权限，包括 CREATE TABLE, CREATE VIEW, CREATE PROCEDURE, CREATE SYNONYM, CREATE SEQUENCE, CREATE TRIGGER, CREATE TYPE, CREATE SESSION EXECUTE ANY PROCEDURE, CREATE ANY OUTLINE, ALTER ANY OUTLINE, DROP ANY OUTLINE, CREATE ANY PROCEDURE, ALTER ANY PROCEDURE, DROP ANY PROCEDURE, CREATE ANY SEQUENCE, ALTER ANY SEQUENCE, DROP ANY SEQUENCE, CREATE ANY TYPE, ALTER ANY TYPE, DROP ANY TYPE SYSKM, CREATE ANY TRIGGER, ALTER ANY TRIGGER, DROP ANY TRIGGER, CREATE PROFILE, ALTER PROFILE, DROP PROFILE；
             *   - ReadOnly：只读权限，SELECT。
             * - MySQL 模式，角色为数据库（Database）级别，其包括以下几类：
             *    - ReadWrite：读写权限，包括 ALL PRIVILEGES。
             *    - ReadOnly：只读权限，包括 SELECT。
             *    - DDL：DDL 权限，包括 CREATE, DROP, ALTER, SHOW VIEW, CREATE VIEW。
             *    - DML：DML 权限，包括 SELECT, INSERT, UPDATE, DELETE, SHOW VIEW。
             * > Oracle 账户对自己的 Schema 有默认的读写权限，此处不会列出。
             * @example `ReadOnly`
             */
            Role: string;
        }[];
        /**
         * 数据库账号的状态。
         * - LOCKED：锁定。
         * - ONLINE：解锁。
         * > 创建完成的账户默认状态为 ONLINE。
         * @example `ONLINE`
         */
        UserStatus: string;
        /**
         * 数据库账号名称。
         * @example `pay_test`
         */
        UserName: string;
    };
}
