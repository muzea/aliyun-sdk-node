// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.EipAddress
export interface EipAddress {
	InstanceIdInternetIp: string;
	Eip: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.EipAddressesInDescribeEipAddresses
export interface EipAddressesInDescribeEipAddresses {
	EipAddress: EipAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeEipAddressesResponse
export interface DescribeEipAddressesResponse {
	RequestId: string;
	EipAddresses: EipAddressesInDescribeEipAddresses;
}

