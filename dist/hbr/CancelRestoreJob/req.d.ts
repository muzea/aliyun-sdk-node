export interface CancelRestoreJobRequest {
    /**
     * 恢复任务ID。
     * @example `r-*********************`
     */
    "RestoreId": string;
    /**
     * 备份仓库ID。
     * @example `v-*********************`
     */
    "VaultId": string;
}
