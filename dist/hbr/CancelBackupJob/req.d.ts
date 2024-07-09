export interface CancelBackupJobRequest {
    /**
     * 备份任务ID。
     * @example `j-******************************`
     */
    "JobId": string;
    /**
     * 备份仓库ID。
     * @example `v-*****************************`
     */
    "VaultId"?: string;
}
