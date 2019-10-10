// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.ResourceTypeCount
export interface ResourceTypeCount {
	Instance: number;
	Disk: number;
	Volume: number;
	Image: number;
	Snapshot: number;
	Securitygroup: number;
	LaunchTemplate: number;
	Eni: number;
	Ddh: number;
	KeyPair: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Tag
export interface Tag {
	TagValue: string;
	TagKey: string;
	ResourceTypeCount: ResourceTypeCount;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeSecurityGroups
export interface TagsInDescribeSecurityGroups {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SecurityGroup
export interface SecurityGroup {
	SecurityGroupId: string;
	Description: string;
	SecurityGroupName: string;
	VpcId: string;
	CreationTime: string;
	SecurityGroupType: string;
	AvailableInstanceAmount: number;
	EcsCount: number;
	ResourceGroupId: string;
	Tags: TagsInDescribeSecurityGroups;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SecurityGroups
export interface SecurityGroups {
	SecurityGroup: SecurityGroup[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeSecurityGroupsResponse
export interface DescribeSecurityGroupsResponse {
	RequestId: string;
	RegionId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	SecurityGroups: SecurityGroups;
}

