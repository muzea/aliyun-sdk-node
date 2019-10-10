interface ModifyAccountPasswordRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "AccountName": string;
    "NewAccountPassword": string;
    "OwnerId"?: number;
}
export { ModifyAccountPasswordRequest };