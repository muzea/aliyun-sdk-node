// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.ListenerPorts
export interface ListenerPorts {
	ListenerPort: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.ListenerPortAndProtocal
export interface ListenerPortAndProtocal {
	ListenerPort: number;
	ListenerProtocal: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.ListenerPortsAndProtocal
export interface ListenerPortsAndProtocal {
	ListenerPortAndProtocal: ListenerPortAndProtocal[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.ListenerPortAndProtocol
export interface ListenerPortAndProtocol {
	ListenerPort: number;
	ListenerProtocol: string;
	ListenerForward: string;
	ForwardPort: number;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.ListenerPortsAndProtocol
export interface ListenerPortsAndProtocol {
	ListenerPortAndProtocol: ListenerPortAndProtocol[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.BackendServer
export interface BackendServer {
	Port: number;
	Protocol: string;
	ServerIp: string;
	ServerHealthStatus: string;
	ServerId: string;
	VpcId: string;
	ListenerPort: number;
	Weight: number;
	Description: string;
	EniHost: string;
	Type: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.BackendServersInDescribeLoadBalancerAttribute
export interface BackendServersInDescribeLoadBalancerAttribute {
	BackendServer: BackendServer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/slb.DescribeLoadBalancerAttributeResponse
export interface DescribeLoadBalancerAttributeResponse {
	RequestId: string;
	LoadBalancerId: string;
	ResourceGroupId: string;
	LoadBalancerName: string;
	LoadBalancerStatus: string;
	RegionId: string;
	RegionIdAlias: string;
	Address: string;
	AddressType: string;
	VpcId: string;
	VSwitchId: string;
	NetworkType: string;
	InternetChargeType: string;
	AutoReleaseTime: number;
	Bandwidth: number;
	LoadBalancerSpec: string;
	CreateTime: string;
	CreateTimeStamp: number;
	EndTime: string;
	EndTimeStamp: number;
	PayType: string;
	MasterZoneId: string;
	SlaveZoneId: string;
	AddressIPVersion: string;
	CloudType: string;
	RenewalDuration: number;
	RenewalStatus: string;
	RenewalCycUnit: string;
	HasReservedInfo: string;
	ReservedInfoOrderType: string;
	ReservedInfoInternetChargeType: string;
	ReservedInfoBandwidth: string;
	ReservedInfoActiveTime: string;
	DeleteProtection: string;
	CloudInstanceType: string;
	CloudInstanceId: string;
	TunnelType: string;
	CloudInstanceUid: number;
	ListenerPorts: ListenerPorts;
	ListenerPortsAndProtocal: ListenerPortsAndProtocal;
	ListenerPortsAndProtocol: ListenerPortsAndProtocol;
	BackendServers: BackendServersInDescribeLoadBalancerAttribute;
}

