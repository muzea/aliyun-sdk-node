// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceCloudAssistantStatus
export interface InstanceCloudAssistantStatus {
	InstanceId: string;
	CloudAssistantStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceCloudAssistantStatusSet
export interface InstanceCloudAssistantStatusSet {
	InstanceCloudAssistantStatus: InstanceCloudAssistantStatus[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeCloudAssistantStatusResponse
export interface DescribeCloudAssistantStatusResponse {
	RequestId: string;
	InstanceCloudAssistantStatusSet: InstanceCloudAssistantStatusSet;
}

