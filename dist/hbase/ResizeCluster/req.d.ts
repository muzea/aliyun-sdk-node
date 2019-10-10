interface ResizeClusterRequest {
    "RegionId": string;
    "ZoneId": string;
    "CoreInstanceQuantity": string;
    "Engine": string;
    "ClusterId": string;
    "CloudType": string;
    "UpgradeType": string;
    "ClientToken"?: string;
    "CoreInstanceType"?: string;
    "CoreDiskType"?: string;
    "CoreDiskSize"?: string;
    "CoreDiskQuantity"?: string;
    "PayType"?: string;
    "IsColdStorage"?: string;
    "ColdStorageSize"?: string;
}
export { ResizeClusterRequest };