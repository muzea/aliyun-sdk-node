// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.NodeInfo
export interface NodeInfo {
	NodeId: string;
	Connection: string;
	Bandwidth: string;
	Capacity: string;
	NodeType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.RedisProxyList
export interface RedisProxyList {
	NodeInfo: NodeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.RedisShardList
export interface RedisShardList {
	NodeInfo: NodeInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeLogicInstanceTopologyResponse
export interface DescribeLogicInstanceTopologyResponse {
	RequestId: string;
	InstanceId: string;
	RedisProxyList: RedisProxyList;
	RedisShardList: RedisShardList;
}

