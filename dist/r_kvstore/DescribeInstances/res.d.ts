// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.TagValues
export interface TagValues {
	TagValue: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.Tag
export interface Tag {
	Key: string;
	Value: string;
	TagKey: string;
	TagValues: TagValues;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.TagsInDescribeInstances
export interface TagsInDescribeInstances {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.KVStoreInstance
export interface KVStoreInstance {
	InstanceClass: string;
	PackageType: string;
	ChargeType: string;
	SearchKey: string;
	ConnectionDomain: string;
	CreateTime: string;
	HasRenewChangeOrder: string;
	InstanceType: string;
	VpcCloudInstanceId: string;
	DestroyTime: string;
	RegionId: string;
	PrivateIp: string;
	InstanceId: string;
	InstanceStatus: string;
	Bandwidth: number;
	NetworkType: string;
	VpcId: string;
	NodeType: string;
	Connections: number;
	ArchitectureType: string;
	ReplacateId: string;
	EngineVersion: string;
	Capacity: number;
	VSwitchId: string;
	InstanceName: string;
	Port: number;
	ZoneId: string;
	EndTime: string;
	QPS: number;
	UserName: string;
	Config: string;
	IsRds: boolean;
	ConnectionMode: string;
	Tags: TagsInDescribeInstances;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.InstancesInDescribeInstances
export interface InstancesInDescribeInstances {
	KVStoreInstance: KVStoreInstance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeInstancesResponse
export interface DescribeInstancesResponse {
	RequestId: string;
	PageNumber: number;
	PageSize: number;
	TotalCount: number;
	Instances: InstancesInDescribeInstances;
}

