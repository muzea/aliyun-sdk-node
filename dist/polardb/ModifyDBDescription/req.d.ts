interface ModifyDBDescriptionRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "DBName": string;
    "DBDescription": string;
    "OwnerId"?: number;
}
export { ModifyDBDescriptionRequest };