interface QueryMetricRequest {
    "RegionId"?: string;
    "EndTime": number;
    "Metric": string;
    "Measures": string[];
    "IntervalInSec"?: number;
    "OrderBy"?: string;
    "Limit"?: number;
    "Filters"?: string[];
    "Dimensions"?: string[];
    "Order"?: string;
    "StartTime": number;
}
export { QueryMetricRequest };