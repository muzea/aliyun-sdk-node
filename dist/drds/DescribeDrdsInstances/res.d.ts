// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.SlaveInstId
export interface SlaveInstId {
	instId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Vip
export interface Vip {
	Port: string;
	IP: string;
	VswitchId: string;
	VpcId: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.VipsInDescribeDrdsInstances
export interface VipsInDescribeDrdsInstances {
	Vip: Vip[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Instance
export interface Instance {
	DrdsInstanceId: string;
	Type: string;
	RegionId: string;
	ZoneId: string;
	Description: string;
	NetworkType: string;
	Status: string;
	CreateTime: number;
	Version: number;
	VpcCloudInstanceId: string;
	InstRole: string;
	MasterInstId: string;
	SlaveInstId: SlaveInstId;
	Vips: VipsInDescribeDrdsInstances;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DataInDescribeDrdsInstances
export interface DataInDescribeDrdsInstances {
	Instance: Instance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsInstancesResponse
export interface DescribeDrdsInstancesResponse {
	RequestId: string;
	Success: boolean;
	Data: DataInDescribeDrdsInstances;
}

