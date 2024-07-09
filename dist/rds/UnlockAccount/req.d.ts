export interface UnlockAccountRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp****`
     */
    "DBInstanceId": string;
    /**
     * 要解锁的账号名称。单次只能解锁一个账号。
     * @example `testaccount`
     */
    "AccountName": string;
}
