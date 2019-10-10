// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Resource
export interface Resource {
	AllocatedMB: number;
	TotalVirtualCores: number;
	AllocatedVirtualCores: number;
	AvailableMB: number;
	TotalMB: number;
	AvailableVirtualCores: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.GetClusterResourceResponse
export interface GetClusterResourceResponse {
	RequestId: string;
	Resource: Resource;
}

