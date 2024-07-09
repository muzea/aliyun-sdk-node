export interface UpdateOTAJobRequest {
    "MaximumPerMinute": number;
    "JobId": string;
    "UpgradeType": string;
    "TimeoutInMinutes"?: number;
    "TargetSelection": string;
    "IotInstanceId"?: string;
    "SrcVersionList"?: string[];
    "Tags"?: {
        Key: string;
        Value: string;
    }[];
}
