interface PushNoticeToiOSRequest {
    "RegionId"?: string;
    "AppKey": number;
    "Target": string;
    "TargetValue": string;
    "ApnsEnv": string;
    "Body": string;
    "Title"?: string;
    "JobKey"?: string;
    "ExtParameters"?: string;
}
export { PushNoticeToiOSRequest };