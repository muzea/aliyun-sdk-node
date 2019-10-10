// this file was automatically generated, DO NOT EDIT
// structs
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

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.RouteEntrysInDescribeRouteEntryList
export interface RouteEntrysInDescribeRouteEntryList {
	RouteEntry: RouteEntry[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vpc.DescribeRouteEntryListResponse
export interface DescribeRouteEntryListResponse {
	RequestId: string;
	NextToken: string;
	RouteEntrys: RouteEntrysInDescribeRouteEntryList;
}

