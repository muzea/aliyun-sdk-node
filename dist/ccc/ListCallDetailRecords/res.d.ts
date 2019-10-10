// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.CallDetailAgent
export interface CallDetailAgent {
	SkillGroupName: string;
	StartTime: number;
	AgentName: string;
	HoldTime: number;
	AgentId: string;
	Feedback: string;
	ContactId: string;
	TalkTime: number;
	Satisfaction: string;
	QueueTime: number;
	RingTime: number;
	WorkTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.AgentsInListRecentCallRecords
export interface AgentsInListRecentCallRecords {
	CallDetailAgent: CallDetailAgent[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Recording
export interface Recording {
	ContactId: string;
	FileDescription: string;
	CalledNumber: string;
	QualityCheckTid: string;
	ContactType: string;
	CallingNumber: string;
	StartTime: number;
	AgentName: string;
	AgentId: string;
	Duration: number;
	InstanceId: string;
	Channel: string;
	QualityCheckTaskId: string;
	FileName: string;
	FilePath: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.RecordingsInListRecentCallRecords
export interface RecordingsInListRecentCallRecords {
	Recording: Recording[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.CallDetailRecord
export interface CallDetailRecord {
	ExtraAttr: string;
	Feedback: string;
	ContactId: string;
	AgentNames: string;
	CalledNumber: string;
	SatisfactionDesc: string;
	ContactType: string;
	StartTime: number;
	CallingNumber: string;
	SkillGroupNames: string;
	Duration: number;
	ContactDisposition: string;
	InstanceId: string;
	Satisfaction: number;
	Agents: AgentsInListRecentCallRecords;
	Recordings: RecordingsInListRecentCallRecords;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListInListRecentCallRecords
export interface ListInListRecentCallRecords {
	CallDetailRecord: CallDetailRecord[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.CallDetailRecords
export interface CallDetailRecords {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: ListInListRecentCallRecords;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ListCallDetailRecordsResponse
export interface ListCallDetailRecordsResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	CallDetailRecords: CallDetailRecords;
}

