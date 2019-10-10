// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.EventItemsItem
export interface EventItemsItem {
	EventId: number;
	EventType: string;
	EventName: string;
	EventTime: string;
	ResourceType: string;
	ResourceName: string;
	RegionId: string;
	EventUserType: string;
	EventReason: string;
	EventPayload: string;
	EventRecordTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.EventItems
export interface EventItems {
	EventItemsItem: EventItemsItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeEventsResponse
export interface DescribeEventsResponse {
	RequestId: string;
	TotalRecordCount: number;
	PageSize: number;
	PageNumber: number;
	EventItems: EventItems;
}

