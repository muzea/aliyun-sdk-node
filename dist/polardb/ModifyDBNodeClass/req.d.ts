interface ModifyDBNodeClassRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "ModifyType": string;
    "DBNodeTargetClass": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { ModifyDBNodeClassRequest };