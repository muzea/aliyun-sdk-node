// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ccc.GetConversationListResponse
export interface GetConversationListResponse {
	RequestId: string;
	Success: boolean;
	Code: string;
	Message: string;
	HttpStatusCode: number;
	Conversations: ConversationDetail[];
}

