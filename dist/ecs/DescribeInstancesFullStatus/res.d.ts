// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Status
export interface Status {
	Name: string;
	Code: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.HealthStatus
export interface HealthStatus {
	Name: string;
	Code: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EventCycleStatus
export interface EventCycleStatus {
	Name: string;
	Code: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EventType
export interface EventType {
	Name: string;
	Code: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ExtendedAttribute
export interface ExtendedAttribute {
	Device: string;
	DiskId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ScheduledSystemEventType
export interface ScheduledSystemEventType {
	EventId: string;
	EventPublishTime: string;
	NotBefore: string;
	EventCycleStatus: EventCycleStatus;
	EventType: EventType;
	ExtendedAttribute: ExtendedAttribute;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ScheduledSystemEventSet
export interface ScheduledSystemEventSet {
	ScheduledSystemEventType: ScheduledSystemEventType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceFullStatusType
export interface InstanceFullStatusType {
	InstanceId: string;
	Status: Status;
	HealthStatus: HealthStatus;
	ScheduledSystemEventSet: ScheduledSystemEventSet;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceFullStatusSet
export interface InstanceFullStatusSet {
	InstanceFullStatusType: InstanceFullStatusType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstancesFullStatusResponse
export interface DescribeInstancesFullStatusResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	InstanceFullStatusSet: InstanceFullStatusSet;
}

