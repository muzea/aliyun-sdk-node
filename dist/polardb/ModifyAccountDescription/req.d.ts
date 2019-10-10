interface ModifyAccountDescriptionRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "AccountName": string;
    "AccountDescription": string;
    "OwnerId"?: number;
}
export { ModifyAccountDescriptionRequest };