// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.IkeConfig
export interface IkeConfig {
	LocalId: string;
	IkeAuthAlg: string;
	IkePfs: string;
	IkeMode: string;
	IkeEncAlg: string;
	Psk: string;
	RemoteId: string;
	IkeVersion: string;
	IkeLifetime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.IpsecConfig
export interface IpsecConfig {
	IpsecAuthAlg: string;
	IpsecPfs: string;
	IpsecEncAlg: string;
	IpsecLifetime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VcoHealthCheck
export interface VcoHealthCheck {
	Dip: string;
	Sip: string;
	Enable: string;
	Interval: number;
	Retry: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VpnConnection
export interface VpnConnection {
	VpnConnectionId: string;
	CustomerGatewayId: string;
	VpnGatewayId: string;
	Name: string;
	LocalSubnet: string;
	RemoteSubnet: string;
	CreateTime: number;
	EffectImmediately: boolean;
	Status: string;
	IkeConfig: IkeConfig;
	IpsecConfig: IpsecConfig;
	VcoHealthCheck: VcoHealthCheck;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VpnConnections
export interface VpnConnections {
	VpnConnection: VpnConnection[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVpnConnectionsResponse
export interface DescribeVpnConnectionsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	VpnConnections: VpnConnections;
}

