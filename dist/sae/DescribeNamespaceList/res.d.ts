// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.RegionList
export interface RegionList {
	NamespaceName: string;
	NamespaceId: string;
	AgentInstall: string;
	Current: boolean;
	Custom: boolean;
	RegionId: string;
	HybridCloudEnable: boolean;
	VpcId: string;
	VSwitchId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/sae.DescribeNamespaceListResponse
export interface DescribeNamespaceListResponse {
	RequestId: string;
	Code: string;
	Message: string;
	Success: boolean;
	ErrorCode: string;
	TraceId: string;
	Data: RegionList[];
}

