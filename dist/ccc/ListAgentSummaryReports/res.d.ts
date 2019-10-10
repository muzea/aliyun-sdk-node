// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.OutboundInListAgentSummaryReportsSinceMidnight
export interface OutboundInListAgentSummaryReportsSinceMidnight {
	CallsDialed: number;
	CallsAnswered: number;
	AnswerRate: number;
	TotalDialingTime: number;
	MaxDialingTime: number;
	AverageDialingTime: number;
	TotalTalkTime: number;
	MaxTalkTime: number;
	AverageTalkTime: number;
	TotalWorkTime: number;
	MaxWorkTime: string;
	AverageWorkTime: number;
	SatisfactionIndex: number;
	SatisfactionSurveysOffered: number;
	SatisfactionSurveysResponded: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Overall
export interface Overall {
	TotalHoldTime: number;
	TotalLoggedInTime: number;
	MaxHoldTime: number;
	SatisfactionSurveysResponded: number;
	AverageWorkTime: number;
	AverageReadyTime: number;
	SatisfactionIndex: number;
	AverageTalkTime: number;
	MaxReadyTime: number;
	MaxTalkTime: number;
	TotalTalkTime: number;
	TotalCalls: number;
	TotalReadyTime: number;
	MaxWorkTime: number;
	TotalWorkTime: number;
	TotalBreakTime: number;
	SatisfactionSurveysOffered: number;
	AverageHoldTime: number;
	OccupancyRate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.InboundInListAgentSummaryReportsSinceMidnight
export interface InboundInListAgentSummaryReportsSinceMidnight {
	CallsOffered: number;
	CallsHandled: number;
	HandleRate: number;
	TotalRingTime: number;
	MaxRingTime: number;
	AverageRingTime: number;
	ServiceLevel20: number;
	TotalTalkTime: number;
	MaxTalkTime: number;
	AverageTalkTime: number;
	TotalWorkTime: number;
	MaxWorkTime: number;
	AverageWorkTime: number;
	SatisfactionIndex: number;
	SatisfactionSurveysOffered: number;
	SatisfactionSurveysResponded: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.AgentSummaryReport
export interface AgentSummaryReport {
	SkillGroupNames: string;
	AgentName: string;
	AgentId: string;
	Timestamp: string;
	SkillGroupIds: string;
	InstanceId: string;
	LoginName: string;
	Outbound: OutboundInListAgentSummaryReportsSinceMidnight;
	Overall: Overall;
	Inbound: InboundInListAgentSummaryReportsSinceMidnight;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInListAgentSummaryReports
export interface ListInListAgentSummaryReports {
	AgentSummaryReport: AgentSummaryReport[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PagedAgentSummaryReport
export interface PagedAgentSummaryReport {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInListAgentSummaryReports;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListAgentSummaryReportsResponse
export interface ListAgentSummaryReportsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	PagedAgentSummaryReport: PagedAgentSummaryReport;
}

