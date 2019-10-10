// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SummaryReport
export interface SummaryReport {
	Year: number;
	Month: number;
	Day: number;
	InboundCount: number;
	OutboundCount: number;
	OutboundDurationByMinute: number;
	InboundDurationByMinute: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.NumberReport
export interface NumberReport {
	Number: string;
	Year: number;
	Month: number;
	Day: number;
	InboundCount: number;
	OutboundCount: number;
	OutboundDurationByMinute: number;
	InboundDurationByMinute: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInGetCallMeasureSummaryReport
export interface ListInGetCallMeasureSummaryReport {
	NumberReport: NumberReport[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.NumberReports
export interface NumberReports {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInGetCallMeasureSummaryReport;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetCallMeasureSummaryReportResponse
export interface GetCallMeasureSummaryReportResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	SummaryReport: SummaryReport;
	NumberReports: NumberReports;
}

