interface SearchLogRequest {
    "RegionId": string;
    "ClusterId": string;
    "LogstoreName": string;
    "FromTimestamp": number;
    "ToTimestamp": number;
    "SlsQueryString": string;
    "Offset": number;
    "Line": number;
    "Reverse": boolean;
    "HostInnerIp"?: string;
    "HostName"?: string;
}
export { SearchLogRequest };