export interface RemoveBandwidthPackageIpsRequest {
    "RegionId": string;
    "BandwidthPackageId": string;
    "ClientToken"?: string;
    "RemovedIpAddresses": string[];
}
