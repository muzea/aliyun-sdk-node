interface DeleteBackupRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "BackupId": string;
    "OwnerId"?: number;
}
export { DeleteBackupRequest };