interface StopLiveIndexRequest {
    "RegionId"?: string;
    "AppName": string;
    "StreamName": string;
    "TaskId": string;
    "OwnerId"?: number;
    "DomainName": string;
}
export { StopLiveIndexRequest };