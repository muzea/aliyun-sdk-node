export interface ModifyAccountPasswordRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 待修改密码的账号名，您可以调用[DescribeAccounts](~~95802~~)获取。
     * @example `testaccount`
     */
    "AccountName": string;
    /**
     * 该账号的原密码。
     * > 如果忘记账号的密码，您也可以调用[ResetAccountPassword](~~95941~~)接口重置密码。
     * @example `oldPassWd999****`
     */
    "OldAccountPassword": string;
    /**
     * 该账号要设置的新密码。密码长度为8~32位，需包含大写字母、小写字母、数字、特殊字符中的至少三种，特殊字符为`!@#$%^&*()_+-=`。
     * @example `newPassWd888****`
     */
    "NewAccountPassword": string;
}
