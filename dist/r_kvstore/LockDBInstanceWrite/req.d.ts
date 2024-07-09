export interface LockDBInstanceWriteRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "DBInstanceId": string;
    /**
     * 锁定原因。
     * @example `锁写操作验证。`
     */
    "LockReason": string;
}
