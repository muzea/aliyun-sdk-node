interface GrantAccountPrivilegeRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 账号名称。
    * @example `test1`
    */ "AccountName": string;
    /**
    * 需要授权访问的数据库名称。
    * @example `testDB`
    */ "DBName": string;
    /**
    * 账号权限，取值：
    * * **ReadWrite**：读写；
    * * **ReadOnly**：只读；
    * * **DDLOnly**：仅执行DDL，适用于MySQL和MariaDB；
    * * **DMLOnly**：只执行DML，适用于MySQL和MariaDB；
    * * **DBOwner**：数据库所有者，适用于SQL Server。
    * @example `ReadWrite`
    */ "AccountPrivilege": string;
    "OwnerId"?: number;
}
export { GrantAccountPrivilegeRequest };