interface ModifyClusterNameRequest {
    "RegionId": string;
    "ClusterId": string;
    "ClusterName": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
}
export { ModifyClusterNameRequest };