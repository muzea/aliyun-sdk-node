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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeKeyPairs
export interface TagsInDescribeKeyPairs {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.KeyPair
export interface KeyPair {
	KeyPairName: string;
	KeyPairFingerPrint: string;
	ResourceGroupId: string;
	Tags: TagsInDescribeKeyPairs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.KeyPairs
export interface KeyPairs {
	KeyPair: KeyPair[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeKeyPairsResponse
export interface DescribeKeyPairsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	KeyPairs: KeyPairs;
}

