export interface DescribeAccountsRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 待查询的账号名。
     * @example `demoaccount`
     */
    "AccountName"?: string;
}
