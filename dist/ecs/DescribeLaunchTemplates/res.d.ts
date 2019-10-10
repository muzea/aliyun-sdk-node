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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeLaunchTemplates
export interface TagsInDescribeLaunchTemplates {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LaunchTemplateSet
export interface LaunchTemplateSet {
	CreateTime: string;
	ModifiedTime: string;
	LaunchTemplateId: string;
	LaunchTemplateName: string;
	DefaultVersionNumber: number;
	LatestVersionNumber: number;
	CreatedBy: string;
	ResourceGroupId: string;
	Tags: TagsInDescribeLaunchTemplates;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LaunchTemplateSets
export interface LaunchTemplateSets {
	LaunchTemplateSet: LaunchTemplateSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeLaunchTemplatesResponse
export interface DescribeLaunchTemplatesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	LaunchTemplateSets: LaunchTemplateSets;
}

