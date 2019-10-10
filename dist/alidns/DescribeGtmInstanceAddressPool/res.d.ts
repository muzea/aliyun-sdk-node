// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Addr
export interface Addr {
	AddrId: number;
	CreateTime: string;
	CreateTimestamp: number;
	UpdateTime: string;
	UpdateTimestamp: number;
	Value: string;
	LbaWeight: number;
	Mode: string;
	AlertStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.Addrs
export interface Addrs {
	Addr: Addr[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeGtmInstanceAddressPoolResponse
export interface DescribeGtmInstanceAddressPoolResponse {
	RequestId: string;
	AddrPoolId: string;
	CreateTime: string;
	CreateTimestamp: number;
	UpdateTime: string;
	UpdateTimestamp: number;
	AddrCount: number;
	MinAvailableAddrNum: number;
	MonitorConfigId: string;
	MonitorStatus: string;
	Name: string;
	Status: string;
	Type: string;
	Addrs: Addrs;
}

