interface GrantOperatorPermissionRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "ExpiredTime": string;
    "Privileges": string;
    "OwnerId"?: number;
}
export { GrantOperatorPermissionRequest };