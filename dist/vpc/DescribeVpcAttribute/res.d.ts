// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VSwitchIdsInDescribeVpcAttribute
export interface VSwitchIdsInDescribeVpcAttribute {
	VSwitchId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.UserCidrsInDescribeVpcAttribute
export interface UserCidrsInDescribeVpcAttribute {
	UserCidr: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AssociatedCen
export interface AssociatedCen {
	CenStatus: string;
	CenOwnerId: number;
	CenId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.AssociatedCensInDescribeVpcAttribute
export interface AssociatedCensInDescribeVpcAttribute {
	AssociatedCen: AssociatedCen[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CloudResourceSetType
export interface CloudResourceSetType {
	ResourceType: string;
	ResourceCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CloudResourcesInDescribeVpcAttribute
export interface CloudResourcesInDescribeVpcAttribute {
	CloudResourceSetType: CloudResourceSetType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVpcAttributeResponse
export interface DescribeVpcAttributeResponse {
	RequestId: string;
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
	ClassicLinkEnabled: boolean;
	ResourceGroupId: string;
	NetworkAclNum: string;
	VSwitchIds: VSwitchIdsInDescribeVpcAttribute;
	UserCidrs: UserCidrsInDescribeVpcAttribute;
	AssociatedCens: AssociatedCensInDescribeVpcAttribute;
	CloudResources: CloudResourcesInDescribeVpcAttribute;
}

