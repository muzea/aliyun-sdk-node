interface DescribeNgSourceDiagnosisLogRequest {
    "RegionId"?: string;
    "StartTime": number;
    "EndTime": number;
    "Page": number;
    "PageSize": number;
    "SourceIp"?: string;
    "Lang"?: string;
    "AppId"?: string;
    "BizId"?: string;
    "Source"?: string;
    "SourcePort"?: string;
    "DetectPort"?: string;
    "DetectIp"?: string;
}
export { DescribeNgSourceDiagnosisLogRequest };