interface DelayPublishOsVersionRequest {
    "RegionId": string;
    "ProjectId": string;
    "VersionId": string;
    "Email": string;
    "PrepubTime"?: number;
    "PublishTime"?: number;
    "DownTime"?: number;
    "Description"?: string;
    "SendMessage"?: string;
    "PrepublishCount"?: string;
}
export { DelayPublishOsVersionRequest };