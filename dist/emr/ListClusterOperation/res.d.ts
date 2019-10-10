// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterOperation
export interface ClusterOperation {
	OperationId: string;
	OperationName: string;
	StartTime: string;
	Duration: string;
	Status: string;
	Percentage: string;
	Comment: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterOperationList
export interface ClusterOperationList {
	ClusterOperation: ClusterOperation[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterOperationResponse
export interface ListClusterOperationResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ClusterOperationList: ClusterOperationList;
}

