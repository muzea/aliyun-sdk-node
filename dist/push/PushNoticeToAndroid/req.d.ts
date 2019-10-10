interface PushNoticeToAndroidRequest {
    "RegionId"?: string;
    "AppKey": number;
    "Target": string;
    "TargetValue": string;
    "Title": string;
    "Body": string;
    "JobKey"?: string;
    "ExtParameters"?: string;
}
export { PushNoticeToAndroidRequest };