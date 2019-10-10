// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.SslVpnServer
export interface SslVpnServer {
	RegionId: string;
	SslVpnServerId: string;
	VpnGatewayId: string;
	Name: string;
	LocalSubnet: string;
	ClientIpPool: string;
	CreateTime: number;
	Cipher: string;
	Proto: string;
	Port: number;
	Compress: boolean;
	Connections: number;
	MaxConnections: number;
	InternetIp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.SslVpnServers
export interface SslVpnServers {
	SslVpnServer: SslVpnServer[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeSslVpnServersResponse
export interface DescribeSslVpnServersResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	SslVpnServers: SslVpnServers;
}

