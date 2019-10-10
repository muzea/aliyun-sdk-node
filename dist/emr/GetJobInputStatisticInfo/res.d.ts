// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatJobInput
export interface ClusterStatJobInput {
	ApplicationId: string;
	JobId: string;
	StartTime: number;
	FinishTime: number;
	Name: string;
	Queue: string;
	User: string;
	State: string;
	BytesInput: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobInputList
export interface JobInputList {
	ClusterStatJobInput: ClusterStatJobInput[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetJobInputStatisticInfoResponse
export interface GetJobInputStatisticInfoResponse {
	RequestId: string;
	Total: number;
	PageNumber: number;
	PageSize: number;
	JobInputList: JobInputList;
}

