// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NodeStatus
export interface NodeStatus {
	InstanceId: string;
	AutoInstall: boolean;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NodeStatusList
export interface NodeStatusList {
	NodeStatus: NodeStatus[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMonitoringAgentStatusesResponse
export interface DescribeMonitoringAgentStatusesResponse {
	Code: string;
	Message: string;
	Success: boolean;
	RequestId: string;
	NodeStatusList: NodeStatusList;
}

