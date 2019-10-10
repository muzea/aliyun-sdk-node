interface DescribeRequestStatisticByEsnBizIntervalRequest {
    "RegionId"?: string;
    "EsnApp": string;
    "EsnBiz": string;
    "StartTime": number;
    "EndTime": number;
    "Interval": number;
    "Page": string;
    "PageSize": string;
    "SourceIp"?: string;
    "Lang"?: string;
    "Province"?: string;
    "Country"?: string;
}
export { DescribeRequestStatisticByEsnBizIntervalRequest };