// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VSwitchIds
export interface VSwitchIds {
	VSwitchId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.UserCidrs
export interface UserCidrs {
	UserCidr: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Vpc
export interface Vpc {
	VpcId: string;
	RegionId: string;
	Status: string;
	VpcName: string;
	CreationTime: string;
	CidrBlock: string;
	VRouterId: string;
	Description: string;
	IsDefault: boolean;
	VSwitchIds: VSwitchIds;
	UserCidrs: UserCidrs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Vpcs
export interface Vpcs {
	Vpc: Vpc[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeVpcsResponse
export interface DescribeVpcsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Vpcs: Vpcs;
}

