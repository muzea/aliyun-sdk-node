// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.EcuInfo
export interface EcuInfo {
	EcuId: string;
	Online: boolean;
	DockerEnv: boolean;
	CreateTime: number;
	UpdateTime: number;
	IpAddr: string;
	HeartbeatTime: number;
	UserId: string;
	Name: string;
	ZoneId: string;
	RegionId: string;
	InstanceId: string;
	VpcId: string;
	AvailableCpu: number;
	AvailableMem: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.EcuInfoListInListScaleOutEcu
export interface EcuInfoListInListScaleOutEcu {
	EcuInfo: EcuInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListScaleOutEcuResponse
export interface ListScaleOutEcuResponse {
	Code: number;
	Message: string;
	RequestId: string;
	EcuInfoList: EcuInfoListInListScaleOutEcu;
}

