export interface RevokeAccountPrivilegeRequest {
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
     * 数据库名称，撤销账号对该数据库的所有权限。多个数据库用英文逗号（,）隔开。
     * @example `testDB`
     */
    "DBName": string;
}
