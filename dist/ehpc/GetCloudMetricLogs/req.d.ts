interface GetCloudMetricLogsRequest {
    "RegionId": string;
    "ClusterId": string;
    "From": number;
    "To": number;
    "Reverse"?: boolean;
    "AggregationType"?: string;
    "AggregationInterval"?: number;
    "MetricScope"?: string;
    "Filter"?: string;
    "MetricCategories"?: string;
}
export { GetCloudMetricLogsRequest };