// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EventType
export interface EventType {
	Name: string;
	Code: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EventCycleStatus
export interface EventCycleStatus {
	Name: string;
	Code: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ExtendedAttribute
export interface ExtendedAttribute {
	Device: string;
	DiskId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceSystemEventType
export interface InstanceSystemEventType {
	InstanceId: string;
	EventId: string;
	EventPublishTime: string;
	NotBefore: string;
	EventFinishTime: string;
	EventType: EventType;
	EventCycleStatus: EventCycleStatus;
	ExtendedAttribute: ExtendedAttribute;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceSystemEventSet
export interface InstanceSystemEventSet {
	InstanceSystemEventType: InstanceSystemEventType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstanceHistoryEventsResponse
export interface DescribeInstanceHistoryEventsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	InstanceSystemEventSet: InstanceSystemEventSet;
}

