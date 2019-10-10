// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DrdsInstanceIdList
export interface DrdsInstanceIdList {
	DrdsInstanceId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.IpWhiteList
export interface IpWhiteList {
	Ip: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Vip
export interface Vip {
	Port: string;
	IP: string;
	VswitchId: string;
	VpcId: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.VipsInQueryInstanceInfoByConn
export interface VipsInQueryInstanceInfoByConn {
	Vip: Vip[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.Data
export interface Data {
	Version: number;
	SpecTypeName: string;
	OrderId: number;
	CreateTime: number;
	DrdsInstanceId: string;
	DbName: string;
	VpcCloudInstanceId: string;
	RegionId: string;
	ZoneId: string;
	AccountName: string;
	SpecTypeId: string;
	NetworkType: string;
	Status: string;
	Description: string;
	Specification: string;
	Type: string;
	DrdsInstanceIdList: DrdsInstanceIdList;
	IpWhiteList: IpWhiteList;
	Vips: VipsInQueryInstanceInfoByConn;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.CheckRdsExpandStatusResponse
export interface CheckRdsExpandStatusResponse {
	RequestId: string;
	Success: boolean;
	Data: Data;
}

