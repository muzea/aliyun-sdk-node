interface CheckResourceRequest {
    "RegionId": string;
    "EngineVersion": string;
    "DBInstanceClass": string;
    "ZoneId": string;
    "Engine": string;
    "OwnerId"?: number;
    "DBInstanceId"?: string;
    "DBInstanceUseType"?: string;
    "SpecifyCount"?: string;
}
export { CheckResourceRequest };