// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterOperationHost
export interface ClusterOperationHost {
	HostId: string;
	HostName: string;
	Status: string;
	Percentage: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterOperationHostList
export interface ClusterOperationHostList {
	ClusterOperationHost: ClusterOperationHost[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ListClusterOperationHostResponse
export interface ListClusterOperationHostResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	ClusterOperationHostList: ClusterOperationHostList;
}

