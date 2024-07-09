export interface CreateAccountRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 账号名，需满足以下条件：
     * * 以英文字母开头，由小写英文字母、数字或下划线（_）组成。
     * * 长度不超过100个字符。
     * * 不能为[Redis账号名保留字](~~92665~~#title-84o-mok-b6h)。
     * @example `demoaccount`
     */
    "AccountName": string;
    /**
     * 账号权限，取值：
     * * **RoleReadOnly**：只读权限。
     * * **RoleReadWrite**：读写权限，默认值。
     * @example `RoleReadOnly`
     */
    "AccountPrivilege"?: string;
    /**
     * 账号的密码。长度为8~32位，需包含大写字母、小写字母、特殊字符和数字中的至少三种，允许的特殊字符包括`!@#$%^&*()_+-=`。
     * @example `uWonno21****`
     */
    "AccountPassword": string;
    /**
     * 账号描述。
     * * 需以中文、英文字母开头，不能以`http: //`或`https: //`开头。
     * * 可以包含中文、英文字母、数字、下划线（_）和短划线（-）。
     * * 长度为2~256个字符。
     * @example `testaccount`
     */
    "AccountDescription"?: string;
    /**
     * 账号类型，取值固定为**Normal**（普通账号）。
     * @example `Normal`
     */
    "AccountType"?: string;
}
