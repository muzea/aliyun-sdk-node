export interface ResetAccountPasswordRequest {
    /**
     * 账号所属实例的ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 账号名，您可以调用[DescribeAccounts](~~95802~~)获取。
     * @example `demoaccount`
     */
    "AccountName": string;
    /**
     * 新密码。长度为8~32位，需包含大写字母、小写字母、特殊字符和数字中的至少三种，允许的特殊字符包括`!@#$%^&*()_+-=`。
     * @example `uWonno_221****`
     */
    "AccountPassword": string;
}
