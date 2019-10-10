interface BandStartSpeedUpRequest {
    "RegionId"?: string;
    "IpAddress": string;
    "Port": number;
    "BandId": number;
    "Direction": string;
    "TargetBandwidth": number;
    "OwnerId"?: number;
    "BandScene"?: string;
}
export { BandStartSpeedUpRequest };