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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.EcsList
export interface EcsList {
	EcsEntity: EcsEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.SlbEntity
export interface SlbEntity {
	Expired: boolean;
	RegionId: string;
	GroupId: number;
	UserId: string;
	VswitchId: string;
	SlbStatus: string;
	SlbId: string;
	AddressType: string;
	VpcId: string;
	NetworkType: string;
	Address: string;
	SlbName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.SlbListInListResourceGroup
export interface SlbListInListResourceGroup {
	SlbEntity: SlbEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ResGroupEntity
export interface ResGroupEntity {
	Id: number;
	Name: string;
	Description: string;
	AdminUserId: string;
	CreateTime: number;
	UpdateTime: number;
	RegionId: string;
	ecsList: EcsList;
	SlbList: SlbListInListResourceGroup;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ResourceGroupList
export interface ResourceGroupList {
	ResGroupEntity: ResGroupEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListResourceGroupResponse
export interface ListResourceGroupResponse {
	Code: number;
	Message: string;
	RequestId: string;
	ResourceGroupList: ResourceGroupList;
}

