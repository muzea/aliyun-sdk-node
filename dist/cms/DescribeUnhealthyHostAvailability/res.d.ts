// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.InstanceList
export interface InstanceList {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NodeTaskInstance
export interface NodeTaskInstance {
	Id: number;
	InstanceList: InstanceList;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.UnhealthyList
export interface UnhealthyList {
	NodeTaskInstance: NodeTaskInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeUnhealthyHostAvailabilityResponse
export interface DescribeUnhealthyHostAvailabilityResponse {
	Code: string;
	Message: string;
	Success: boolean;
	RequestId: string;
	UnhealthyList: UnhealthyList;
}

