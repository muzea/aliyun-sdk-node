export interface DescribeLocalAvailableRecoveryTimeResponse {
    /**
     * 备份可恢复的终止时间。
     * @example `2023-09-18T08:03:09Z`
     */
    RecoveryEndTime: string;
    /**
     * 实例ID。
     * @example `rm-bp1f****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `291534CC-922B-55D5-8657-B29****`
     */
    RequestId: string;
    /**
     * 备份可恢复的起始时间。
     * @example `2023-09-11T09:48:52Z`
     */
    RecoveryBeginTime: string;
}
