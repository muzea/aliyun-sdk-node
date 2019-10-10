interface GrantAccountPrivilegeRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "AccountName": string;
    "DBName": string;
    "AccountPrivilege": string;
    "OwnerId"?: number;
}
export { GrantAccountPrivilegeRequest };