interface QueryMonitorInfoRequest {
    "RegionId"?: string;
    "Start": number;
    "End": number;
    "Metric": string;
    "Tags": string;
    "Aggregator": string;
    "Interval"?: string;
}
export { QueryMonitorInfoRequest };