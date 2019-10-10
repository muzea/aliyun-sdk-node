interface ResetAccountRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "AccountName": string;
    "AccountPassword": string;
    "OwnerId"?: number;
}
export { ResetAccountRequest };