// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ExecutionPlanInstance
export interface ExecutionPlanInstance {
	Id: string;
	ExecutionPlanId: string;
	ExecutionPlanName: string;
	StartTime: number;
	RunTime: number;
	ClusterId: string;
	ClusterName: string;
	ClusterType: string;
	Status: string;
	LogEnable: boolean;
	LogPath: string;
	WorkflowApp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ExecutionPlanInstances
export interface ExecutionPlanInstances {
	ExecutionPlanInstance: ExecutionPlanInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListExecutionPlanInstancesResponse
export interface ListExecutionPlanInstancesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ExecutionPlanInstances: ExecutionPlanInstances;
}

