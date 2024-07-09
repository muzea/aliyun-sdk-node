export interface CreateAccountRequest {
    /**
     * 实例ID。
     * @example `dds-uf6e9433e955xxxx`
     */
    "DBInstanceId": string;
    /**
     * 账号名。由小写字母、数字或下划线组成，以小写字母开头，长度为4~16个字符。权限为只读。
     * @example `admin1`
     */
    "AccountName": string;
    /**
     * 账户密码。
     * 大写、小写、数字、特殊字符占三种，长度为8~32个字符；特殊字符为 ! # $ % ^ & * ( ) _ + - =
     * @example `Test123456!`
     */
    "AccountPassword": string;
}
