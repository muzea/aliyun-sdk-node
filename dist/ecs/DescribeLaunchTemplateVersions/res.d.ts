// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DataDisk
export interface DataDisk {
	Size: number;
	SnapshotId: string;
	Category: string;
	Encrypted: string;
	DiskName: string;
	Description: string;
	DeleteWithInstance: boolean;
	Device: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DataDisks
export interface DataDisks {
	DataDisk: DataDisk[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkInterface
export interface NetworkInterface {
	SecurityGroupId: string;
	VSwitchId: string;
	NetworkInterfaceId: string;
	PrimaryIpAddress: string;
	MacAddress: string;
	Description: string;
	NetworkInterfaceName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkInterfacesInDescribeLaunchTemplateVersions
export interface NetworkInterfacesInDescribeLaunchTemplateVersions {
	NetworkInterface: NetworkInterface[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstanceTag
export interface InstanceTag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeLaunchTemplateVersions
export interface TagsInDescribeLaunchTemplateVersions {
	InstanceTag: InstanceTag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LaunchTemplateData
export interface LaunchTemplateData {
	ImageId: string;
	ImageOwnerAlias: string;
	PasswordInherit: boolean;
	InstanceType: string;
	SecurityGroupId: string;
	VpcId: string;
	VSwitchId: string;
	InstanceName: string;
	Description: string;
	InternetMaxBandwidthIn: number;
	InternetMaxBandwidthOut: number;
	HostName: string;
	ZoneId: string;
	SystemDisk.Size: number;
	SystemDisk.Category: string;
	SystemDisk.DiskName: string;
	SystemDisk.Description: string;
	SystemDisk.Iops: number;
	IoOptimized: string;
	InstanceChargeType: string;
	Period: number;
	InternetChargeType: string;
	EnableVmOsConfig: boolean;
	NetworkType: string;
	UserData: string;
	KeyPairName: string;
	RamRoleName: string;
	AutoReleaseTime: string;
	SpotStrategy: string;
	SpotPriceLimit: number;
	SpotDuration: number;
	ResourceGroupId: string;
	SecurityEnhancementStrategy: string;
	DataDisks: DataDisks;
	NetworkInterfaces: NetworkInterfacesInDescribeLaunchTemplateVersions;
	Tags: TagsInDescribeLaunchTemplateVersions;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LaunchTemplateVersionSet
export interface LaunchTemplateVersionSet {
	CreateTime: string;
	ModifiedTime: string;
	LaunchTemplateId: string;
	LaunchTemplateName: string;
	DefaultVersion: boolean;
	VersionNumber: number;
	VersionDescription: string;
	CreatedBy: string;
	LaunchTemplateData: LaunchTemplateData;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LaunchTemplateVersionSets
export interface LaunchTemplateVersionSets {
	LaunchTemplateVersionSet: LaunchTemplateVersionSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeLaunchTemplateVersionsResponse
export interface DescribeLaunchTemplateVersionsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	LaunchTemplateVersionSets: LaunchTemplateVersionSets;
}

