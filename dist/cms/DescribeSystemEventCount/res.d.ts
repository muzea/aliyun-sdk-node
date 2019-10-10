// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SystemEventCount
export interface SystemEventCount {
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.SystemEventCounts
export interface SystemEventCounts {
	SystemEventCount: SystemEventCount[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeSystemEventCountResponse
export interface DescribeSystemEventCountResponse {
	Code: string;
	Message: string;
	RequestId: string;
	Success: string;
	SystemEventCounts: SystemEventCounts;
}

