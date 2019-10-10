interface GetAccountingReportRequest {
    "RegionId": string;
    "ClusterId": string;
    "StartTime": number;
    "EndTime": number;
    "ReportType"?: string;
}
export { GetAccountingReportRequest };