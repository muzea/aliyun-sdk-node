export interface LockDBInstanceWriteResponse {
    /**
     * 请求 ID。
     * @example `2BE6E619-A657-42E3-AD2D-18F8428A****`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `r-2ev03avw0r0552***`
     */
    DBInstanceName: string;
    /**
     * 任务ID。
     * @example `21986****`
     */
    TaskId: number;
    /**
     * 锁定原因。
     * @example `锁定写操作测试。`
     */
    LockReason: string;
}
