interface RevokeAccountPrivilegeRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "AccountName": string;
    "DBName": string;
    "OwnerId"?: number;
}
export { RevokeAccountPrivilegeRequest };