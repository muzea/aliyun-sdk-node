// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.IpStatus
export interface IpStatus {
	Ip: string;
	MaxConnections: number;
	CurrentConnections: number;
	CpuStatus: string;
	MemStatus: string;
	BandwidthStatus: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.IpStatusList
export interface IpStatusList {
	IpStatus: IpStatus[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.DescribeUiseNodeStatusResponse
export interface DescribeUiseNodeStatusResponse {
	RequestId: string;
	IpStatusList: IpStatusList;
}

