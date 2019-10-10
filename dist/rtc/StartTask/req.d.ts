interface StartTaskRequest {
    "RegionId"?: string;
    "AppId": string;
    "ChannelId": string;
    "TemplateId": number;
    "IdempotentId": string;
    "MixPanes": string[];
    "OwnerId"?: number;
}
export { StartTaskRequest };