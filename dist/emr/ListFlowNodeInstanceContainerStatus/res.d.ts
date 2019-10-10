// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ContainerStatus
export interface ContainerStatus {
	ApplicationId: string;
	ContainerId: string;
	HostName: string;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ContainerStatusList
export interface ContainerStatusList {
	ContainerStatus: ContainerStatus[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListFlowNodeInstanceContainerStatusResponse
export interface ListFlowNodeInstanceContainerStatusResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	Total: number;
	ContainerStatusList: ContainerStatusList;
}

