interface CloseDBClusterMigrationRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "DBClusterId": string;
    "ContinueEnableBinlog"?: boolean;
}
export { CloseDBClusterMigrationRequest };