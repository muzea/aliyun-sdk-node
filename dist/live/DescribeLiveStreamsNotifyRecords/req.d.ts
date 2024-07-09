export interface DescribeLiveStreamsNotifyRecordsRequest {
    "DomainName": string;
    "AppName"?: string;
    "StreamName"?: string;
    "Status"?: string;
    "StartTime": string;
    "EndTime": string;
    "PageSize"?: number;
    "PageNumber"?: number;
}
