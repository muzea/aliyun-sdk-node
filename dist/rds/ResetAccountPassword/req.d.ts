export interface ResetAccountPasswordRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 数据库账号名称。
     * @example `test1`
     */
    "AccountName": string;
    /**
     * 新密码。
     * > * 长度为8~32个字符。
     * > * 由大写字母、小写字母、数字、特殊字符中的任意三种组成。
     * > * 特殊字符为`!@#$&%^*()_+-=`
     * @example `Test123456`
     */
    "AccountPassword": string;
}
