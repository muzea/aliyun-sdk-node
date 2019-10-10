// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatJobRunningTime
export interface ClusterStatJobRunningTime {
	ApplicationId: string;
	JobId: string;
	StartTime: number;
	FinishTime: number;
	Name: string;
	Queue: string;
	User: string;
	State: string;
	RunningTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.RunningTimeList
export interface RunningTimeList {
	ClusterStatJobRunningTime: ClusterStatJobRunningTime[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetJobRunningTimeStatisticInfoResponse
export interface GetJobRunningTimeStatisticInfoResponse {
	RequestId: string;
	Total: number;
	PageNumber: number;
	PageSize: number;
	RunningTimeList: RunningTimeList;
}

