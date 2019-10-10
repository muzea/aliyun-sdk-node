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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ShardListInCreateShardingInstance
export interface ShardListInCreateShardingInstance {
	Shard: Shard[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.CreateShardingInstanceResponse
export interface CreateShardingInstanceResponse {
	RequestId: string;
	InstanceId: string;
	OrderId: string;
	ShardList: ShardListInCreateShardingInstance;
}

