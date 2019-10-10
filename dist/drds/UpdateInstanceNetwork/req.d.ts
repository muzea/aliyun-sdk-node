interface UpdateInstanceNetworkRequest {
    "RegionId"?: string;
    "SrcInstanceNetworkType": string;
    "DrdsInstanceId": string;
    "RetainClassic"?: boolean;
    "ClassicExpiredDays"?: number;
}
export { UpdateInstanceNetworkRequest };