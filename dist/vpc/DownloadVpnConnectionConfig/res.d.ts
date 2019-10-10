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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VpnConnectionConfig
export interface VpnConnectionConfig {
	LocalSubnet: string;
	RemoteSubnet: string;
	Local: string;
	Remote: string;
	IkeConfig: IkeConfig;
	IpsecConfig: IpsecConfig;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DownloadVpnConnectionConfigResponse
export interface DownloadVpnConnectionConfigResponse {
	RequestId: string;
	VpnConnectionConfig: VpnConnectionConfig;
}

