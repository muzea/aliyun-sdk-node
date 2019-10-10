// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.NetworkInterface
export interface NetworkInterface {
	UisNodeId: string;
	UisEniId: string;
	NetworkInterfaceId: string;
	VswitchId: string;
	SecurityGroupID: string;
	IpAddress: string;
	State: string;
	Log: string;
	Name: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.NetworkInterfaces
export interface NetworkInterfaces {
	NetworkInterface: NetworkInterface[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.DescribeUisNetworkInterfacesResponse
export interface DescribeUisNetworkInterfacesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	NetworkInterfaces: NetworkInterfaces;
}

