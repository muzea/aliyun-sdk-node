interface ModifyDBClusterMigrationRequest {
    "RegionId"?: string;
    "SourceRDSDBInstanceId": string;
    "NewMasterInstanceId": string;
    "OwnerId"?: number;
    "DBClusterId": string;
}
export { ModifyDBClusterMigrationRequest };