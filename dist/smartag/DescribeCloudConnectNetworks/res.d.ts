// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Tag
export interface Tag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.Tags
export interface Tags {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.CloudConnectNetwork
export interface CloudConnectNetwork {
	CcnId: string;
	Name: string;
	AssociatedCloudBoxCount: string;
	AvailableCloudBoxCount: string;
	AssociatedCenId: string;
	AssociatedCenOwnerId: string;
	Description: string;
	CreateTime: number;
	IsDefault: boolean;
	CidrBlock: string;
	SnatCidrBlock: string;
	Tags: Tags;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.CloudConnectNetworks
export interface CloudConnectNetworks {
	CloudConnectNetwork: CloudConnectNetwork[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/smartag.DescribeCloudConnectNetworksResponse
export interface DescribeCloudConnectNetworksResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	CloudConnectNetworks: CloudConnectNetworks;
}

