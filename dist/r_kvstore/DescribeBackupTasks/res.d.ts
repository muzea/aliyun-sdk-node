export interface DescribeBackupTasksResponse {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    InstanceId: string;
    /**
     * 请求ID。
     * @example `BB73740C-23E2-4392-9DA4-2660C74C****`
     */
    RequestId: string;
    /**
     * 备份任务详情。
     */
    BackupJobs: {
        /**
         * 备份任务开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2021-01-05T19:24:00Z`
         */
        StartTime: string;
        /**
         * 备份任务进度百分比。
         * @example `0`
         */
        Process: string;
        /**
         * 备份模式，返回值：
         * * **Automated**：系统自动备份。
         * * **Manual**：手动备份。
         * @example `Manual`
         */
        JobMode: string;
        /**
         * 备份任务ID。
         * @example `29****10`
         */
        BackupJobID: number;
        /**
         * 备份任务状态，返回值：
         * * **NoStart**：未开始。
         * * **Preparing**：准备中。
         * * **Waiting**：等待中。
         * * **Uploading**：上传中
         * * **Checking**：检查中。
         * * **Finished**：已完成。
         * @example `NoStart`
         */
        BackupProgressStatus: string;
        /**
         * 数据节点ID。
         * @example `****`
         */
        NodeId: string;
        /**
         * 备份任务类型，返回值：
         * * **TempBackupTask**：临时备份任务，即手动备份。
         * * **NormalBackupTask**：普通备份任务，即自动备份。
         * @example `NormalBackupTask`
         */
        TaskAction: string;
    }[];
    /**
     * 本组参数已弃用，请忽略。
     */
    AccessDeniedDetail: {
        /**
         * 说明如上。
         * @example `_`
         */
        AuthAction: string;
        /**
         * 说明如上。
         * @example `_`
         */
        AuthPrincipalDisplayName: string;
        /**
         * 说明如上。
         * @example `_`
         */
        AuthPrincipalOwnerId: string;
        /**
         * 说明如上。
         * @example `_`
         */
        AuthPrincipalType: string;
        /**
         * 说明如上。
         * @example `_`
         */
        EncodedDiagnosticMessage: string;
        /**
         * 说明如上。
         * @example `_`
         */
        NoPermissionType: string;
        /**
         * 说明如上。
         * @example `_`
         */
        PolicyType: string;
    };
}
