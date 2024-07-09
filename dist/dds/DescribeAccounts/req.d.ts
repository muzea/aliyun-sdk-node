export interface DescribeAccountsRequest {
    /**
     * 实例ID。
     * @example `dds-bp1fd530f271****`
     */
    "DBInstanceId": string;
    /**
     * 账号名，取值：**root**。
     * @example `root`
     */
    "AccountName"?: string;
}
