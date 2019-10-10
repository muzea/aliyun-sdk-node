// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.NetworkAddress
export interface NetworkAddress {
	NetworkAddress: string;
	IPAddress: string;
	NetworkType: string;
	Port: string;
	VPCId: string;
	VswitchId: string;
	NodeId: string;
	ExpiredTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.NetworkAddresses
export interface NetworkAddresses {
	NetworkAddress: NetworkAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/dds.DescribeShardingNetworkAddressResponse
export interface DescribeShardingNetworkAddressResponse {
	RequestId: string;
	NetworkAddresses: NetworkAddresses;
}

