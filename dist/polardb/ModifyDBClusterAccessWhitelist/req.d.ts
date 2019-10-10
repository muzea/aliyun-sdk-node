interface ModifyDBClusterAccessWhitelistRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "SecurityIps": string;
    "OwnerId"?: number;
    "DBClusterIPArrayName"?: string;
    "DBClusterIPArrayAttribute"?: string;
}
export { ModifyDBClusterAccessWhitelistRequest };