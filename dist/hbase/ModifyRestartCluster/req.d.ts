interface ModifyRestartClusterRequest {
    "RegionId": string;
    "ClusterId": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
    "Components"?: string;
}
export { ModifyRestartClusterRequest };