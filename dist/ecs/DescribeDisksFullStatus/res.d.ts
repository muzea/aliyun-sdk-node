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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EventType
export interface EventType {
	Name: string;
	Code: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DiskEventType
export interface DiskEventType {
	EventId: string;
	EventTime: string;
	EventEndTime: string;
	EventType: EventType;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DiskEventSet
export interface DiskEventSet {
	DiskEventType: DiskEventType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DiskFullStatusType
export interface DiskFullStatusType {
	DiskId: string;
	InstanceId: string;
	Device: string;
	Status: Status;
	HealthStatus: HealthStatus;
	DiskEventSet: DiskEventSet;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DiskFullStatusSet
export interface DiskFullStatusSet {
	DiskFullStatusType: DiskFullStatusType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeDisksFullStatusResponse
export interface DescribeDisksFullStatusResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	DiskFullStatusSet: DiskFullStatusSet;
}

