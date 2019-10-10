interface StartLiveIndexRequest {
    "RegionId"?: string;
    "AppName": string;
    "StreamName": string;
    "TokenId": string;
    "InputUrl": string;
    "OwnerId"?: number;
    "DomainName": string;
    "Interval"?: number;
    "OssBucket"?: string;
    "OssEndpoint"?: string;
    "OssUserId"?: string;
    "OssRamRole"?: string;
}
export { StartLiveIndexRequest };