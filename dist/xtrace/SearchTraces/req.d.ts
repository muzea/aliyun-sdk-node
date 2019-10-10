interface SearchTracesRequest {
    "RegionId": string;
    "EndTime": number;
    "StartTime": number;
    "ServiceName"?: string;
    "OperationName"?: string;
    "MinDuration"?: number;
    "AppType"?: string;
    "Tag"?: string[];
    "PageNumber"?: number;
    "PageSize"?: number;
    "Reverse"?: boolean;
    "ServiceIp"?: string;
}
export { SearchTracesRequest };