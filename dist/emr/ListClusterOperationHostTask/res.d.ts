// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterOperationHostTask
export interface ClusterOperationHostTask {
	TaskId: string;
	TaskName: string;
	Status: string;
	Percentage: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterOperationHostTaskList
export interface ClusterOperationHostTaskList {
	ClusterOperationHostTask: ClusterOperationHostTask[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterOperationHostTaskResponse
export interface ListClusterOperationHostTaskResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ClusterOperationHostTaskList: ClusterOperationHostTaskList;
}

