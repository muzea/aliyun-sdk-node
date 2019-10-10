interface RevokeAccountPrivilegeRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 账号名称。
    * @example `test1`
    */ "AccountName": string;
    /**
    * 数据库名称，撤销账号对该数据库的所有权限。多个数据库用英文逗号（,）隔开。
    * @example `testDB`
    */ "DBName": string;
    "OwnerId"?: number;
}
export { RevokeAccountPrivilegeRequest };