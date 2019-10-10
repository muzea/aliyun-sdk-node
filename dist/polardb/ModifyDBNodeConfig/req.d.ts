interface ModifyDBNodeConfigRequest {
    "RegionId"?: string;
    "DBNodeId": string;
    "ConfigName": string;
    "ConfigValue": string;
    "OwnerId"?: number;
    "DBClusterId": string;
}
export { ModifyDBNodeConfigRequest };