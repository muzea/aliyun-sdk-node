// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SystemEvent
export interface SystemEvent {
	Content: string;
	Product: string;
	Name: string;
	GroupId: string;
	Num: number;
	Level: string;
	Status: string;
	ResourceId: string;
	RegionId: string;
	InstanceName: string;
	Time: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SystemEvents
export interface SystemEvents {
	SystemEvent: SystemEvent[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeSystemEventAttributeResponse
export interface DescribeSystemEventAttributeResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Success: string;
	SystemEvents: SystemEvents;
}

