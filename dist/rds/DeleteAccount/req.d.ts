export interface DeleteAccountRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 需要删除的数据库账号名称。
     * @example `test1`
     */
    "AccountName": string;
}
