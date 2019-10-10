interface ChangeInstanceNetworkRequest {
    "RegionId"?: string;
    "SrcInstanceNetworkType": string;
    "DrdsInstanceId": string;
    "VpcId"?: string;
    "VswitchId"?: string;
    "RetainClassic"?: boolean;
    "ClassicExpiredDays"?: number;
}
export { ChangeInstanceNetworkRequest };