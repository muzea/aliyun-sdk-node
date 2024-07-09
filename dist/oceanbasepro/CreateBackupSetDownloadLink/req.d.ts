export interface CreateBackupSetDownloadLinkRequest {
    /**
     * 目标备份集所属 OceanBase 集群 ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId": string;
    /**
     * 目标备份集 ID。
     * @example `bak-6f****`
     */
    "BackupSetId": string;
}
