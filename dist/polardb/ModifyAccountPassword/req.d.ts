export interface ModifyAccountPasswordRequest {
    /**
     * 集群ID。
     * @example `pc-************`
     */
    "DBClusterId": string;
    /**
     * 账号名称。
     * @example `testacc`
     */
    "AccountName": string;
    /**
     * 账号的新密码，需符合如下要求：
     * * 至少包含大写字母、小写字母、数字或特殊字符中的任意三种。
     * * 长度为8~32个字符。
     * * 特殊字符为`!@#$%^&*()_+-=`。
     * @example `Pw123456`
     */
    "NewAccountPassword": string;
    /**
     * 密码类型
     * @example `Tair`
     */
    "PasswordType"?: string;
}
