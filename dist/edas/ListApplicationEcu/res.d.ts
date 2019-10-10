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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.EcuInfoListInListApplicationEcu
export interface EcuInfoListInListApplicationEcu {
	EcuEntity: EcuEntity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListApplicationEcuResponse
export interface ListApplicationEcuResponse {
	Code: number;
	Message: string;
	RequestId: string;
	EcuInfoList: EcuInfoListInListApplicationEcu;
}

