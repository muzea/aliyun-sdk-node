interface AssumeRoleRequest {
    "RegionId"?: string;
    "RoleArn": string;
    "RoleSessionName": string;
    "DurationSeconds"?: number;
    "Policy"?: string;
}
export { AssumeRoleRequest };