// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.InboundInGenerateAgentStatisticReport
export interface InboundInGenerateAgentStatisticReport {
	TotalTalkTime: number;
	MaxTalkTime: number;
	AverageTalkTime: number;
	TotalHoldTime: number;
	MaxHoldTime: number;
	AverageHoldTime: number;
	TotalWorkTime: number;
	MaxWorkTime: number;
	AverageWorkTime: number;
	SatisfactionSurveysOffered: number;
	SatisfactionSurveysResponded: number;
	SatisfactionIndex: number;
	CallsOffered: number;
	CallsHandled: number;
	HandleRate: number;
	TotalRingTime: number;
	MaxRingTime: number;
	AverageRingTime: number;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Outbound
export interface Outbound {
	TotalHoldTime: number;
	CallsDialed: number;
	MaxHoldTime: number;
	AverageDialingTime: number;
	SatisfactionSurveysResponded: number;
	AverageWorkTime: number;
	CallsAnswered: number;
	SatisfactionIndex: number;
	AverageTalkTime: number;
	AnswerRate: number;
	MaxTalkTime: number;
	TotalTalkTime: number;
	TotalDialingTime: number;
	MaxWorkTime: number;
	TotalWorkTime: number;
	SatisfactionSurveysOffered: number;
	AverageHoldTime: number;
	MaxDialingTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GenerateAgentStatistic
export interface GenerateAgentStatistic {
	TotalLoggedInTime: number;
	RecordDate: string;
	SkillGroupIds: string;
	AverageReadyTime: number;
	SkillGroupNames: string;
	MaxReadyTime: number;
	AgentName: string;
	AgentId: string;
	LoginName: string;
	InstanceId: string;
	TotalReadyTime: number;
	TotalBreakTime: number;
	OccupancyRate: number;
	Inbound: InboundInGenerateAgentStatisticReport;
	Overall: Overall;
	Outbound: Outbound;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInGenerateAgentStatisticReport
export interface ListInGenerateAgentStatisticReport {
	GenerateAgentStatistic: GenerateAgentStatistic[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.DataListInGenerateAgentStatisticReport
export interface DataListInGenerateAgentStatisticReport {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInGenerateAgentStatisticReport;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GenerateAgentStatisticReportResponse
export interface GenerateAgentStatisticReportResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	DataList: DataListInGenerateAgentStatisticReport;
}

