// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.CallMeasureSummaryReport
export interface CallMeasureSummaryReport {
	Year: string;
	Month: string;
	Day: string;
	InboundCount: number;
	OutboundCount: number;
	OutboundDurationByMinute: number;
	InboundDurationByMinute: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.CallMeasureSummaryReportList
export interface CallMeasureSummaryReportList {
	CallMeasureSummaryReport: CallMeasureSummaryReport[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListCallMeasureSummaryReportsResponse
export interface ListCallMeasureSummaryReportsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	CallMeasureSummaryReportList: CallMeasureSummaryReportList;
}

