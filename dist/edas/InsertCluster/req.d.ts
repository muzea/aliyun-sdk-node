interface InsertClusterRequest {
    "RegionId"?: string;
    "ClusterName": string;
    "ClusterType": number;
    "NetworkMode": number;
    "LogicalRegionId"?: string;
    "VpcId"?: string;
    "OversoldFactor"?: number;
    "IaasProvider"?: string;
}
export { InsertClusterRequest };