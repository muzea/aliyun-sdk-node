// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Shard
export interface Shard {
	ReplicaQuantity: string;
	NodeId: string;
	ShardStorageQuantity: string;
	ReplicaClass: string;
	ShardId: string;
	StorageQuantity: string;
	ShardReplicaClass: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Instance
export interface Instance {
	InstanceId: string;
	ShardList: Shard[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeShardingInstancesResponse
export interface DescribeShardingInstancesResponse {
	RequestId: string;
	TotalCount: number;
	Instances: Instance[];
}

