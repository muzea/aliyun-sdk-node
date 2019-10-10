// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.Report
export interface Report {
	DiagnosticTime: string;
	Score: number;
	StartTime: string;
	EndTime: string;
	DownloadURL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDiagnosticReportListResponse
export interface DescribeDiagnosticReportListResponse {
	RequestId: string;
	ReportList: Report[];
}

