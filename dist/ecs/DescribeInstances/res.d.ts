// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SecurityGroupIdsInDescribeInstances
export interface SecurityGroupIdsInDescribeInstances {
	SecurityGroupId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InnerIpAddressInDescribeInstances
export interface InnerIpAddressInDescribeInstances {
	IpAddress: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PublicIpAddressInDescribeInstances
export interface PublicIpAddressInDescribeInstances {
	IpAddress: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.RdmaIpAddress
export interface RdmaIpAddress {
	IpAddress: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EipAddressInDescribeInstances
export interface EipAddressInDescribeInstances {
	AllocationId: string;
	IpAddress: string;
	Bandwidth: number;
	InternetChargeType: string;
	IsSupportUnassociate: boolean;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.EcsCapacityReservationAttr
export interface EcsCapacityReservationAttr {
	CapacityReservationId: string;
	CapacityReservationPreference: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedHostAttribute
export interface DedicatedHostAttribute {
	DedicatedHostName: string;
	DedicatedHostId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedInstanceAttribute
export interface DedicatedInstanceAttribute {
	Tenancy: string;
	Affinity: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PrivateIpAddressInDescribeInstanceAttribute
export interface PrivateIpAddressInDescribeInstanceAttribute {
	IpAddress: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.VpcAttributes
export interface VpcAttributes {
	VSwitchId: string;
	VpcId: string;
	NatIpAddress: string;
	PrivateIpAddress: PrivateIpAddressInDescribeInstanceAttribute;
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkInterfacesInDescribeInstances
export interface NetworkInterfacesInDescribeInstances {
	NetworkInterface: NetworkInterface[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.LockReason
export interface LockReason {
	LockReason: string;
	LockMsg: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationLocksInDescribeInstances
export interface OperationLocksInDescribeInstances {
	LockReason: LockReason[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeInstances
export interface TagsInDescribeInstances {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Instance
export interface Instance {
	ImageId: string;
	InstanceType: string;
	AutoReleaseTime: string;
	OsType: string;
	DeviceAvailable: boolean;
	InstanceNetworkType: string;
	LocalStorageAmount: number;
	NetworkType: string;
	IsSpot: boolean;
	InstanceChargeType: string;
	ClusterId: string;
	InstanceName: string;
	CreditSpecification: string;
	GPUAmount: number;
	StartTime: string;
	ZoneId: string;
	InternetChargeType: string;
	InternetMaxBandwidthIn: number;
	HostName: string;
	Status: string;
	CPU: number;
	Cpu: number;
	SpotPriceLimit: number;
	OSName: string;
	OSNameEn: string;
	SerialNumber: string;
	RegionId: string;
	IoOptimized: boolean;
	InternetMaxBandwidthOut: number;
	ResourceGroupId: string;
	InstanceTypeFamily: string;
	InstanceId: string;
	DeploymentSetId: string;
	GPUSpec: string;
	Description: string;
	Recyclable: boolean;
	SaleCycle: string;
	ExpiredTime: string;
	OSType: string;
	Memory: number;
	CreationTime: string;
	KeyPairName: string;
	HpcClusterId: string;
	LocalStorageCapacity: number;
	VlanId: string;
	StoppedMode: string;
	SpotStrategy: string;
	DeletionProtection: boolean;
	SecurityGroupIds: SecurityGroupIdsInDescribeInstances;
	InnerIpAddress: InnerIpAddressInDescribeInstances;
	PublicIpAddress: PublicIpAddressInDescribeInstances;
	RdmaIpAddress: RdmaIpAddress;
	EipAddress: EipAddressInDescribeInstances;
	EcsCapacityReservationAttr: EcsCapacityReservationAttr;
	DedicatedHostAttribute: DedicatedHostAttribute;
	DedicatedInstanceAttribute: DedicatedInstanceAttribute;
	VpcAttributes: VpcAttributes;
	NetworkInterfaces: NetworkInterfacesInDescribeInstances;
	OperationLocks: OperationLocksInDescribeInstances;
	Tags: TagsInDescribeInstances;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstancesInDescribeInstances
export interface InstancesInDescribeInstances {
	Instance: Instance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeInstancesResponse
export interface DescribeInstancesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	Instances: InstancesInDescribeInstances;
}

