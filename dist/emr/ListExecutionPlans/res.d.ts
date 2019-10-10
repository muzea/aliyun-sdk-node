// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ExecutionPlanInfo
export interface ExecutionPlanInfo {
	Id: string;
	Name: string;
	CreateClusterOnDemand: boolean;
	Stragety: string;
	Status: string;
	TimeInterval: number;
	StartTime: number;
	TimeUnit: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ExecutionPlans
export interface ExecutionPlans {
	ExecutionPlanInfo: ExecutionPlanInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListExecutionPlansResponse
export interface ListExecutionPlansResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ExecutionPlans: ExecutionPlans;
}

