// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SupportedInstanceTypeFamiliesInDescribeDedicatedHosts
export interface SupportedInstanceTypeFamiliesInDescribeDedicatedHosts {
	SupportedInstanceTypeFamily: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SupportedInstanceTypesListInDescribeDedicatedHosts
export interface SupportedInstanceTypesListInDescribeDedicatedHosts {
	SupportedInstanceTypesList: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Capacity
export interface Capacity {
	TotalVcpus: number;
	AvailableVcpus: number;
	TotalVgpus: number;
	AvailableVgpus: number;
	TotalMemory: number;
	AvailableMemory: number;
	TotalLocalStorage: number;
	AvailableLocalStorage: number;
	LocalStorageCategory: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkAttributes
export interface NetworkAttributes {
	SlbUdpTimeout: number;
	UdpTimeout: number;
}

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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.InstancesInDescribeDedicatedHosts
export interface InstancesInDescribeDedicatedHosts {
	Instance: Instance[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationLock
export interface OperationLock {
	LockReason: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.OperationLocksInDescribeDedicatedHosts
export interface OperationLocksInDescribeDedicatedHosts {
	OperationLock: OperationLock[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeDedicatedHosts
export interface TagsInDescribeDedicatedHosts {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedHost
export interface DedicatedHost {
	DedicatedHostId: string;
	AutoPlacement: string;
	RegionId: string;
	ZoneId: string;
	DedicatedHostName: string;
	MachineId: string;
	Description: string;
	DedicatedHostType: string;
	Sockets: number;
	Cores: number;
	PhysicalGpus: number;
	GPUSpec: string;
	ActionOnMaintenance: string;
	Status: string;
	CreationTime: string;
	ChargeType: string;
	SaleCycle: string;
	ExpiredTime: string;
	AutoReleaseTime: string;
	ResourceGroupId: string;
	SupportedInstanceTypeFamilies: SupportedInstanceTypeFamiliesInDescribeDedicatedHosts;
	SupportedInstanceTypesList: SupportedInstanceTypesListInDescribeDedicatedHosts;
	Capacity: Capacity;
	NetworkAttributes: NetworkAttributes;
	Instances: InstancesInDescribeDedicatedHosts;
	OperationLocks: OperationLocksInDescribeDedicatedHosts;
	Tags: TagsInDescribeDedicatedHosts;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DedicatedHosts
export interface DedicatedHosts {
	DedicatedHost: DedicatedHost[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeDedicatedHostsResponse
export interface DescribeDedicatedHostsResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	DedicatedHosts: DedicatedHosts;
}

