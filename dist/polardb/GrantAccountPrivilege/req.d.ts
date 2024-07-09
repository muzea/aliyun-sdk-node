export interface GrantAccountPrivilegeRequest {
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 账号名。
     * @example `testacc`
     */
    "AccountName": string;
    /**
     * 需要授权的数据库名称。支持同时对一个或多个数据库授权，多个数据库名称之间用英文逗号（,）隔开。
     * @example `testdb_1,testdb_2`
     */
    "DBName": string;
    /**
     * 账号权限，取值范围如下：
     * * **ReadWrite**：读写
     * * **ReadOnly**：只读
     * * **DMLOnly**：只允许DML
     * * **DDLOnly**：只允许DDL
     * * **ReadIndex**：只读+索引
     * > **AccountPrivilege**需与**DBName**输入的参数数量保持一致，且顺序对应。例如，输入**DBName**为`testdb_1,testdb_2`，**AccountPrivilege**为`ReadWrite,ReadOnly`，则表示授予目标账号对数据库**testdb_1**的**读写**权限，对数据库**testdb_2**的**只读**权限。
     * @example `ReadWrite,ReadOnly`
     */
    "AccountPrivilege": string;
}
