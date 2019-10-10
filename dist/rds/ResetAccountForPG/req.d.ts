interface ResetAccountForPGRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "AccountName": string;
    "AccountPassword": string;
    "OwnerId"?: number;
}
export { ResetAccountForPGRequest };