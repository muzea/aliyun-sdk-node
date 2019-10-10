interface RemoveBandwidthPackageIpsRequest {
    "RegionId": string;
    "BandwidthPackageId": string;
    "RemovedIpAddresses": string[];
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { RemoveBandwidthPackageIpsRequest };