export interface ModifyAccountDescriptionRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 账号名，您可以调用[DescribeAccounts](~~95802~~)获取。
     * @example `demoaccount`
     */
    "AccountName": string;
    /**
     * 要设置的账号描述。
     * * 以中文、英文字母开头，不能以`http://`或`https://`开头。
     * * 可以包含中文、英文字母、数字、下划线（_）和短横线。
     * * 长度为2~256个字符。
     * @example `testescription`
     */
    "AccountDescription": string;
}
