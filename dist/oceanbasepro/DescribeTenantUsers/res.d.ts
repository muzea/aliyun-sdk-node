export interface DescribeTenantUsersResponse {
    /**
     * 租户中的数据库账号总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 租户中的数据库账号列表信息。
     */
    TenantUsers: {
        /**
         * 数据库账号类型。
         * - Admin：超级账户。
         * - Normal：普通账户。
         * @example `Normal`
         */
        UserType: string;
        /**
         * 数据库账号的描述信息。
         * @example `use for test`
         */
        Description: string;
        /**
         * 账号具备的数据库权限列表信息。
         */
        Databases: {
            /**
             * 数据库（schema）名称
             * @example `db_pay1`
             */
            Database: string;
            /**
             * 拥有的角色。
             * 对于 Oracle 模式，角色为 schema 级别，其可分为
             * - ReadWrite：读写权限，包括 CREATE TABLE CREATE VIEW CREATE PROCEDURE CREATE SYNONYM CREATE SEQUENCE CREATE TRIGGER CREATE TYPE CREATE SESSION EXECUTE ANY PROCEDURE CREATE ANY OUTLINE ALTER ANY OUTLINE DROP ANY OUTLINE CREATE ANY PROCEDURE ALTER ANY PROCEDURE DROP ANY PROCEDURE CREATE ANY SEQUENCE ALTER ANY SEQUENCE DROP ANY SEQUENCE CREATE ANY TYPE ALTER ANY TYPE DROP ANY TYPE SYSKM CREATE ANY TRIGGER ALTER ANY TRIGGER DROP ANY TRIGGER CREATE PROFILE ALTER PROFILE DROP PROFILE；
             * - ReadOnly：只读权限，SELECT
             * 对于MySQL模式，角色为数据库（Database）级别，其有以下几类：
             * - ReadWrite：读写权限，包括 ALL PRIVILEGES；
             * - ReadOnly：只读权限，包括 SELECT；
             * - DDL: DDL 权限，包括 CREATE,DROP,ALTER,SHOW VIEW,CREATE VIEW；
             * - DML: DML 权限，包括 SELECT,INSERT,UPDATE,DELETE,SHOW VIEW。
             * > <br>另外， Oracle 账户对自己的 Schema 有默认的读写权限，此处不会列出。
             * @example `ReadOnly`
             */
            Role: string;
            /**
             * 表的名称。
             * @example `tbl_pay1`
             */
            Table: string;
            /**
             * 用户授予数据库自定义权限时，privileges 返回自定义的权限内容，以逗号 "," 分割；其余时间 privileges 不返回数据。
             * @example `select,delete,update`
             */
            Privileges: string;
        }[];
        /**
         * 数据库账号的状态。
         * - LOCKED：锁定。
         * - ONLINE：解锁。
         * @example `ONLINE`
         */
        UserStatus: string;
        /**
         * 数据库账号名称。
         * @example `pay_test`
         */
        UserName: string;
        /**
         * 所属租户 ID。
         * @example `t4pnum**** `
         */
        TenantId: string;
        /**
         * 所属集群 ID。
         * @example `obshc32****`
         */
        InstanceId: string;
    }[];
}
