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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.GetInstanceResourceResponse
export interface GetInstanceResourceResponse {
	RequestId: string;
	Resource: Resource;
}

