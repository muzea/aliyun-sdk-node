export interface DescribeLiveRecordNotifyRecordsRequest {
    "DomainName": string;
    "AppName"?: string;
    "StreamName"?: string;
    "PageSize": number;
    "PageNumber": number;
    "Status"?: string;
    "StartTime": string;
    "EndTime": string;
}
