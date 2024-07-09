export interface GrantAccountPrivilegeRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 账号名称。
     * @example `test1`
     */
    "AccountName": string;
    /**
     * 需要授权访问的数据库名称，多个数据库名称之间用英文逗号（,）分隔。
     * @example `testDB1`
     */
    "DBName": string;
    /**
     * 账号权限，填了多少个DBName值，就需要填多少个该参数值。取值含义：
     * * **ReadWrite**：读写
     * * **ReadOnly**：只读
     * * **DDLOnly**：仅执行DDL
     * * **DMLOnly**：只执行DML
     * * **DBOwner**：数据库所有者
     * > * MySQL和MariaDB可传入**ReadWrite**、**ReadOnly**、**DDLOnly**或**DMLOnly**。
     * > * SQL Server可传入**ReadWrite**、**ReadOnly**或**DBOwner**。
     * > * PostgreSQL云盘版可传入**DBOwner**。
     * @example `ReadWrite`
     */
    "AccountPrivilege": string;
}
