// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.SslVpnClientCertKey
export interface SslVpnClientCertKey {
	RegionId: string;
	SslVpnClientCertId: string;
	Name: string;
	SslVpnServerId: string;
	CreateTime: number;
	EndTime: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.SslVpnClientCertKeys
export interface SslVpnClientCertKeys {
	SslVpnClientCertKey: SslVpnClientCertKey[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeSslVpnClientCertsResponse
export interface DescribeSslVpnClientCertsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	SslVpnClientCertKeys: SslVpnClientCertKeys;
}

