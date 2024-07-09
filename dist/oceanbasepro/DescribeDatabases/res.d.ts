export interface DescribeDatabasesResponse {
    /**
     * 租户中的数据库总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 租户中的数据库列表。
     */
    Databases: {
        /**
         * 数据库的状态。
         * - ONLINE: 运行中。
         * - DELETING: 删除中。
         * @example `ONLINE`
         */
        Status: string;
        /**
         * 数据库的描述信息。
         * @example `test db`
         */
        Description: string;
        /**
         * 数据库的编码。目前支持 utf8mb4、gbk 等编码。
         * @example `utf8mb4`
         */
        Encoding: string;
        /**
         * 数据库类型。
         * @example `mysql`
         */
        DbType: string;
        /**
         * 数据库名称。
         * @example `sms_pre`
         */
        DatabaseName: string;
        /**
         * 创建时间。
         * @example `2022-02-21 15:41:06`
         */
        CreateTime: string;
        /**
         * 对该数据库赋权的账号列表信息。
         */
        Users: {
            /**
             * 账号类型。
             *  - Admin：超级账户。
             * - Normal：普通账户。
             * @example `Normal`
             */
            UserType: string;
            /**
             * 账号赋予该库的角色权限。
             * 对于 MySQL 模式，角色为数据库（Database）级别，其有以下几类：
             * - ReadWrite：读写权限，包括 ALL PRIVILEGES；
             * - ReadOnly：只读权限，包括 SELECT；
             * - DDL: DDL权限，包括CREATE,DROP,ALTER,SHOW VIEW,CREATE VIEW；
             * - DML: DML权限，包括SELECT,INSERT,UPDATE,DELETE,SHOW VIEW。
             * @example `ReadOnly`
             */
            Role: string;
            /**
             * 账号名称。
             * @example `user_pay_ro`
             */
            UserName: string;
            /**
             * 用户授予数据库自定义权限时，privileges 返回自定义的权限内容，以逗号 "," 分割；其余时间 privileges 不返回数据。
             * @example `select,delete,update`
             */
            Privileges: string;
        }[];
        /**
         * 租户 ID。
         * @example `t4pnum****`
         */
        TenantId: string;
        /**
         * 数据库表列表信息。
         */
        Tables: {
            /**
             * 数据库表名。
             * @example `testTables`
             */
            TableName: string;
        }[];
        /**
         * 所需容量，单位：GB。
         * @example `5.67 GB`
         */
        RequiredSize: number;
        /**
         * 实际数据大小，单位：GB。
         * ><notice>该字段后期后台不再输出, 请使用 RequiredSize。></notice>
         * @example `5.67 GB`
         */
        DataSize: number;
        /**
         * 字符序。
         * @example `utf8mb4_general_ci`
         */
        Collation: string;
        /**
         * 所属集群 ID。
         * @example `obsdh2f****`
         */
        InstanceId: string;
        /**
         * 租户名。
         * @example `tenantABC`
         */
        TenantName: string;
    }[];
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
}
