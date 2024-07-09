export interface LockAccountRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp****`
     */
    "DBInstanceId": string;
    /**
     * 要锁定的账号名称。单次只能锁定一个账号。
     * @example `testaccount`
     */
    "AccountName": string;
}
