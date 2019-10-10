// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.AddrPool
export interface AddrPool {
	AddrCount: number;
	Name: string;
	MinAvailableAddrNum: number;
	UpdateTime: string;
	MonitorConfigId: string;
	CreateTimestamp: number;
	CreateTime: string;
	AddrPoolName: string;
	AddrPoolId: string;
	UpdateTimestamp: number;
	Status: string;
	MonitorStatus: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.AddrPoolsInDescribeGtmInstanceAddressPools
export interface AddrPoolsInDescribeGtmInstanceAddressPools {
	AddrPool: AddrPool[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeGtmInstanceAddressPoolsResponse
export interface DescribeGtmInstanceAddressPoolsResponse {
	RequestId: string;
	TotalItems: number;
	TotalPages: number;
	PageNumber: number;
	PageSize: number;
	AddrPools: AddrPoolsInDescribeGtmInstanceAddressPools;
}

