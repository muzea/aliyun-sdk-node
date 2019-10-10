// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.VSwitchIdsInDescribeRouteTables
export interface VSwitchIdsInDescribeRouteTables {
	VSwitchId: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.NextHopRelatedInfo
export interface NextHopRelatedInfo {
	InstanceType: string;
	RegionId: string;
	InstanceId: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.NextHop
export interface NextHop {
	NextHopId: string;
	NextHopOppsiteInstanceId: string;
	NextHopType: string;
	Enabled: number;
	Weight: number;
	NextHopRegionId: string;
	NextHopOppsiteType: string;
	NextHopOppsiteRegionId: string;
	NextHopRelatedInfo: NextHopRelatedInfo;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.NextHopsInDescribeRouteTables
export interface NextHopsInDescribeRouteTables {
	NextHop: NextHop[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.RouteEntry
export interface RouteEntry {
	PrivateIpAddress: string;
	NextHopOppsiteInstanceId: string;
	NextHopType: string;
	IpVersion: string;
	RouteTableId: string;
	RouteEntryName: string;
	InstanceId: string;
	RouteEntryId: string;
	Status: string;
	DestinationCidrBlock: string;
	NextHopRegionId: string;
	NextHopOppsiteType: string;
	NextHopOppsiteRegionId: string;
	Type: string;
	NextHops: NextHopsInDescribeRouteTables;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.RouteEntrysInDescribeRouteTables
export interface RouteEntrysInDescribeRouteTables {
	RouteEntry: RouteEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.RouteTable
export interface RouteTable {
	ResourceGroupId: string;
	CreationTime: string;
	RouteTableType: string;
	Status: string;
	RouteTableId: string;
	VRouterId: string;
	VSwitchIds: VSwitchIdsInDescribeRouteTables;
	RouteEntrys: RouteEntrysInDescribeRouteTables;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CloudResourceSetType
export interface CloudResourceSetType {
	ResourceType: string;
	ResourceCount: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.CloudResourcesInDescribeVSwitchAttributes
export interface CloudResourcesInDescribeVSwitchAttributes {
	CloudResourceSetType: CloudResourceSetType[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeVSwitchAttributesResponse
export interface DescribeVSwitchAttributesResponse {
	RequestId: string;
	VSwitchId: string;
	VpcId: string;
	Status: string;
	CidrBlock: string;
	Ipv6CidrBlock: string;
	ZoneId: string;
	AvailableIpAddressCount: number;
	Description: string;
	VSwitchName: string;
	CreationTime: string;
	IsDefault: boolean;
	ResourceGroupId: string;
	NetworkAclId: string;
	RouteTable: RouteTable;
	CloudResources: CloudResourcesInDescribeVSwitchAttributes;
}

