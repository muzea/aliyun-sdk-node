// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.EcuEntity
export interface EcuEntity {
	Name: string;
	UpdateTime: number;
	Online: boolean;
	HeartbeatTime: number;
	Mem: number;
	CreateTime: number;
	EcuId: string;
	RegionId: string;
	ZoneId: string;
	AvailableCpu: number;
	DockerEnv: boolean;
	UserId: string;
	InstanceId: string;
	IpAddr: string;
	AvailableMem: number;
	VpcId: string;
	Cpu: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.VpcEntity
export interface VpcEntity {
	Expired: boolean;
	RegionId: string;
	EcsNum: number;
	VpcName: string;
	UserId: string;
	VpcId: string;
	Status: string;
	Description: string;
	Cidrblock: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.EcsEntity
export interface EcsEntity {
	Expired: boolean;
	SgId: string;
	PublicIp: string;
	VpcName: string;
	InstanceName: string;
	Mem: number;
	RegionId: string;
	ZoneId: string;
	PrivateIp: string;
	InstanceId: string;
	UserId: string;
	Eip: string;
	InnerIp: string;
	HostName: string;
	SerialNum: string;
	GroupId: string;
	VpcId: string;
	Status: string;
	Cpu: number;
	Description: string;
	EcuEntity: EcuEntity;
	VpcEntity: VpcEntity;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.EcsEntityList
export interface EcsEntityList {
	EcsEntity: EcsEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListEcsNotInClusterResponse
export interface ListEcsNotInClusterResponse {
	Code: number;
	Message: string;
	RequestId: string;
	EcsEntityList: EcsEntityList;
}

