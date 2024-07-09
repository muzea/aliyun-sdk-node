export interface QueryUserInfoByAccountRequest {
    /**
     * 输入待查询的阿里云账号名或阿里云ID。
     * - 当输入账号名时：
     *     - 如果组织用户是主账号（例如main_account），则查询账号格式为主账号。即，要输入的主账号main_account。
     *     - 如果组织用户是子账号（例如zhangsan@test.onaliyun.com），则查询账号格式为子账号的头部，即，要输入的子账号为zhangsan。
     * - 当输入阿里云ID时：
     *     - 输入完整的账号UID，即可查询到对应的账号信息。
     * @example `1386587****@163.com`
     */
    "Account": string;
    /**
     * 当查询子账号出现重复报错时，输入主账号的账号名，
     * 例如zhangsan@test.onaliyun.com。
     * @example `zhangsan@test.onaliyun.com`
     */
    "ParentAccountName"?: string;
}
