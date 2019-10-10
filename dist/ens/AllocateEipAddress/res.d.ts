// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.EipAddress
export interface EipAddress {
	InstanceIdInternetIp: string;
	Eip: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.EipAddressesInAllocateEipAddress
export interface EipAddressesInAllocateEipAddress {
	EipAddress: EipAddress[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.AllocateEipAddressResponse
export interface AllocateEipAddressResponse {
	RequestId: string;
	EipAddresses: EipAddressesInAllocateEipAddress;
}

