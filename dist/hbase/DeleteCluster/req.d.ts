interface DeleteClusterRequest {
    "RegionId": string;
    "ClusterId": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "ZoneId"?: string;
}
export { DeleteClusterRequest };