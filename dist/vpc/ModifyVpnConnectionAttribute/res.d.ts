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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.ModifyVpnConnectionAttributeResponse
export interface ModifyVpnConnectionAttributeResponse {
	RequestId: string;
	VpnConnectionId: string;
	CustomerGatewayId: string;
	VpnGatewayId: string;
	Name: string;
	Description: string;
	LocalSubnet: string;
	RemoteSubnet: string;
	CreateTime: number;
	EffectImmediately: boolean;
	IkeConfig: IkeConfig;
	IpsecConfig: IpsecConfig;
	VcoHealthCheck: VcoHealthCheck;
}

