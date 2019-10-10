interface FindVersionMessagesRequest {
    "RegionId": string;
    "PageIndex": number;
    "PageSize": number;
    "VersionId": string;
    "VersionType": string;
    "ProjectId": string;
    "MessageType"?: string;
    "TestId"?: string;
    "SendRecordId"?: string;
    "DeviceId"?: string;
}
export { FindVersionMessagesRequest };