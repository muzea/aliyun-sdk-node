// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Instance
export interface Instance {
	ClusterId: string;
	QueueName: string;
	Code: string;
	LastOperateTime: number;
	EngineVersion: string;
	ApiType: string;
	LastErrorTime: number;
	LastOperator: string;
	InputDelay: number;
	Packages: string;
	Id: number;
	Starter: string;
	EndTime: number;
	StartTime: number;
	PlanJson: string;
	ProjectName: string;
	EngineJobHandler: string;
	ActualState: string;
	JobType: string;
	LastErrorMessage: string;
	JobName: string;
	ExpectState: string;
	Properties: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.Instances
export interface Instances {
	Instance: Instance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/foas.ListInstanceResponse
export interface ListInstanceResponse {
	RequestId: string;
	PageIndex: number;
	PageSize: number;
	TotalPage: number;
	TotalCount: number;
	Instances: Instances;
}

