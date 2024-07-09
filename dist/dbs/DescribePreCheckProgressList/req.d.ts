export interface DescribePreCheckProgressListRequest {
    /**
     * 备份计划ID。
     * > 请填入BackupPlanId或RestoreTaskId。
     * @example `dbsr1l3ro21****`
     */
    "BackupPlanId"?: string;
    /**
     * 恢复任务ID。
     * @example `dbasdsa****`
     */
    "RestoreTaskId"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCziJZNwH****`
     */
    "ClientToken"?: string;
}
