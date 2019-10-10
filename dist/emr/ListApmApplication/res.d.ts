// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ApmAppInfo
export interface ApmAppInfo {
	ApplicationId: string;
	ClusterBizId: string;
	ApplicationType: string;
	Name: string;
	State: string;
	FinalStatus: string;
	Queue: string;
	User: string;
	AllocatedVcore: number;
	AllocatedMemory: number;
	Progress: number;
	VcoreSeconds: number;
	MemorySeconds: number;
	StartTime: number;
	SubmitTime: number;
	FinishedTime: number;
	Duration: number;
	Diagnostics: string;
	ClusterUsagePercent: number;
	QueueUsagePercent: number;
	RunningContainers: number;
	RunningDuration: number;
	ResourceRequests: string;
	DiagnoseResult: string;
	DiagnoseCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ApmAppInfoList
export interface ApmAppInfoList {
	ApmAppInfo: ApmAppInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListApmApplicationResponse
export interface ListApmApplicationResponse {
	RequestId: string;
	Total: number;
	PageSize: number;
	PageNumber: number;
	ApmAppInfoList: ApmAppInfoList;
}

