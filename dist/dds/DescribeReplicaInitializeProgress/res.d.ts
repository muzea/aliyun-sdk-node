// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.ItemsItemInDescribeReplicaInitializeProgress
export interface ItemsItemInDescribeReplicaInitializeProgress {
	ReplicaId: string;
	Status: string;
	Progress: string;
	FinishTime: string;
	CurrentStep: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeReplicaInitializeProgressResponse
export interface DescribeReplicaInitializeProgressResponse {
	RequestId: string;
	Items: ItemsItemInDescribeReplicaInitializeProgress[];
}

