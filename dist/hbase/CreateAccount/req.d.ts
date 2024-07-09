export interface CreateAccountRequest {
    /**
     * 实例ID。
     * @example `ld-bp150tns0sjxs****`
     */
    "ClusterId": string;
    /**
     * 账号名称，需符合如下要求：
     * * 以小写字母开头，以字母或数字结尾。
     * * 由小写字母、数字或下划线组成。
     * * 长度为2~16个字符。
     * * 不能使用某些预留的用户名，如root、admin等。
     * @example `test01`
     */
    "AccountName": string;
    /**
     * 数据库账号的密码。需遵循以下要求：
     * - 由大写字母、小写字母、数字、特殊字符中的任意三种组成。
     * - 特殊字符为`!@#$%^&*()_+-=`。
     * - 长度为8~32个字符。
     * @example `test*****`
     */
    "AccountPassword": string;
}
