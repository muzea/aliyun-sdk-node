// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatJobOutput
export interface ClusterStatJobOutput {
	ApplicationId: string;
	JobId: string;
	StartTime: number;
	FinishTime: number;
	Name: string;
	Queue: string;
	User: string;
	State: string;
	BytesOutput: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.JobOutputList
export interface JobOutputList {
	ClusterStatJobOutput: ClusterStatJobOutput[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetJobOutputStatisticInfoResponse
export interface GetJobOutputStatisticInfoResponse {
	RequestId: string;
	Total: number;
	PageNumber: number;
	PageSize: number;
	JobOutputList: JobOutputList;
}

