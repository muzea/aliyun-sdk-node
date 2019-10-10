// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BgpNetwork
export interface BgpNetwork {
	VpcId: string;
	DstCidrBlock: string;
	RouterId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.BgpNetworks
export interface BgpNetworks {
	BgpNetwork: BgpNetwork[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeBgpNetworksResponse
export interface DescribeBgpNetworksResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	BgpNetworks: BgpNetworks;
}

