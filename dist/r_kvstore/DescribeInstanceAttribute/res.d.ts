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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.TagsInDescribeInstanceAttribute
export interface TagsInDescribeInstanceAttribute {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DBInstanceAttribute
export interface DBInstanceAttribute {
	InstanceId: string;
	InstanceName: string;
	ConnectionDomain: string;
	Port: number;
	InstanceStatus: string;
	RegionId: string;
	Capacity: number;
	InstanceClass: string;
	QPS: number;
	Bandwidth: number;
	Connections: number;
	ZoneId: string;
	Config: string;
	ChargeType: string;
	NodeType: string;
	NetworkType: string;
	VpcId: string;
	VSwitchId: string;
	PrivateIp: string;
	CreateTime: string;
	EndTime: string;
	HasRenewChangeOrder: string;
	IsRds: boolean;
	Engine: string;
	EngineVersion: string;
	MaintainStartTime: string;
	MaintainEndTime: string;
	AvailabilityValue: string;
	SecurityIPList: string;
	InstanceType: string;
	ArchitectureType: string;
	PackageType: string;
	ReplicaId: string;
	VpcAuthMode: string;
	AuditLogRetention: string;
	ReplicationMode: string;
	VpcCloudInstanceId: string;
	Tags: TagsInDescribeInstanceAttribute;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.InstancesInDescribeInstanceAttribute
export interface InstancesInDescribeInstanceAttribute {
	DBInstanceAttribute: DBInstanceAttribute[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.DescribeInstanceAttributeResponse
export interface DescribeInstanceAttributeResponse {
	RequestId: string;
	Instances: InstancesInDescribeInstanceAttribute;
}

