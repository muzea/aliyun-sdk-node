// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Contact
export interface Contact {
	ContactName: string;
	JobId: string;
	PhoneNumber: string;
	State: string;
	Role: string;
	ContactId: string;
	Honorific: string;
	ReferenceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.SummaryItem
export interface SummaryItem {
	Category: string;
	SummaryId: string;
	JobId: string;
	TaskId: string;
	ConversationDetailId: string;
	Content: string;
	SummaryName: string;
	GroupId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.ConversationDetail
export interface ConversationDetail {
	ConversationDetailId: string;
	TaskId: string;
	Timestamp: number;
	Script: string;
	Speaker: string;
	Summary: SummaryItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Task
export interface Task {
	JobId: string;
	Brief: string;
	PlanedTime: number;
	CallId: string;
	ScenarioId: string;
	CalledNumber: string;
	EndTime: number;
	CallingNumber: string;
	TaskId: string;
	Duration: number;
	ChatbotId: string;
	ActualTime: number;
	Status: string;
	Contact: Contact;
	Conversation: ConversationDetail[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.KeyValuePair
export interface KeyValuePair {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Job
export interface Job {
	JobId: string;
	JobGroupId: string;
	Priority: number;
	ReferenceId: string;
	StrategyId: string;
	ScenarioId: string;
	SystemPriority: number;
	FailureReason: string;
	GroupId: string;
	Status: string;
	CallingNumbers: string[];
	Tasks: Task[];
	Extras: KeyValuePair[];
	Contacts: Contact[];
	Summary: SummaryItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.Jobs
export interface Jobs {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	List: Job[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetJobListResponse
export interface GetJobListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Jobs: Jobs;
}

