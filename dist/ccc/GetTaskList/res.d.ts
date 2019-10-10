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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetTaskListResponse
export interface GetTaskListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Tasks: Task[];
}

