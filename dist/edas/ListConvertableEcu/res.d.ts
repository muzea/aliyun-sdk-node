// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.Instance
export interface Instance {
	InstanceId: string;
	InstanceName: string;
	EcuId: string;
	VpcId: string;
	VpcName: string;
	Expired: boolean;
	Status: string;
	RegionId: string;
	Cpu: number;
	Mem: number;
	PublicIp: string;
	InnerIp: string;
	PrivateIp: string;
	Eip: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.InstanceList
export interface InstanceList {
	Instance: Instance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/edas.ListConvertableEcuResponse
export interface ListConvertableEcuResponse {
	Code: number;
	Message: string;
	RequestId: string;
	InstanceList: InstanceList;
}

