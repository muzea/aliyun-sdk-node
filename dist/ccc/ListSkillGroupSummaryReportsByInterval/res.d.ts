// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Inbound
export interface Inbound {
	CallsIncomingIVR: number;
	GiveUpByAgentOfQueueCount: number;
	CallsIncomingQueue: number;
	TotalRingTime: number;
	CallsIncomingLine: number;
	AnsweredByAgentOfQueueCount: number;
	InComingQueueOfQueueCount: number;
	MaxRingTime: number;
	AverageRingTime: number;
	AnsweredByAgentOfQueueWaitTimeDuration: number;
	CallsAbandonedInQueue: number;
	MaxTalkTime: string;
	MaxWorkTime: number;
	TotalWorkTime: number;
	SatisfactionSurveysOffered: number;
	ServiceLevel20: number;
	SatisfactionSurveysResponded: number;
	HandleRate: number;
	AverageWorkTime: number;
	SatisfactionIndex: number;
	QueueMaxWaitTimeDuration: number;
	AverageTalkTime: number;
	AbandonedInQueueOfQueueCount: number;
	OverFlowInQueueOfQueueCount: number;
	TotalTalkTime: number;
	CallsAbandonedInIVR: number;
	QueueWaitTimeDuration: number;
	CallsOffered: number;
	CallsHandled: number;
	AnsweredByAgentOfQueueMaxWaitTimeDuration: number;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SkillGroupSummaryReport
export interface SkillGroupSummaryReport {
	SkillGroupName: string;
	SkillGroupId: string;
	Timestamp: string;
	InstanceId: string;
	Outbound: Outbound;
	Inbound: Inbound;
	Overall: Overall;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.IntervalListInListSkillGroupSummaryReportsByInterval
export interface IntervalListInListSkillGroupSummaryReportsByInterval {
	SkillGroupSummaryReport: SkillGroupSummaryReport[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SkillGroupTimeIntervalReport
export interface SkillGroupTimeIntervalReport {
	SkillGroupId: string;
	IntervalList: IntervalListInListSkillGroupSummaryReportsByInterval;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInListSkillGroupSummaryReportsByInterval
export interface ListInListSkillGroupSummaryReportsByInterval {
	SkillGroupTimeIntervalReport: SkillGroupTimeIntervalReport[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.PagedSkillGroupSummaryReportInListSkillGroupSummaryReportsByInterval
export interface PagedSkillGroupSummaryReportInListSkillGroupSummaryReportsByInterval {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInListSkillGroupSummaryReportsByInterval;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListSkillGroupSummaryReportsByIntervalResponse
export interface ListSkillGroupSummaryReportsByIntervalResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	PagedSkillGroupSummaryReport: PagedSkillGroupSummaryReportInListSkillGroupSummaryReportsByInterval;
}

