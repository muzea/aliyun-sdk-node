export interface ResetAccountPasswordRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    "DBClusterId": string;
    /**
     * 数据库账号名。
     * @example `test_accout`
     */
    "AccountName": string;
    /**
     * 数据库账号名密码。
     * - 密码由大写字母、小写字母、数字以及特殊符号组成。
     * - 特殊符号包含：（!）、（@）、（#）、（$）、（%）、（^）、（&）、（*）（()）、（_）、（+）、（-）、（=）
     * - 密码长度为8字符~32个字符。
     * @example `Test_accout1`
     */
    "AccountPassword": string;
    /**
     * 1. Normal：普通账号；
     * 2. Super：高权限账号。
     * @example `Normal`
     */
    "AccountType"?: string;
}
