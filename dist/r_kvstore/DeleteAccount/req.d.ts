export interface DeleteAccountRequest {
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
}
