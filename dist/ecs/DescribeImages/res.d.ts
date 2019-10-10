// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DiskDeviceMapping
export interface DiskDeviceMapping {
	SnapshotId: string;
	Size: string;
	Device: string;
	Type: string;
	Format: string;
	ImportOSSBucket: string;
	ImportOSSObject: string;
	Progress: string;
	RemainTime: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DiskDeviceMappings
export interface DiskDeviceMappings {
	DiskDeviceMapping: DiskDeviceMapping[];
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeImages
export interface TagsInDescribeImages {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Image
export interface Image {
	Progress: string;
	ImageId: string;
	ImageName: string;
	ImageVersion: string;
	Description: string;
	Size: number;
	ImageOwnerAlias: string;
	IsSupportIoOptimized: boolean;
	IsSupportCloudinit: boolean;
	OSName: string;
	OSNameEn: string;
	Architecture: string;
	Status: string;
	ProductCode: string;
	IsSubscribed: boolean;
	CreationTime: string;
	IsSelfShared: string;
	OSType: string;
	Platform: string;
	Usage: string;
	IsCopied: boolean;
	ResourceGroupId: string;
	DiskDeviceMappings: DiskDeviceMappings;
	Tags: TagsInDescribeImages;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Images
export interface Images {
	Image: Image[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeImagesResponse
export interface DescribeImagesResponse {
	RequestId: string;
	RegionId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Images: Images;
}

