export interface ResetAccountPasswordRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-t4nf48vf15713****`
     */
    "DBInstanceId": string;
    /**
     * 数据库账号的名称。
     * @example `testaccount_1`
     */
    "AccountName": string;
    /**
     * 数据库账号密码。
     * - 由大写字母、小写字母、数字、特殊字符中的任意三种组成。
     * - 特殊符号包含：`!@#$%^&*()_+-=`
     * - 密码长度为8~32个字符。
     * @example `Testaccount_1`
     */
    "AccountPassword": string;
}
