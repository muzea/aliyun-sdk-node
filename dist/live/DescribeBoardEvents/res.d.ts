// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.Event
export interface Event {
	EventId: number;
	EventType: number;
	Data: string;
	Timestamp: number;
	UserId: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/live.DescribeBoardEventsResponse
export interface DescribeBoardEventsResponse {
	RequestId: string;
	Events: Event[];
}

