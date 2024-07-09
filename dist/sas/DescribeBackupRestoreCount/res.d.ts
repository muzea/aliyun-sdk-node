export interface DescribeBackupRestoreCountResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `ECC6B3E3-D496-512D-B46D-E6996A6B63EE`
     */
    RequestId: string;
    /**
     * 防勒索恢复任务的统计数据。
     */
    BackupRestoreCount: {
        /**
         * 已创建的恢复任务的总数量。
         * @example `30`
         */
        Total: number;
        /**
         * 状态为**恢复中**的任务的数量。
         * @example `3`
         */
        Recovering: number;
    };
}
