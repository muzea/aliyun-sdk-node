// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ShardingDb
export interface ShardingDb {
	ShardingDbName: string;
	DbInstanceId: string;
	GroupName: string;
	DbStatus: string;
	DbType: string;
	MinPoolSize: number;
	MaxPoolSize: number;
	IdleTimeOut: number;
	BlockingTimeout: number;
	ConnectionProperties: string;
	PreparedStatementCacheSize: number;
	UserName: string;
	ConnectUrl: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ShardingDbs
export interface ShardingDbs {
	ShardingDb: ShardingDb[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsShardingDbsResponse
export interface DescribeDrdsShardingDbsResponse {
	RequestId: string;
	Success: boolean;
	ShardingDbs: ShardingDbs;
}

