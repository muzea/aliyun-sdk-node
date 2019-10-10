// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.InstanceTypes
export interface InstanceTypes {
	InstanceType: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.SecurityGroupIds
export interface SecurityGroupIds {
	SecurityGroupId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DataDisk
export interface DataDisk {
	Size: number;
	Category: string;
	SnapshotId: string;
	Device: string;
	DeleteWithInstance: boolean;
	Encrypted: string;
	KMSKeyId: string;
	DiskName: string;
	Description: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DataDisks
export interface DataDisks {
	DataDisk: DataDisk[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.Tag
export interface Tag {
	Key: string;
	Value: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.Tags
export interface Tags {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.SpotPriceModel
export interface SpotPriceModel {
	InstanceType: string;
	PriceLimit: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.SpotPriceLimit
export interface SpotPriceLimit {
	SpotPriceModel: SpotPriceModel[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingConfiguration
export interface ScalingConfiguration {
	ScalingConfigurationId: string;
	ScalingConfigurationName: string;
	ScalingGroupId: string;
	InstanceName: string;
	ImageId: string;
	ImageName: string;
	HostName: string;
	InstanceType: string;
	Cpu: number;
	Memory: number;
	InstanceGeneration: string;
	SecurityGroupId: string;
	IoOptimized: string;
	InternetChargeType: string;
	InternetMaxBandwidthIn: number;
	InternetMaxBandwidthOut: number;
	SystemDiskCategory: string;
	SystemDiskSize: number;
	SystemDiskName: string;
	SystemDiskDescription: string;
	LifecycleState: string;
	CreationTime: string;
	LoadBalancerWeight: number;
	UserData: string;
	KeyPairName: string;
	RamRoleName: string;
	DeploymentSetId: string;
	SecurityEnhancementStrategy: string;
	SpotStrategy: string;
	PasswordInherit: boolean;
	ResourceGroupId: string;
	HpcClusterId: string;
	InstanceDescription: string;
	InstanceTypes: InstanceTypes;
	SecurityGroupIds: SecurityGroupIds;
	DataDisks: DataDisks;
	Tags: Tags;
	SpotPriceLimit: SpotPriceLimit;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.ScalingConfigurations
export interface ScalingConfigurations {
	ScalingConfiguration: ScalingConfiguration[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ess.DescribeScalingConfigurationsResponse
export interface DescribeScalingConfigurationsResponse {
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	RequestId: string;
	ScalingConfigurations: ScalingConfigurations;
}

