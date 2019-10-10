// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VpnGateway
export interface VpnGateway {
	VpnGatewayId: string;
	VpcId: string;
	VSwitchId: string;
	InternetIp: string;
	CreateTime: number;
	EndTime: number;
	Spec: string;
	Name: string;
	Description: string;
	Status: string;
	BusinessStatus: string;
	ChargeType: string;
	IpsecVpn: string;
	SslVpn: string;
	SslMaxConnections: number;
	Tag: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VpnGateways
export interface VpnGateways {
	VpnGateway: VpnGateway[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVpnGatewaysResponse
export interface DescribeVpnGatewaysResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	VpnGateways: VpnGateways;
}

