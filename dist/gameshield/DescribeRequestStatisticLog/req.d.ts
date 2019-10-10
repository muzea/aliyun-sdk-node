interface DescribeRequestStatisticLogRequest {
    "RegionId"?: string;
    "StartTime": number;
    "EndTime": number;
    "Page": number;
    "PageSize": number;
    "SourceIp"?: string;
    "Lang"?: string;
    "EsnApp"?: string;
    "EsnBiz"?: string;
    "EsnGroup"?: string;
    "Source"?: string;
    "Country"?: string;
    "Province"?: string;
    "City"?: string;
    "ISP"?: string;
    "Token"?: string;
    "SDK"?: string;
    "CallResult"?: string;
    "OsType"?: string;
    "EscapedLessThan"?: number;
    "EscapedGreaterThan"?: number;
    "DetectIp"?: string;
}
export { DescribeRequestStatisticLogRequest };