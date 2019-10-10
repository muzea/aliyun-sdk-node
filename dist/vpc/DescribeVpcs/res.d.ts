// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VSwitchIdsInDescribeVpcs
export interface VSwitchIdsInDescribeVpcs {
	VSwitchId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.UserCidrsInDescribeVpcs
export interface UserCidrsInDescribeVpcs {
	UserCidr: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.NatGatewayIds
export interface NatGatewayIds {
	NatGatewayIds: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.RouterTableIds
export interface RouterTableIds {
	RouterTableIds: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Tag
export interface Tag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.TagsInDescribeVpcs
export interface TagsInDescribeVpcs {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Vpc
export interface Vpc {
	VpcId: string;
	RegionId: string;
	Status: string;
	VpcName: string;
	CreationTime: string;
	CidrBlock: string;
	Ipv6CidrBlock: string;
	VRouterId: string;
	Description: string;
	IsDefault: boolean;
	NetworkAclNum: string;
	ResourceGroupId: string;
	CenStatus: string;
	VSwitchIds: VSwitchIdsInDescribeVpcs;
	UserCidrs: UserCidrsInDescribeVpcs;
	NatGatewayIds: NatGatewayIds;
	RouterTableIds: RouterTableIds;
	Tags: TagsInDescribeVpcs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.Vpcs
export interface Vpcs {
	Vpc: Vpc[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVpcsResponse
export interface DescribeVpcsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Vpcs: Vpcs;
}

