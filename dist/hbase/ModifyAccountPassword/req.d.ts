export interface ModifyAccountPasswordRequest {
    /**
     * 目标实例ID，可调用DescribeInstances接口获取。
     * @example `ld-bp150tns0sjxs****`
     */
    "ClusterId": string;
    /**
     * 账号名称。
     * @example `test01`
     */
    "AccountName": string;
    /**
     * 账号的新密码，需符合以下要求：
     * * 至少包含大写字母、小写字母、数字或特殊字符中的任意三种。
     * * 长度为8~32个字符。
     * * 特殊字符为`!@#$%^&*()_+-=`。
     * @example `test*****`
     */
    "NewAccountPassword": string;
}
