// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceStatus
export interface InstanceStatus {
	InstanceId: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceStatuses
export interface InstanceStatuses {
	InstanceStatus: InstanceStatus[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstanceStatusResponse
export interface DescribeInstanceStatusResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	InstanceStatuses: InstanceStatuses;
}

