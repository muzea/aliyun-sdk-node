// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/fnf.EventsItem
export interface EventsItem {
	StepName: string;
	Type: string;
	EventId: number;
	ScheduleEventId: number;
	EventDetail: string;
	Time: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/fnf.GetExecutionHistoryResponse
export interface GetExecutionHistoryResponse {
	RequestId: string;
	NextToken: string;
	Events: EventsItem[];
}

