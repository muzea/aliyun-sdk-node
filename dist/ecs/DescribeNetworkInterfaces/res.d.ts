// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.SecurityGroupIdsInDescribeNetworkInterfaces
export interface SecurityGroupIdsInDescribeNetworkInterfaces {
	SecurityGroupId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.AssociatedPublicIp
export interface AssociatedPublicIp {
	PublicIpAddress: string;
	AllocationId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PrivateIpSet
export interface PrivateIpSet {
	PrivateIpAddress: string;
	Primary: boolean;
	AssociatedPublicIp: AssociatedPublicIp;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.PrivateIpSets
export interface PrivateIpSets {
	PrivateIpSet: PrivateIpSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Ipv6Set
export interface Ipv6Set {
	Ipv6Address: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.Ipv6Sets
export interface Ipv6Sets {
	Ipv6Set: Ipv6Set[];
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.TagsInDescribeNetworkInterfaces
export interface TagsInDescribeNetworkInterfaces {
	Tag: Tag[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkInterfaceSet
export interface NetworkInterfaceSet {
	NetworkInterfaceId: string;
	Status: string;
	Type: string;
	VpcId: string;
	VSwitchId: string;
	ZoneId: string;
	PrivateIpAddress: string;
	MacAddress: string;
	NetworkInterfaceName: string;
	Description: string;
	InstanceId: string;
	CreationTime: string;
	ResourceGroupId: string;
	ServiceID: number;
	ServiceManaged: boolean;
	SecurityGroupIds: SecurityGroupIdsInDescribeNetworkInterfaces;
	AssociatedPublicIp: AssociatedPublicIp;
	PrivateIpSets: PrivateIpSets;
	Ipv6Sets: Ipv6Sets;
	Tags: TagsInDescribeNetworkInterfaces;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.NetworkInterfaceSets
export interface NetworkInterfaceSets {
	NetworkInterfaceSet: NetworkInterfaceSet[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ecs.DescribeNetworkInterfacesResponse
export interface DescribeNetworkInterfacesResponse {
	RequestId: string;
	TotalCount: number;
	PageNumber: number;
	PageSize: number;
	NetworkInterfaceSets: NetworkInterfaceSets;
}

