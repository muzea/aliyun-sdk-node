// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Host
export interface Host {
	InstanceId: string;
	SerialNumber: string;
	HostName: string;
	AliUid: number;
	OperatingSystem: string;
	IpGroup: string;
	Region: string;
	AgentVersion: string;
	EipAddress: string;
	EipId: string;
	isAliyunHost: boolean;
	NatIp: string;
	NetworkType: string;
	InstanceTypeFamily: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.Hosts
export interface Hosts {
	Host: Host[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeMonitoringAgentHostsResponse
export interface DescribeMonitoringAgentHostsResponse {
	Code: string;
	Message: string;
	Success: boolean;
	RequestId: string;
	PageTotal: number;
	Total: number;
	Hosts: Hosts;
}

