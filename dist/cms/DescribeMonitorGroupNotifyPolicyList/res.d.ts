// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NotifyPolicy
export interface NotifyPolicy {
	Type: string;
	Id: string;
	StartTime: number;
	EndTime: number;
	GroupId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.NotifyPolicyList
export interface NotifyPolicyList {
	NotifyPolicy: NotifyPolicy[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMonitorGroupNotifyPolicyListResponse
export interface DescribeMonitorGroupNotifyPolicyListResponse {
	Code: string;
	Message: string;
	Success: string;
	RequestId: string;
	Total: number;
	NotifyPolicyList: NotifyPolicyList;
}

